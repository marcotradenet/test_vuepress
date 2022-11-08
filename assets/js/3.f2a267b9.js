(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{277:function(e,t,a){e.exports=a.p+"assets/img/sharedoc_post.66625cd1.png"},278:function(e,t,a){e.exports=a.p+"assets/img/explorer_check_transaction.28dba95d.png"},279:function(e,t,a){e.exports=a.p+"assets/img/explorer_transaction_doc_tx_hash.779427f9.png"},280:function(e,t,a){e.exports=a.p+"assets/img/sharedoc_processes.13862ff3.png"},281:function(e,t,a){e.exports=a.p+"assets/img/sharedoc_process_by_process_id.319d8c5f.png"},282:function(e,t,a){e.exports=a.p+"assets/img/sharedoc_sent.0d701e3f.png"},283:function(e,t,a){e.exports=a.p+"assets/img/sharedoc_received.0adbf81b.png"},305:function(e,t,a){"use strict";a.r(t);var s=a(14),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"commercioapi-docs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commercioapi-docs"}},[e._v("#")]),e._v(" CommercioAPI DOCS")]),e._v(" "),t("p",[e._v("The  CommercioAPI DOCS allows you to share a document with another user, and retrieve the list of documents that you have received.")]),e._v(" "),t("h2",{attrs:{id:"what-is-an-electronic-cerified-delivery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-an-electronic-cerified-delivery"}},[e._v("#")]),e._v(" What is an Electronic Cerified Delivery?")]),e._v(" "),t("p",[t("strong",[e._v("IMPORTANT!!!")])]),e._v(" "),t("ul",[t("li",[e._v("We are not actually sharing Documents on a blockchain.")]),e._v(" "),t("li",[e._v("We are sharing a transaction on a blockchain with a document footprint (HASH)")])]),e._v(" "),t("p",[e._v("An hash is the output of a hashing algorithm like SHA (Secure Hash Algorithm). These algorithms essentially aim to produce a unique, fixed-length string – the hash value, or “message digest” – for any given piece of data or “message”.")]),e._v(" "),t("p",[e._v("As every electronic file is just data that can be represented in binary form, a hashing algorithm can take that data and run a complex calculation on it and output a fixed-length string as the result of the calculation.")]),e._v(" "),t("p",[e._v("The result is the file’s hash value or message digest.")]),e._v(" "),t("p",[e._v("'Sharing a Document' on Commercio.network means sending a shareDoc transaction on a blockchain with your document hash.")]),e._v(" "),t("h3",{attrs:{id:"sharedoc-real-world-use-cases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sharedoc-real-world-use-cases"}},[e._v("#")]),e._v(" ShareDoc real world use cases")]),e._v(" "),t("ul",[t("li",[e._v("Legally prove a document was shared with a third party")]),e._v(" "),t("li",[e._v("Timestamp a document")]),e._v(" "),t("li",[e._v("Prove the existence of document")]),e._v(" "),t("li",[e._v("Notarize a document")])]),e._v(" "),t("h2",{attrs:{id:"sharedoc-trasaction-processes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sharedoc-trasaction-processes"}},[e._v("#")]),e._v(" ShareDoc trasaction processes")]),e._v(" "),t("p",[e._v("See folowing guides for more technical details on  "),t("a",{attrs:{href:"/x/documents/#sending-a-document"}},[e._v("MsgShareDocument")]),e._v(" using the "),t("a",{attrs:{href:"/x/documents/#docs"}},[e._v("DOCS MODULE")])]),e._v(" "),t("h3",{attrs:{id:"send-a-sharedoc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#send-a-sharedoc"}},[e._v("#")]),e._v(" Send a shareDoc")]),e._v(" "),t("p",[e._v("Use the API POST : "),t("code",[e._v("/sharedoc/process")])]),e._v(" "),t("p",[e._v("Permit to create a process to send a message in the block chain named "),t("code",[e._v("MsgShareDocument")]),e._v(" or Sharedoc message throught the DOCS  Module")]),e._v(" "),t("h4",{attrs:{id:"step-by-step-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-by-step-example"}},[e._v("#")]),e._v(" Step by step Example")]),e._v(" "),t("p",[e._v("Let's create a new process to send a Sharedocument message containig the hash (REMEMBER not the actual document, only the hash ) of a document associated with the given contentUri and having the given metadata and checksum.")]),e._v(" "),t("h5",{attrs:{id:"step-1-define-the-first-query"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-1-define-the-first-query"}},[e._v("#")]),e._v(" Step 1 - Define the first query")]),e._v(" "),t("p",[e._v("Parameter value :")]),e._v(" "),t("ul",[t("li",[e._v("Your account address (authenticated user): es "),t("code",[e._v("did:com:1j930xl8kr92wrxpmur0e5p8vlmy2ce6zg87w3")])]),e._v(" "),t("li",[e._v("Account address of the recipient/s: es "),t("code",[e._v("did:com:1j930xl8kr92wrxpmur0e5p8vlmy2ce6zg87w3")])]),e._v(" "),t("li",[e._v("Hash of the document with "),t("code",[e._v("sha-256")]),e._v(" algorithm: "),t("code",[e._v("3cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824")])]),e._v(" "),t("li",[e._v("Encripted content uri : "),t("code",[e._v("8cc590c1823ee24dae77eadfc3b6c62cac921f5e5d1526c99268ea3bc6f53fd9")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n  "content_uri": "8cc590c1823ee24dae77eadfc3b6c62cac921f5e5d1526c99268ea3bc6f53fd9",\n  "hash": "3cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824",\n  "hash_algorithm": "sha-256",\n  "recipients": [\n    "did:com:1j930xl8kr92wrxpmur0e5p8vlmy2ce6zg87w3t"\n  ],\n  "sender": "did:com:1j930xl8kr92wrxpmur0e5p8vlmy2ce6zg87w3t",\n  "type": "basic"\n}\n')])])]),t("h4",{attrs:{id:"step-2-use-the-api-to-send-the-message"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-2-use-the-api-to-send-the-message"}},[e._v("#")]),e._v(" Step 2 - Use the API to Send the message")]),e._v(" "),t("p",[t("strong",[e._v("Use the tryout")])]),e._v(" "),t("p",[t("img",{attrs:{src:a(277),alt:"Modal"}})]),e._v(" "),t("p",[t("strong",[e._v("Corresponding Cli request")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('curl -X \'POST\' \\\n  \'https://dev-api.commercio.app/v1/sharedoc/process\' \\\n  -H \'accept: application/json\' \\\n  -H \'Authorization: Bearer .....\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "back_url": "http://example.com/callback",\n  "content_uri": "55fa8b74d91bc8443f46b9dc7a179bd3f709bb803f9dccda467310f0fb656a7f",\n  "hash": "3cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824",\n  "hash_algorithm": "sha-256",\n  "metadata": {\n    "content_uri": "55fa8b74d91bc8443f46b9dc7a179bd3f709bb803f9dccda467310f0fb656a7f",\n    "schema": {\n      "uri": "http://example.com/schema.xml",\n      "version": "1.0.0"\n    }\n  },\n  "recipients": [\n    "did:com:1tq5mvp7j4vtew08htaswsyjugzewe4jyph20qr"\n  ]\n}\'\n')])])]),t("p",[t("strong",[e._v("API : Body response")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n  "process_id": "34669051-707f-4230-a960-e0ef8e517e43",\n  "sender": "did:com:1j930xl8kr92wrxpmur0e5p8vlmy2ce6zg87w3t",\n  "receivers": [\n    "did:com:1j930xl8kr92wrxpmur0e5p8vlmy2ce6zg87w3t"\n  ],\n  "document_id": "b03c6c6e-90e4-49ae-a582-e6a3ff4726a3",\n  "doc_hash": "3cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824",\n  "doc_hash_alg": "sha-256",\n  "doc_tx_hash": "",\n  "doc_metadata": {\n    "content_uri": "-",\n    "schema": {\n      "uri": "-",\n      "version": "-"\n    }\n  },\n  "timestamp": "2021-05-20T08:27:56Z",\n  "status": "queued"\n}\n')])])]),t("p",[e._v("Register the  process_id assigned "),t("code",[e._v('"process_id": "34669051-707f-4230-a960-e0ef8e517e43"')]),e._v(" for future check")]),e._v(" "),t("h5",{attrs:{id:"step-3-check-the-process-status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-3-check-the-process-status"}},[e._v("#")]),e._v(" Step 3 - Check the process status")]),e._v(" "),t("p",[e._v("Use the API Get : /sharedoc/process with process_id = "),t("code",[e._v("34669051-707f-4230-a960-e0ef8e517e43")])]),e._v(" "),t("p",[e._v("see for more details below in the guide")]),e._v(" "),t("p",[t("strong",[e._v("API : Body response")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n  "process_id": "34669051-707f-4230-a960-e0ef8e517e43",\n  "sender": "did:com:1j930xl8kr92wrxpmur0e5p8vlmy2ce6zg87w3t",\n  "receivers": [\n    "did:com:1j930xl8kr92wrxpmur0e5p8vlmy2ce6zg87w3t"\n  ],\n  "document_id": "b03c6c6e-90e4-49ae-a582-e6a3ff4726a3",\n  "doc_hash": "3cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824",\n  "doc_hash_alg": "sha-256",\n  "doc_tx_hash": "78733941DE98F4D39424DD082F3516438E397A236BA28C0BBE2AC3CD3A66E94F",\n  "doc_metadata": {\n    "content_uri": "-",\n    "schema": {\n      "uri": "-",\n      "version": "-"\n    }\n  },\n  "timestamp": "2021-05-20T08:27:56Z",\n  "status": "processed"\n}\n')])])]),t("p",[e._v('Acquire the  "doc_tx_hash": "78733941DE98F4D39424DD082F3516438E397A236BA28C0BBE2AC3CD3A66E94F"')]),e._v(" "),t("h5",{attrs:{id:"step-4-check-the-transaction-in-the-explorer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-4-check-the-transaction-in-the-explorer"}},[e._v("#")]),e._v(" Step 4  - Check the transaction in the explorer")]),e._v(" "),t("p",[e._v("Use the "),t("code",[e._v("doc_tx_hash")]),e._v("  in the explorer filter")]),e._v(" "),t("p",[t("img",{attrs:{src:a(278),alt:"Modal"}})]),e._v(" "),t("p",[e._v("Check the trasaction")]),e._v(" "),t("p",[t("img",{attrs:{src:a(279),alt:"Modal"}})]),e._v(" "),t("h4",{attrs:{id:"common-error"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#common-error"}},[e._v("#")]),e._v(" Common error")]),e._v(" "),t("p",[e._v("The following are common error composing using a  POST Sharedocument message")]),e._v(" "),t("h5",{attrs:{id:"_1-hashing-error"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-hashing-error"}},[e._v("#")]),e._v(" 1.Hashing Error")]),e._v(" "),t("p",[e._v("Message Example")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(' {\n    "error": "could not validate the ShareDocumentRequest: The hash field must have a length of 32, got instead 64"\n}\n')])])]),t("p",[e._v("It implies that the hash string indicated in entity "),t("code",[e._v("hash")]),e._v(" has not a compliant format in respect of hashing algoritm indicated in field "),t("code",[e._v("hash_algorithm")])]),e._v(" "),t("p",[e._v("Example")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('...\n"hash": "2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824",\n"hash_algorithm": "md5",\n... \n')])])]),t("p",[e._v("The hash "),t("code",[e._v("2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824")]),e._v(" is a sha-256 format NOT Md5")]),e._v(" "),t("h5",{attrs:{id:"_2-recipients-format-not-correct"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-recipients-format-not-correct"}},[e._v("#")]),e._v(" 2. Recipients format not correct")]),e._v(" "),t("p",[e._v("Message Example")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n    "error": "could not build MsgShareDocument: could not derive account address from bech32 addr decoding bech32 failed: invalid bech32 string length 6: string"\n}\n')])])]),t("p",[e._v("It implies that the value indicated in the entity "),t("code",[e._v("recipients")]),e._v(" has not a correct format  (Format example : did:com:1tq5mvp7j4vtew08htaswsyjugzewe4jyph20qr )")]),e._v(" "),t("p",[e._v("Entity  "),t("code",[e._v("recipients")]),e._v("  attend an array of wallet address (did)")]),e._v(" "),t("p",[e._v("Example")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('...\n "recipients": [\n    "string"\n  ]\n... \n')])])]),t("p",[e._v("The value "),t("code",[e._v("string")]),e._v(" is not a "),t("code",[e._v("did")]),e._v(" format")]),e._v(" "),t("h5",{attrs:{id:"_3-not-enough-ccc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-not-enough-ccc"}},[e._v("#")]),e._v(" 3. Not enough CCC")]),e._v(" "),t("p",[e._v("Message Example")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n  "error": "account has only 0uccc, required more 10000uccc"\n}\n')])])]),t("p",[e._v("It implies that the wallet of the sender has not enough CCC to pay the chain fee for the transaction.")]),e._v(" "),t("h3",{attrs:{id:"sent-processes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sent-processes"}},[e._v("#")]),e._v(" Sent Processes")]),e._v(" "),t("p",[e._v("Use the API GET : "),t("code",[e._v("/sharedoc/process")])]),e._v(" "),t("p",[e._v("Permit to get all the process of sharedoc sent by the authenticated user")]),e._v(" "),t("p",[e._v("Moreover throught the following  parameters the API  permit to paginate and order the result.")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("limit")]),e._v(" : Limit the max number of elements returned")]),e._v(" "),t("li",[t("code",[e._v("next_cursor")]),e._v(":  Cursor that specifies an ID from starting to return following elements")]),e._v(" "),t("li",[t("code",[e._v("order")]),e._v(" :  Elements ordering by creation timestamp")])]),e._v(" "),t("h4",{attrs:{id:"step-by-step-example-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-by-step-example-2"}},[e._v("#")]),e._v(" Step by step Example")]),e._v(" "),t("p",[e._v("Let's create a query to get all messages sent by the sender with "),t("code",[e._v("did:com:1tq5mvp7j4vtew08htaswsyjugzewe4jyph20qr")]),e._v(" thati is associated to the authenticated user")]),e._v(" "),t("h5",{attrs:{id:"step-1-define-the-first-query-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-1-define-the-first-query-2"}},[e._v("#")]),e._v(" Step 1 - Define the first query")]),e._v(" "),t("p",[e._v("Parameter value")]),e._v(" "),t("ul",[t("li",[e._v("limit = 30 (is the default value)")]),e._v(" "),t("li",[e._v("cursor = empty")]),e._v(" "),t("li",[e._v("order : asc")])]),e._v(" "),t("p",[t("strong",[e._v("Use the tryout")])]),e._v(" "),t("p",[t("img",{attrs:{src:a(280),alt:"Modal"}})]),e._v(" "),t("p",[t("strong",[e._v("Corresponding Cli request")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("curl -X 'GET' \\\n  'https://dev-api.commercio.app/v1/sharedoc/process?limit=30&order=asc' \\\n  -H 'accept: application/json' \\\n  -H 'Authorization: Bearer ....'\n\n")])])]),t("p",[t("strong",[e._v("API : Body response")])]),e._v(" "),t("p",[e._v("Example Value")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n  "processes": [\n    {\n      "process_id": "38367565-ce60-4fb7-96ac-be591b5c65cb",\n      "sender": "did:com:1tq5mvp7j4vtew08htaswsyjugzewe4jyph20qr",\n      "receivers": [\n        "did:com:1ffjuspvy8sm8fw7wjyjtgvzg0wgv36pqxrah9n"\n      ],\n      "document_id": "be3a7460-4935-4434-b045-f0208d55c076",\n      "doc_hash": "2f1ec16b9a177aabd5e1ff6bb5685a3df3a6b462dfa147e6b35585fa58954b6b",\n      "doc_hash_alg": "sha-256",\n      "doc_tx_hash": "390EF4F23974B3CF7663B5F3C8B263F9D0ED1A900167D02ED4760052003CC7F2",\n      "tx_timestamp": "2021-06-30T09:49:32Z",\n      "tx_type": "commercio/MsgShareDocument",\n      "doc_metadata": {\n        "content_uri": "-",\n        "schema": {\n          "uri": "-",\n          "version": "-"\n        }\n      },\n      "chain_id": "commercio-testnet10k2",\n      "timestamp": "2021-06-30T09:46:25Z",\n      "status": "success"\n    },\n    {\n      "process_id": "295c021f-b14b-4b26-859d-f310cc6a7a73",\n      "sender": "did:com:1tq5mvp7j4vtew08htaswsyjugzewe4jyph20qr",\n      "receivers": [\n        "did:com:1lustf0n3t6fr2sp2p07hrf5qzja47juzccz935"\n      ],\n      "document_id": "d5a84f6c-2540-47b6-8661-70ff99a7fbff",\n      "doc_hash": "c2000af9444c2b4b949e86ab00c7521b8ecc8a5b6485dea84442f1e167b6a755",\n      "doc_hash_alg": "sha-256",\n      "doc_tx_hash": "390EF4F23974B3CF7663B5F3C8B263F9D0ED1A900167D02ED4760052003CC7F2",\n      "tx_timestamp": "2021-06-30T09:49:32Z",\n      "tx_type": "commercio/MsgShareDocument",\n      "doc_metadata": {\n        "content_uri": "-",\n        "schema": {\n          "uri": "-",\n          "version": "-"\n        }\n      },\n      "chain_id": "commercio-testnet10k2",\n      "timestamp": "2021-06-30T09:46:27Z",\n      "status": "success"\n    },\n....\n    {\n      "process_id": "68b833ad-20e9-4887-bc6d-34431d4c2c03",\n      "sender": "did:com:1tq5mvp7j4vtew08htaswsyjugzewe4jyph20qr",\n      "receivers": [\n        "did:com:1aeugwtn2tdsqx5uznac5su4k7wscc4atmew04k"\n      ],\n      "document_id": "49c01045-17ab-4e75-a0bb-f683714d2f08",\n      "doc_hash": "a0ed0e4c307bd0a91f5976bb17c444332343716c5ea48f453d623ca8c2d5f4ea",\n      "doc_hash_alg": "sha-256",\n      "doc_tx_hash": "FD2E1D5DD97E9589673A6BDB2F9A2468F4A856664F843619AF0FDC1D99F6560E",\n      "tx_timestamp": "2021-06-30T10:25:06Z",\n      "tx_type": "commercio/MsgShareDocument",\n      "doc_metadata": {\n        "content_uri": "-",\n        "schema": {\n          "uri": "-",\n          "version": "-"\n        }\n      },\n      "chain_id": "commercio-testnet10k2",\n      "timestamp": "2021-06-30T10:19:44Z",\n      "status": "success"\n    }\n  ],\n  "paging": {\n    "next_cursor": "MTYyNTA0ODM4NDg0Njk2NjAwMA==",\n    "next_link": "https://dev.commercio.app/sharedoc/api/v1/sharedoc/process?limit=30&order=asc&cursor=MTYyNTA0ODM4NDg0Njk2NjAwMA==",\n    "total_count": 418\n  }\n}\n')])])]),t("p",[e._v("In order to get the following processes use the value of "),t("code",[e._v("next_cursor")]),e._v(" ( that is "),t("code",[e._v("MTYyNTA0ODM4NDg0Njk2NjAwMA==")]),e._v(" in the exmple ) in the parameter "),t("code",[e._v("next_cursor")])]),e._v(" "),t("h3",{attrs:{id:"sent-specific-process-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sent-specific-process-details"}},[e._v("#")]),e._v(" Sent specific process details")]),e._v(" "),t("p",[e._v("Use the API GET : /sharedoc/process{process_id}")]),e._v(" "),t("p",[e._v("Permit to check the status of a specific process knowing its process_id assigned by the system")]),e._v(" "),t("h4",{attrs:{id:"step-by-step-example-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-by-step-example-3"}},[e._v("#")]),e._v(" Step by step Example")]),e._v(" "),t("p",[e._v("Let's create a query to get the details of a specific process")]),e._v(" "),t("h5",{attrs:{id:"step-1-define-the-first-query-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-1-define-the-first-query-3"}},[e._v("#")]),e._v(" Step 1 - Define the first query")]),e._v(" "),t("p",[e._v("Lets's check the process with "),t("code",[e._v('"process_id": "38367565-ce60-4fb7-96ac-be591b5c65cb"')])]),e._v(" "),t("p",[t("strong",[e._v("Use the tryout")])]),e._v(" "),t("p",[t("img",{attrs:{src:a(281),alt:"Modal"}})]),e._v(" "),t("p",[t("strong",[e._v("Corresponding Cli request")])]),e._v(" "),t("pre",{staticStyle:{color:"#FFF"}},[e._v("curl -X 'GET' \\\n  'https://dev-api.commercio.app/v1/sharedoc/process/38367565-ce60-4fb7-96ac-be591b5c65cb' \\\n  -H 'accept: application/json' \\\n  -H 'Authorization: Bearer eyJhbGciOi.....'\n")]),e._v(" "),t("p",[t("strong",[e._v("API : Body response")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n  "process_id": "38367565-ce60-4fb7-96ac-be591b5c65cb",\n  "sender": "did:com:1tq5mvp7j4vtew08htaswsyjugzewe4jyph20qr",\n  "receivers": [\n    "did:com:1ffjuspvy8sm8fw7wjyjtgvzg0wgv36pqxrah9n"\n  ],\n  "document_id": "be3a7460-4935-4434-b045-f0208d55c076",\n  "doc_hash": "2f1ec16b9a177aabd5e1ff6bb5685a3df3a6b462dfa147e6b35585fa58954b6b",\n  "doc_hash_alg": "sha-256",\n  "doc_tx_hash": "390EF4F23974B3CF7663B5F3C8B263F9D0ED1A900167D02ED4760052003CC7F2",\n  "tx_timestamp": "2021-06-30T09:49:32Z",\n  "tx_type": "commercio/MsgShareDocument",\n  "doc_metadata": {\n    "content_uri": "-",\n    "schema": {\n      "uri": "-",\n      "version": "-"\n    }\n  },\n  "chain_id": "commercio-testnet10k2",\n  "timestamp": "2021-06-30T09:46:25Z",\n  "status": "success"\n}\n\n')])])]),t("h2",{attrs:{id:"sent-sharedoc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sent-sharedoc"}},[e._v("#")]),e._v(" Sent Sharedoc")]),e._v(" "),t("p",[e._v("Use the API GET : "),t("code",[e._v("/sharedoc/sent")])]),e._v(" "),t("p",[e._v("Permit to get all sharedocs messages sent by the did of the authenticated user. Alse messages not sent\nthrought an  APi process "),t("RouterLink",{attrs:{to:"/app_developers/commercioapi-sharedoc.html#send-a-sharedoc"}},[e._v("Send Sharedoc process")])],1),e._v(" "),t("p",[e._v("Moreover throught the following  parameters the API  permit to paginate and order the result.")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("limit")]),e._v(" : Limit the max number of elements returned")]),e._v(" "),t("li",[t("code",[e._v("next_cursor")]),e._v(":  Cursor that specifies an ID from starting to return following elements")]),e._v(" "),t("li",[t("code",[e._v("order")]),e._v(" :  Elements ordering by creation timestamp")])]),e._v(" "),t("h3",{attrs:{id:"step-by-step-example-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-by-step-example-4"}},[e._v("#")]),e._v(" Step by step Example")]),e._v(" "),t("p",[e._v("Let's create a query to get all messages sent by the sender with "),t("code",[e._v("did:com:1tq5mvp7j4vtew08htaswsyjugzewe4jyph20qr")]),e._v(" thati is associated to the authenticated user")]),e._v(" "),t("h4",{attrs:{id:"step-1-define-the-first-query-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-1-define-the-first-query-4"}},[e._v("#")]),e._v(" Step 1 - Define the first query")]),e._v(" "),t("p",[e._v("Parameter value")]),e._v(" "),t("ul",[t("li",[e._v("limit = 3")]),e._v(" "),t("li",[e._v("cursor = empty")]),e._v(" "),t("li",[e._v("order : asc")])]),e._v(" "),t("h4",{attrs:{id:"step-2-use-the-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-2-use-the-api"}},[e._v("#")]),e._v(" Step 2 - Use the API")]),e._v(" "),t("p",[t("strong",[e._v("Use the tryout")])]),e._v(" "),t("p",[t("img",{attrs:{src:a(282),alt:"Modal"}})]),e._v(" "),t("p",[t("strong",[e._v("Corresponding Cli request")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("curl -X 'GET' \\\n  'https://dev-api.commercio.app/v1/sharedoc/process?limit=30&order=asc' \\\n  -H 'accept: application/json' \\\n  -H 'Authorization: Bearer ....'\n\n")])])]),t("p",[t("strong",[e._v("API : Body response")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n  "documents": [\n    {\n      "sender": "did:com:1tq5mvp7j4vtew08htaswsyjugzewe4jyph20qr",\n      "recipients": [\n        "did:com:1u35avnkvywzcxp2uty8u0y6xu3s22hycfgd2we"\n      ],\n      "uuid": "0093638d-841f-4782-8ddb-d9cb020338eb",\n      "metadata": {\n        "content_uri": "-",\n        "schema": {\n          "uri": "-",\n          "version": "-"\n        }\n      },\n      "content_uri": "fe64b6b9a51756a244893722917132e85fe0daea99f7cfffb353eab7e1996dcd",\n      "checksum": {\n        "value": "c3936c163751c60e428774b5b5d8f3bce430aa962c567d4be6f3a33b69e440aa",\n        "algorithm": "sha-256"\n      }\n    },\n    {\n      "sender": "did:com:1tq5mvp7j4vtew08htaswsyjugzewe4jyph20qr",\n      "recipients": [\n        "did:com:1lustf0n3t6fr2sp2p07hrf5qzja47juzccz935"\n      ],\n      "uuid": "00af0720-af3b-4140-b785-00d8ff92e460",\n      "metadata": {\n        "content_uri": "-",\n        "schema": {\n          "uri": "-",\n          "version": "-"\n        }\n      },\n      "content_uri": "08faa5bcc66f70f2eab0607c516d28ff1774757edf67d2805ab28d520b0c4300",\n      "checksum": {\n        "value": "d19eca1648d9440daaa5f9e3477c0f5d5fdae68a3935d17d91558c075dd0483a",\n        "algorithm": "sha-256"\n      }\n    },\n    {\n      "sender": "did:com:1tq5mvp7j4vtew08htaswsyjugzewe4jyph20qr",\n      "recipients": [\n        "did:com:1tq5mvp7j4vtew08htaswsyjugzewe4jyph20qr"\n      ],\n      "uuid": "00bbcfc0-a688-44d4-81ed-547a256d40f5",\n      "metadata": {\n        "content_uri": "-",\n        "schema": {\n          "uri": "-",\n          "version": "-"\n        }\n      },\n      "content_uri": "ec8736178ed930786e889b5945c59e8126cfb95162263beedc0cc00c264409f8",\n      "checksum": {\n        "value": "002d545ce3050e75dc4c6cb93ef3e0c61df4c98f51caca644bc10659d9966229",\n        "algorithm": "sha-256"\n      }\n    }\n  ],\n  "paging": {\n    "next_cursor": "MDBiYmNmYzAtYTY4OC00NGQ0LTgxZWQtNTQ3YTI1NmQ0MGY1",\n    "next_link": "https://dev.commercio.app/sharedoc/api/v1/sharedoc/sent?limit=3&order=asc&cursor=MDBiYmNmYzAtYTY4OC00NGQ0LTgxZWQtNTQ3YTI1NmQ0MGY1",\n    "total_count": 418\n  }\n}\n')])])]),t("p",[e._v("The response contains")]),e._v(" "),t("ul",[t("li",[e._v("the details of the first 3 Sharedoc messages")]),e._v(" "),t("li",[e._v("the "),t("code",[e._v("paging/next_cursor")]),e._v(" entity that permit to extract the next page  messages")])]),e._v(" "),t("h4",{attrs:{id:"step-2-extract-next-page"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-2-extract-next-page"}},[e._v("#")]),e._v(" Step 2 - Extract next page")]),e._v(" "),t("p",[e._v("Use in the tryout the value")]),e._v(" "),t("ul",[t("li",[e._v("limit = 3")]),e._v(" "),t("li",[e._v("cursor = "),t("code",[e._v("MDBiYmNmYzAtYTY4OC00NGQ0LTgxZWQtNTQ3YTI1NmQ0MGY1")])]),e._v(" "),t("li",[e._v("order : asc")])]),e._v(" "),t("p",[t("strong",[e._v("API : Body response")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('\n{\n  "documents": [\n    {\n      "sender": "did:com:1tq5mvp7j4vtew08htaswsyjugzewe4jyph20qr",\n      "recipients": [\n        "did:com:1e4wh3a2cp20edg7dtkmkrumt9mh4w3x0a4lvjs"\n      ],\n      "uuid": "00f929e4-44d8-4fd5-8328-2375b67f7357",\n      "metadata": {\n        "content_uri": "-",\n        "schema": {\n          "uri": "-",\n          "version": "-"\n        }\n      },\n      "content_uri": "f816e7ad9a72892cbbc70f2d4bd6dfb35cf9e4b0411842ee779f3ad51bdde030",\n      "checksum": {\n        "value": "10d110a6b1645482572f00af5a7f3bf396e13e37264c861bfa275f0ee7f8b85c",\n        "algorithm": "sha-256"\n      }\n    },\n    {\n      "sender": "did:com:1tq5mvp7j4vtew08htaswsyjugzewe4jyph20qr",\n      "recipients": [\n        "did:com:1ffjuspvy8sm8fw7wjyjtgvzg0wgv36pqxrah9n"\n      ],\n      "uuid": "0113ca97-c4e4-4690-b683-3515968600bb",\n      "metadata": {\n        "content_uri": "-",\n        "schema": {\n          "uri": "-",\n          "version": "-"\n        }\n      },\n      "content_uri": "b6c44223d34837a00c5947e70b0b84693e9fdbcf391693a7f850b8cc22afc1bf",\n      "checksum": {\n        "value": "6f1a002bc49f6c4b87878eb314956f04fc283a0300fc131668edc6ea10f10b8c",\n        "algorithm": "sha-256"\n      }\n    },\n    {\n      "sender": "did:com:1tq5mvp7j4vtew08htaswsyjugzewe4jyph20qr",\n      "recipients": [\n        "did:com:1t934ysywlz29lvjudwd6mr204wysfg34g7pwxs"\n      ],\n      "uuid": "02e421f6-9839-48c7-ad90-448bdb49d20a",\n      "metadata": {\n        "content_uri": "-",\n        "schema": {\n          "uri": "-",\n          "version": "-"\n        }\n      },\n      "content_uri": "923aa06b2cab8e66117c270ddc3c332e4c7fcd295b57b0471db41a40fe829a5c",\n      "checksum": {\n        "value": "9367b50b323992e3177bd52bcc1a3d6c105a25797aa047c131ba1e92780930cf",\n        "algorithm": "sha-256"\n      }\n    }\n  ],\n  "paging": {\n    "next_cursor": "MDJlNDIxZjYtOTgzOS00OGM3LWFkOTAtNDQ4YmRiNDlkMjBh",\n    "next_link": "https://dev.commercio.app/sharedoc/api/v1/sharedoc/sent?limit=3&order=asc&cursor=MDJlNDIxZjYtOTgzOS00OGM3LWFkOTAtNDQ4YmRiNDlkMjBh",\n    "total_count": 418\n  }\n}\n\n')])])]),t("h2",{attrs:{id:"received-sharedoc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#received-sharedoc"}},[e._v("#")]),e._v(" Received Sharedoc")]),e._v(" "),t("p",[e._v("Use the API GET : "),t("code",[e._v("/sharedoc/received")])]),e._v(" "),t("p",[e._v("Permit to get all sharedocs messages received (sent to)  the did of the authenticated user.")]),e._v(" "),t("p",[e._v("Moreover throught the following  parameters the API  permit to paginate and order the result.")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("limit")]),e._v(" : Limit the max number of elements returned")]),e._v(" "),t("li",[t("code",[e._v("next_cursor")]),e._v(":  Cursor that specifies an ID from starting to return following elements")]),e._v(" "),t("li",[t("code",[e._v("order")]),e._v(" :  Elements ordering by creation timestamp")])]),e._v(" "),t("h3",{attrs:{id:"step-by-step-example-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-by-step-example-5"}},[e._v("#")]),e._v(" Step by step Example")]),e._v(" "),t("p",[e._v("Let's create a query to get all messages received by the authenticatd user with the did   "),t("code",[e._v("did:com:1tq5mvp7j4vtew08htaswsyjugzewe4jyph20qr")])]),e._v(" "),t("h4",{attrs:{id:"step-1-define-the-first-query-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-1-define-the-first-query-5"}},[e._v("#")]),e._v(" Step 1 - Define the first query")]),e._v(" "),t("p",[e._v("Parameter value")]),e._v(" "),t("ul",[t("li",[e._v("limit = 3")]),e._v(" "),t("li",[e._v("cursor = empty")]),e._v(" "),t("li",[e._v("order : asc")])]),e._v(" "),t("p",[t("strong",[e._v("Use the tryout")])]),e._v(" "),t("p",[t("img",{attrs:{src:a(283),alt:"Modal"}})]),e._v(" "),t("p",[t("strong",[e._v("Corresponding Cli request")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("curl -X 'GET' \\\n  'https://dev-api.commercio.app/v1/sharedoc/received?limit=30&order=asc' \\\n  -H 'accept: application/json' \\\n  -H 'Authorization: Bearer eyJhbGciOiJSU....'\n")])])]),t("p",[t("strong",[e._v("API : Body response")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n  "documents": [\n    {\n      "sender": "did:com:1tq5mvp7j4vtew08htaswsyjugzewe4jyph20qr",\n      "recipients": [\n        "did:com:1tq5mvp7j4vtew08htaswsyjugzewe4jyph20qr"\n      ],\n      "uuid": "00bbcfc0-a688-44d4-81ed-547a256d40f5",\n      "metadata": {\n        "content_uri": "-",\n        "schema": {\n          "uri": "-",\n          "version": "-"\n        }\n      },\n      "content_uri": "ec8736178ed930786e889b5945c59e8126cfb95162263beedc0cc00c264409f8",\n      "checksum": {\n        "value": "002d545ce3050e75dc4c6cb93ef3e0c61df4c98f51caca644bc10659d9966229",\n        "algorithm": "sha-256"\n      }\n    },\n    {\n      "sender": "did:com:1va3cl46zcmd9lga3mulvhyd7k5a23jg23fkypt",\n      "recipients": [\n        "did:com:1tq5mvp7j4vtew08htaswsyjugzewe4jyph20qr"\n      ],\n      "uuid": "014203f1-cf7b-42c8-adbf-b898ad088b21",\n      "metadata": {\n        "content_uri": "-",\n        "schema": {\n          "uri": "-",\n          "version": "-"\n        }\n      },\n      "content_uri": "cb57fd1164a2bcd070a14e00c82ead963961c7028bc55af7ed492bcec6b92409",\n      "checksum": {\n        "value": "b56f2de7cde1285a49d0337869a1c0e52b917170df04c619df26a81b8e8d82d4",\n        "algorithm": "sha-256"\n      }\n    },\n    ....\n\n    {\n      "sender": "did:com:1tq5mvp7j4vtew08htaswsyjugzewe4jyph20qr",\n      "recipients": [\n        "did:com:1tq5mvp7j4vtew08htaswsyjugzewe4jyph20qr"\n      ],\n      "uuid": "12ecae4c-bb8b-411c-b516-aba29e186a21",\n      "metadata": {\n        "content_uri": "-",\n        "schema": {\n          "uri": "-",\n          "version": "-"\n        }\n      },\n      "content_uri": "a537ba5171d65c8c8aecd7971f9a65db93906e7dbb0a8618490ed2c5a5ac19b0",\n      "checksum": {\n        "value": "2d1203278986af1ac3a0d6e84b5d2cfb4d8cf2ce60dacddf91824b298189ff09",\n        "algorithm": "sha-256"\n      }\n    }\n  ],\n  "paging": {\n    "next_cursor": "MTJlY2FlNGMtYmI4Yi00MTFjLWI1MTYtYWJhMjllMTg2YTIx",\n    "next_link": "https://dev.commercio.app/sharedoc/api/v1/sharedoc/received?limit=30&order=asc&cursor=MTJlY2FlNGMtYmI4Yi00MTFjLWI1MTYtYWJhMjllMTg2YTIx",\n    "total_count": 397\n  }\n}\n\n')])])]),t("h2",{attrs:{id:"receipt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#receipt"}},[e._v("#")]),e._v(" Receipt")]),e._v(" "),t("p",[e._v("This API permit to manage the reading receipt message  "),t("code",[e._v("MsgSendDocumentReceipt")]),e._v(" throught the DOCS  Module  used when the receivers wants  to acknowledge the sender that he has properly read a  specific "),t("code",[e._v("MsgShareDocument")])]),e._v(" "),t("h3",{attrs:{id:"send-a-receipt-message-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#send-a-receipt-message-process"}},[e._v("#")]),e._v(" Send a Receipt Message process")]),e._v(" "),t("p",[e._v("Use the API POST : cooming soon")]),e._v(" "),t("p",[e._v("Permit to create a recipt message relative to a Sharedocument Message recived (the did of the authenticaded user is a receipient)")]),e._v(" "),t("h3",{attrs:{id:"sent-receipts-processes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sent-receipts-processes"}},[e._v("#")]),e._v(" Sent Receipts processes")]),e._v(" "),t("p",[e._v("Coming soon")]),e._v(" "),t("h3",{attrs:{id:"sent-receipt-message-specific-process-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sent-receipt-message-specific-process-details"}},[e._v("#")]),e._v(" Sent Receipt Message specific process details")]),e._v(" "),t("p",[e._v("Coming soon")]),e._v(" "),t("h3",{attrs:{id:"received-receipt-message"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#received-receipt-message"}},[e._v("#")]),e._v(" Received Receipt Message")]),e._v(" "),t("p",[e._v("Coming soon")])])}),[],!1,null,null,null);t.default=r.exports}}]);