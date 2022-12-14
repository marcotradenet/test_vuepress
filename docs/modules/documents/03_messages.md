<!--
order: 3
-->

# Messages

## Share a Document with `MsgShareDocument`

In order to share a document you are required to have an account with some tokens inside it.  

### Protobuf message

```protobuf
message MsgShareDocument {
  string sender = 1;
  repeated string recipients = 2;
  string UUID = 3;
  documents.DocumentMetadata metadata = 4;
  string contentURI = 5;
  documents.DocumentChecksum checksum = 6;
  documents.DocumentEncryptionData encryptionData = 7;
  documents.DocumentDoSign doSign = 8;
}
```

### Transaction message
In order to properly send a transaction to share a document, you will need to create and sign the following message.

```json
{
  "type": "commercio/MsgShareDocument",
  "value": {
    "sender": "<Sender address>",
    "recipients": [
      "<Recipient address>"
    ],
    "uuid": "<Document UUID>",
    "content_uri": "<Document content URI>",
    "metadata": {
      "content_uri": "<Metadata content URI>",
      "schema": {
        "uri": "<Metadata schema definition URI>",
        "version": "<Metadata schema version>"
      },
      "schema_type": "<Metadata schema type>"
    },
    "checksum": {
      "value": "<Document content checksum value>",
      "algorithm": "<Document content checksum algorithm>"
    },
    "encryption_data": {
      "keys": [
        {
          "recipient": "<Recipient address>",
          "value": "<Encrypted and encoded symmetric key value>"
        }
      ],
      "encrypted_data": [
        "<Encrypted field identifier>"
      ]
    },
    "do_sign": {
        "storage_uri": "uri://storage",
        "signer_instance": "did S",
        "sdn_data": [
          "common_name",                
          "surname",                
          "serial_number",                
          "given_name",
          "organization",
          "country"
        ],
        "vcr_id": "<VCR Identifier",
        "certificate_profile": "<one of the profiles supported by S>"
    }
  }
}
```

### Field requirements

