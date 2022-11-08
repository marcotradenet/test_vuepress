(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{419:function(e,t,o){"use strict";o.r(t);var a=o(14),n=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"did"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#did"}},[e._v("#")]),e._v(" Did")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("did")]),e._v(" module allows the management of "),t("em",[e._v("identitities")]),e._v(" by associating a\nDID document to a "),t("code",[e._v("did:com:")]),e._v(" address.\nThe module is also responsible for the historicization of identities.")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("Commercio.network")]),e._v(" blockchain is the Verifiable Data Registry that should be used to perform DID resolution for the "),t("code",[e._v("did:com:")]),e._v(" method.\nIn fact, the "),t("code",[e._v("did")]),e._v(" module provides query functionalities providing all the necessary information to perform DID resolution for a certain address, allowing to request:")]),e._v(" "),t("ul",[t("li",[e._v("The latest DID document and the corresponding metadata.")]),e._v(" "),t("li",[e._v("The list of updates to the DID document and corresponding metadata.")])]),e._v(" "),t("h2",{attrs:{id:"creating-an-identity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-identity"}},[e._v("#")]),e._v(" Creating an identity")]),e._v(" "),t("p",[e._v("First of all, let's define what an "),t("strong",[e._v("identity")]),e._v(" is inside the Commercio Network blockchain.")]),e._v(" "),t("blockquote",[t("p",[e._v("An identity is the method used inside the Commercio Network blockchain in order to identify documents' senders and recipients.")])]),e._v(" "),t("p",[e._v("In order to create an identity, you should start by creating a Commercio Network address, which will have the following form:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("did:com:<unique part>\n")])])]),t("p",[e._v("The address it itself a DID Decentralized Identifier.")]),e._v(" "),t("p",[e._v("In order to do so, you can use the CLI and execute the following command:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("commercionetworkd keys "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("key-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("You will be required to set a password in order to safely store the key on your computer.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("Please note that password will be later asked you when signing the transactions so be sure you remember it.")])]),e._v(" "),t("p",[e._v("After inserting the password, you will be shown the mnemonic that can be used in order to import your account (and identity) into a wallet.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('- name: jack\n  type: local\n  address: did:com:13jckgxmj3v8jpqdeq8zxwcyhv7gc3dzmrqqger\n  pubkey: did:com:pub1addwnpepqfdl6s8hdwdya9zvn5wtx8ty3qsqqqd2ddvygc5zutnrryh5x9ju73jdfg8\n  mnemonic: ""\n  threshold: 0\n  pubkeys: []\n\n\n**Important** write this mnemonic phrase in a safe place.\nIt is the only way to recover your account if you ever forget your password.\n\nscorpion what indoor keen topic cricket uphold inch cactus six suffer coin popular honey vendor clown day twin during vague midnight emerge man inform\n')])])]),t("h3",{attrs:{id:"using-an-identity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-an-identity"}},[e._v("#")]),e._v(" Using an identity")]),e._v(" "),t("p",[e._v("Once you have created it, in order to start performing a transaction with your identity you firstly have to fund your identity.\nEach and every transaction on the blockchain has a cost, and to pay for it you must have some tokens."),t("br"),e._v("\nIf you want to receive some tokens in "),t("strong",[e._v("Test-net")]),e._v(", please use faucet service or tell us inside our "),t("a",{attrs:{href:"https://t.me/commercionetwork",target:"_blank",rel:"noopener noreferrer"}},[e._v("official Telegram group"),t("OutboundLink")],1),e._v("\nand we will send you some as soon as possible.")]),e._v(" "),t("h3",{attrs:{id:"associating-a-did-document-to-your-identity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#associating-a-did-document-to-your-identity"}},[e._v("#")]),e._v(" Associating a Did Document to your identity")]),e._v(" "),t("p",[e._v("Being your account address a DID, using the Commercio Network blockchain you can associate to it a DID document containing the information that are related to your public (or private) identity."),t("br"),e._v("\nIn order to do so you will need to perform a transaction and so your account must have first received some tokens.")]),e._v(" "),t("h2",{attrs:{id:"did-resolution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#did-resolution"}},[e._v("#")]),e._v(" DID Resolution")]),e._v(" "),t("p",[e._v("In "),t("code",[e._v("commercionetwork")]),e._v(", an identity is represented as the history of DID document updates made by a certain address.")]),e._v(" "),t("p",[e._v("Following the latest "),t("a",{attrs:{href:"https://www.w3.org/TR/2021/PR-did-core-20210803/",target:"_blank",rel:"noopener noreferrer"}},[e._v("W3C Decentralized Identifiers (DIDs) v1.0 specification"),t("OutboundLink")],1),e._v(", a DID resolution with no additional options should result in the latest version of the DID document for a certain DID plus additional metadata.")]),e._v(" "),t("p",[e._v("Querying for an "),t("code",[e._v("Identity")]),e._v(" means asking for the most recent version of the "),t("code",[e._v("DidDocument")]),e._v(", along with the associated "),t("code",[e._v("Metadata")]),e._v(".\nThe result will be an "),t("code",[e._v("Identity")]),e._v(" made of two fields:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("DidDocument")]),e._v(" - the stored DID document JSON-LD representation")]),e._v(" "),t("li",[t("code",[e._v("Metadata")]),e._v(" - including the "),t("code",[e._v("Created")]),e._v(" and "),t("code",[e._v("Updated")]),e._v(" timestamps")])]),e._v(" "),t("h3",{attrs:{id:"historicization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#historicization"}},[e._v("#")]),e._v(" Historicization")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("did")]),e._v(" module has been updated to support the historicization of DID documents.\nA DID document can be updated and its previous versions should remain accessible.")]),e._v(" "),t("p",[e._v("Querying for an "),t("code",[e._v("IdentityHistory")]),e._v(" means asking for the list of updates to an "),t("code",[e._v("Identity")]),e._v(", sorted in chronological order.")])])}),[],!1,null,null,null);t.default=n.exports}}]);