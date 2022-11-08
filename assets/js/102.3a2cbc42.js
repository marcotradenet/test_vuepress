(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{396:function(t,e,s){"use strict";s.r(e);var a=s(14),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"associating-a-did-document-to-your-identity"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#associating-a-did-document-to-your-identity"}},[t._v("#")]),t._v(" Associating a Did Document to your identity")]),t._v(" "),e("p",[t._v("Being your account address a Did, using the Commercio Network blockchain you can associate to it a Did Document\ncontaining the information that are related to your public (or private) identity."),e("br"),t._v("\nIn order to do so you will need to perform a transaction and so your account must have first received some tokens. To\nknow how to get them, please take a look at the "),e("RouterLink",{attrs:{to:"/docs2.2.0/x/id/tx/create-an-identity.html#using-an-identity"}},[e("em",[t._v('"Using an identity"')]),t._v(" section")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"transaction-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transaction-message"}},[t._v("#")]),t._v(" Transaction message")]),t._v(" "),e("p",[t._v("In order to properly send a transaction to set a DID Document associating it to your identity, you will need\nto create and sign the following message:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commercio/MsgSetIdentity"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"value"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"@context"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.w3.org/ns/did/v1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"publicKey"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc#keys-1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RsaVerificationKey2018"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"controller"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"publicKeyPem"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-----BEGIN PUBLIC KEY----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDMr3V+Auyc+zvt2qX+jpwk3wM+m2DbfLjimByzQDIfrzSHMTQ8erL0kg69YsXHYXVX9mIZKRzk6VNwOBOQJSsIDf2jGbuEgI8EB4c3q1XykakCTvO3Ku3PJgZ9PO4qRw7QVvTkCbc91rT93/pD3/Ar8wqd4pNXtgbfbwJGviZ6kQIDAQAB-----END PUBLIC KEY-----\\r\\n"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc#keys-2"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RsaSignature2018"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"controller"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"publicKeyPem"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-----BEGIN PUBLIC KEY----MIGfM3TvO3Ku3PJgZ9PO4qRw7+Auyc+zvt2qX+jpwk3wM+m2DbfLjimByzQDIfrzSHMTQ8erL0kg69YsXHYXVX9mIZKRzk6VNwOBOQJSsIDf2jGbuEgI8EB4c3q1XykakCQVvTkCbc9A0GCSqGSIbqd4pNXtgbfbwJGviZ6kQIDAQAB-----END PUBLIC KEY-----\\r\\n"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"proof"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EcdsaSecp256k1VerificationKey2019"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"created"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-02-08T16:02:20Z"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"proofPurpose"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"authentication"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"controller"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"verificationMethod"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<did bech32 pubkey>"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"signatureValue"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"QNB13Y7Q91tzjn4w=="')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"value-fields-requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#value-fields-requirements"}},[t._v("#")]),t._v(" "),e("code",[t._v("value")]),t._v(" fields requirements")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Field")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Required")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("@context")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes (Must be "),e("code",[t._v("https://www.w3.org/ns/did/v1")]),t._v(")")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("id")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("publicKey")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("proof")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])])])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("id")]),t._v(" field represents the DID you want to associate the provided identity to.")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("publicKey")]),t._v(" field represents the public keys users can use to communicate safely with you.")]),t._v(" "),e("p",[t._v("Each key "),e("strong",[t._v("must")]),t._v(" have an "),e("code",[t._v("id")]),t._v(" field defined by the concatenation of the content of the "),e("code",[t._v("id")]),t._v(" field, along with a "),e("code",[t._v("#keys-NUMBER")]),t._v(" suffix, where "),e("code",[t._v("NUMBER")]),t._v(" must be an integer.")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("controller")]),t._v(" key field must be equal to the "),e("code",[t._v("id")]),t._v(" field content.")]),t._v(" "),e("p",[t._v("The commercio.network blockchain requires at least two keys, defined in the following way:")]),t._v(" "),e("ul",[e("li",[t._v("key with suffix "),e("code",[t._v("#keys-1")]),t._v(" must be of type "),e("code",[t._v("RsaVerificationKey2018")]),t._v(", and must be a valid RSA PKIX public key;")]),t._v(" "),e("li",[t._v("key with suffix "),e("code",[t._v("#keys-2")]),t._v(" must be of type "),e("code",[t._v("RsaSignature2018")]),t._v(", and must be a valid RSA PKIX public key.")])]),t._v(" "),e("p",[t._v("A "),e("code",[t._v("commercio/MsgSetIdentity")]),t._v(" transaction that "),e("strong",[t._v("doesn't")]),t._v(" meet these requirements will be discarded.")]),t._v(" "),e("h3",{attrs:{id:"proof-fields-requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#proof-fields-requirements"}},[t._v("#")]),t._v(" Proof fields requirements")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Field")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("type")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("must always be "),e("code",[t._v("EcdsaSecp256k1VerificationKey2019")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("created")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("creation date in UTC format")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("proofPurpose")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("must always be "),e("code",[t._v("authentication")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("controller")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("same value specified in the "),e("code",[t._v("id")]),t._v(" field")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("verificationMethod")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("bech32-encoded public key associated with the address specified in the "),e("code",[t._v("id")]),t._v(" field")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("signatureValue")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("see explaination below")])])])]),t._v(" "),e("h3",{attrs:{id:"creating-the-signaturevalue-value"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-signaturevalue-value"}},[t._v("#")]),t._v(" Creating the "),e("code",[t._v("signatureValue")]),t._v(" value")]),t._v(" "),e("p",[t._v("In order to create "),e("code",[t._v("signatureValue")]),t._v(", the following steps must be followed")]),t._v(" "),e("ol",[e("li",[t._v("Create a "),e("code",[t._v("value")]),t._v(" JSON as specified earlier, including only the "),e("code",[t._v("@context")]),t._v(", "),e("code",[t._v("id")]),t._v(" and "),e("code",[t._v("publicKey")]),t._v(" fields:")])]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"@context"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.w3.org/ns/did/v1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your DID"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"publicKey"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your public keys"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("alphabetically sort the "),e("code",[t._v("did_document_unsigned")]),t._v(" and remove all the white spaces and line endings characters.")]),t._v(" "),e("li",[t._v("obtain hash of resulting string bytes using "),e("strong",[t._v("SHA-256")]),t._v(".")]),t._v(" "),e("li",[t._v("sign the result of the hashing process using your DID's public key, which you assigned to the "),e("code",[t._v("verificationMethod")]),t._v(" "),e("code",[t._v("proof")]),t._v(" JSON field")]),t._v(" "),e("li",[t._v("encode the result in "),e("strong",[t._v("base64")]),t._v(" obtaining "),e("code",[t._v("signatureValue")]),t._v(".")])]),t._v(" "),e("p",[t._v("The signature commercio.network accepts is "),e("code",[t._v("EcdsaSecp256k1VerificationKey2019")]),t._v(", which is a type of elliptic-curve signature scheme.")]),t._v(" "),e("p",[t._v("The signature format produced in step 4, must be of the "),e("code",[t._v("r || s")]),t._v(" kind, otherwise the identity creation "),e("strong",[t._v("will")]),t._v(" fail.")]),t._v(" "),e("h2",{attrs:{id:"action-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#action-type"}},[t._v("#")]),t._v(" Action type")]),t._v(" "),e("p",[t._v("If you want to "),e("RouterLink",{attrs:{to:"/docs2.2.0/developers/listing-transactions.html"}},[t._v("list past transactions")]),t._v(" including this kind of message,\nyou need to use the following "),e("code",[t._v("message.action")]),t._v(" value:")],1),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("setIdentity\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);