| Field | Required | Limit/Format |
| :---: | :------: | :---: |
| `sender` | Yes | `bech32` |
| `recipients` | Yes | set of `bech32` |
| `uuid` | Yes | [`uuid-v4`](https://en.wikipedia.org/wiki/Universally_unique_identifier) |
| `content_uri` | No *<sup>1</sup>  *<sup>2</sup> *<sup>3</sup> | 512 bytes |
| `metadata` | Yes | |
| `checksum` | No *<sup>2</sup> | |
| `encryption_data` | No *<sup>1</sup> | |
| `do_sign` | No *<sup>1</sup> | |

- *<sup>1</sup> Must be omitted if empty.
- *<sup>2</sup> Required when included in `encryption_data`.
- *<sup>3</sup> Required when using `do_sign`.

#### `metadata` field requirements
| Field | Required | Limit/Format |
| :---: | :------: | :---: |
| `content_uri` | Yes | 512 bytes | 
| `schema_type` | No *<sup>1</sup> *<sup>2</sup>  | 512 bytes | 
| `schema` | No *<sup>1</sup> | |

- *<sup>1</sup> The `schema_type` and `schema` fields are mutually exclusive.
This means that if the first one exists the second will not be used and vice versa.
- *<sup>2</sup> Must be omitted if empty.
   
#### `metadata.schema` field requirements
| Field | Required | Limit/Format | 
| :---: | :------: | :---: |
| `uri` | Yes | 512 bytes |
| `version` | Yes | 32 bytes |

#### `checksum` field requirements
| Field | Required | 
| :---: | :------: |
| `value` | Yes *<sup>1</sup> |
| `algorithm` | Yes *<sup>2</sup> |

- *<sup>1</sup> `value` must be in exadecimal format.
- *<sup>2</sup> You can read which `checksum.algorithm` values are supported inside the
[supported checksum algorithms section](#supported-checksum-algorithms).

#### `encryption_data` field requirements
| Field | Required |
| :---: | :------: |
| `keys` | Yes *<sup>1</sup> *<sup>2</sup> |
| `encrypted_data` | Yes *<sup>3</sup> |

- *<sup>1</sup> `keys` must be a non-empty list of `document_encryption_key`s.
- *<sup>2</sup> For each `recipient` of the document, there should be a corresponding `document_encryption_key` and vice versa.
- *<sup>3</sup> `encrypted_data` must be a list of strings, with these supported values: `content`, `content_uri`, `metadata.content_uri`, `metadata.schema.uri`.

#### `document_encryption_key` field requirements
| Field | Required | Limit/Format |
| :---: | :------: | :---: |
| `recipient` | Yes |  | 
| `value` | Yes *<sup>1</sup> | 512 bytes |

- *<sup>1</sup> Value must be in exadecimal format.

#### `do_sign` field requirements
| Field | Required | Limit/Format |
| :---: | :------: | :---: |
| `storage_uri` | Yes | |
| `signer_instance` | Yes | |
| `sdn_data` | No *<sup>1</sup> | |
| `vcr_id` | Yes | 64 bytes |
| `certificate_profile` | Yes  | 32 bytes |

- *<sup>1</sup> `sdn_data` must be a set of strings. It represents the required fields for _Subject Distinguish Name_. 
  The allowed values (compliant to the x509 standard) are `common_name`, `country`, `given_name`, `organization`, `serial_number`, `surname`. 
  If empty, the default value is `serial_number`.

### Supported checksum algorithms
When computing the checksum of a document's contents, you must use one of the following supported checksum algorithms.  
Not using one of these will result in your transaction being rejected or mishandled by recipients. 

| Algorithm | Specification |
| :-------: | :-----------: |
| `md5` | [MD5](https://www.ietf.org/rfc/rfc1321.txt) |
| `sha-1`| [SHA-1](https://tools.ietf.org/html/rfc3174) |
| `sha-224` | [RFC 4634](https://tools.ietf.org/html/rfc4634) |
| `sha-256` | [RFC 4634](https://tools.ietf.org/html/rfc4634) |
| `sha-384` | [RFC 4634](https://tools.ietf.org/html/rfc4634) |
| `sha-512` | [RFC 4634](https://tools.ietf.org/html/rfc4634) |

#### Checksum validity check
Please note that, when sending a document that has an associated checksum, the validity of the checksum itself is
checked only formally. This means that we only check that the hash value has a valid length, but we do not check 
if the given hash is indeed the hash of the document's content. It should be the client responsibility to perform this 
check.  

### Encrypting the data

::: tip
The following is just an example on how to do file encryption, you're free to use any other algorithm!
:::

The following procedure should be followed to properly encrypt the data that should not be shared publicly.

We'll use AES-256 in CBC mode to encrypt a file, and let the recipient decrypt it by sharing with
it the AES encryption key.

1. Generate a safe AES-256 encryption key. A key size of 256 bits is recommended.
   ```
   aes_key = get_random_aes_key(key_size = 256)
   ```

2. Use the AES key to encrypt the data you desire using the AES-256 CBC method.  
   ```
   encrypted_data = aes_encrypt_cbc(
     key = aes_key, 
     initialization_vector = null
   )
   ```
   
3. Encrypt the AES-256 key using the recipient's public encryption key  
   ```
   encrypted_aes_key = rsa_encrypt(
     key = recipient.public_rsa_encryption_key,
     value = aes_key
   )    
   ```
   
4. Encode the encrypted AES-256 key  
   ```
   encoded_encryption_key = hex_encode(encrypted_aes_key)
   ```
   
5. Compose the encryption data  
   ```json
   {
     "encryption_data": {
       "keys": [
         {
           "recipient": "<Recipient address>",
           "value": "<Hex encoded encryption key>"
         }
       ],
       "encrypted_data": [
         "<Your encrypted data identifier>"
       ]
     }
   }
   ```

The `encrypted_data` field does not contain the encrypted payload itself, but rather denotes what message property is encrypted with `aes_key`. 

`encrypted_data` only accepts the following identifiers:
 - `content_uri`
 - `metadata.content_uri`
 - `metadata.schema.uri`

A special identifier, `content`, can be used to specify that `aes_key` has been used to encrypt a file exchanged by other means of communication.

### Supported encrypted data
Please note that when specifying which data you have encrypted for the document recipient, you need to use one or 
more of the following identifiers inside the `encryption_data.encrypted_data` field.  
Inserting other non supported values inside such a field will result in the transactions being rejected as not valid.   

| Identifier | Referenced data | 
| :--------: | :-------------- |
| `content` | Document's file contents |
| `content_uri` | Value of the `content_uri` field |
| `metadata.content_uri` | Value of the `content_uri` field inside the `metadata` object |
| `metadata.schema.uri` | Value of the `uri` field inside the `metadata`'s `schema` sub-object |

## Send a Document Receipt with `MsgSendDocumentReceipt`
Once you have received a document and you want to acknowledge the sender that you have properly read it, you can use 
the `MsgSendDocumentReceipt` message that allows you to do that. 

### Protobuf message

```protobuf
message MsgSendDocumentReceipt {
  string UUID = 1;
  string sender = 2;
  string recipient = 3;
  string txHash = 4;
  string DocumentUUID = 5;
  string proof = 6;  // Optional
}
```

### Transaction message
In order to properly send a transaction to send a document receipt, you will need to create and sign the
following message.

```json
{
  "type": "commercio/MsgSendDocumentReceipt",
  "value": {
    "uuid": "<Unique receipt identifier>",
    "sender": "<Receipt sender address: one of recipients of Document>",
    "recipient": "<Receipt recipient address: sender of Document>",
    "tx_hash": "<Tx hash in which the document has been sent>",
    "document_uuid": "<Document UUID>",
    "proof": "<Optional reading proof>"
  }
}
```

Please note that the former sender of a document becomes the receiver for a `MsgSendDocumentReceipt`.
Conversely, one of the receivers (or it can be just one receiver) becomes the sender for a `MsgSendDocumentReceipt`.

### Field requirements
| Field | Required | Limit/Format |
| :---: | :------: | :------: |
| `uuid` | Yes | [`uuid-v4`](https://en.wikipedia.org/wiki/Universally_unique_identifier) |
| `sender` | Yes | `bech32` | 
| `recipient` | Yes | `bech32` | 
| `tx_hash` | Yes | |
| `document_uuid` | Yes | [`uuid-v4`](https://en.wikipedia.org/wiki/Universally_unique_identifier) |
| `proof` | No *<sup>1</sup> | |

- *<sup>1</sup> Must be omitted if empty. `proof` can be used to prove that some part of the receipt is correlated to certain documents and/or some other proofs out of chain.
