(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{319:function(t,a,e){"use strict";e.r(a);var r=e(14),o=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"handling-a-validator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handling-a-validator"}},[t._v("#")]),t._v(" Handling a validator")]),t._v(" "),a("p",[t._v("Once you've properly set up a "),a("RouterLink",{attrs:{to:"/docs2.1.2/nodes/validator-node-installation.html"}},[t._v("validator node")]),t._v(", it must be subject to certain rules and certain operations must be carried out to manage it.")],1),t._v(" "),a("h2",{attrs:{id:"downtime-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#downtime-rules"}},[t._v("#")]),t._v(" Downtime rules")]),t._v(" "),a("p",[t._v("The node can only stay offline for a certain amount of time."),a("br"),t._v("\nIn the case of "),a("strong",[t._v("Commercio Network")]),t._v(" this period has been fixed at 10,000 blocks lost, approximately corresponding to 17/18 hours."),a("br"),t._v("\nIf the node remains offline or fails to produce blocks for a period longer than the limit, it will incur slashing, i.e. an immediate loss of a certain amount of the staked tokens."),a("br"),t._v(" "),a("strong",[t._v('For "Commercio Network" the slashing percentage for downtime is set at '),a("code",[t._v("1%")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"double-sign-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#double-sign-rules"}},[t._v("#")]),t._v(" Double sign rules")]),t._v(" "),a("p",[t._v("A validator node must be unique on the chain, so only a node can sign with that private key."),a("br"),t._v("\nIf there was another node with the same private key, this would result in a double signature, and therefore an immediate jail entry of the node with no exit possibility."),a("br"),t._v(" "),a("strong",[t._v('For "Commercio Network" the slashing percentage for double sing is set at '),a("code",[t._v("5%")]),t._v(".")]),a("br"),t._v("\nIf you run into double signatures all tokens must be unbond and you must create a new validator node with new private keys.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("The unbond period is 21 days, so is necessary to wait this period to get back in possession of your tokens.")])]),t._v(" "),a("h2",{attrs:{id:"unjail-procedure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unjail-procedure"}},[t._v("#")]),t._v(" Unjail procedure")]),t._v(" "),a("p",[t._v("In case a validator ended up jail for downtime, it is necessary that the wallet that created the validator performs a ujail transaction."),a("br"),t._v("\nThe follow command must be performed")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("cncli tx slashing "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  unjail "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your pub addr creator val"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--fees")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("10000ucommercio  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --chain-id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$CHAINID")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v("\n")])])]),a("p",[t._v("If you are using the "),a("strong",[t._v("Ledger device")]),t._v(" you must first connect it to your computer, start the cosmos application and add "),a("code",[t._v("--ledger")]),t._v(" flag to the command.")]),t._v(" "),a("h2",{attrs:{id:"unbond-procedure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unbond-procedure"}},[t._v("#")]),t._v(" Unbond procedure")]),t._v(" "),a("p",[t._v("Tokens can be delegated to any validator to increase its stake."),a("br"),t._v("\nIn case you want to remove all or part of the delegated tokens, an "),a("code",[t._v("unbond transaction")]),t._v(" must be performed."),a("br"),t._v("\nThe undelegated period is "),a("strong",[t._v("21 days")]),t._v(", so is necessary to wait this period to get back in possession of your tokens."),a("br"),t._v("\nTo perform "),a("code",[t._v("unbond transaction")]),t._v(" use the follow command")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("cncli tx staking "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  unbond "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("validator-operator-addr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  50000000000ucommercio "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your pub addr delegator"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--fees")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("10000ucommercio  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --chain-id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$CHAINID")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v("\n")])])]),a("p",[t._v("value of "),a("code",[t._v("<validator-operator-addr>")]),t._v(" can be obtain from explorer:")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://testnet.commercio.network/it/validators",target:"_blank",rel:"noopener noreferrer"}},[t._v("Commercio.network explorer Testnet"),a("OutboundLink")],1),t._v("."),a("br"),t._v(" "),a("a",{attrs:{href:"https://mainnet.commercio.network/it/validators",target:"_blank",rel:"noopener noreferrer"}},[t._v("Commercio.network explorer Mainnet"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("If you see your validator in the list click on its name."),a("br"),t._v("\nThe validator tab should have the value "),a("strong",[t._v("Operator")]),t._v(". That value is your "),a("code",[t._v("<validator-operator-addr>")])]),t._v(" "),a("p",[t._v("If you are using the "),a("strong",[t._v("Ledger device")]),t._v(" you must first connect it to your computer, start the cosmos application and add "),a("code",[t._v("--ledger")]),t._v(" flag to the command.")]),t._v(" "),a("h2",{attrs:{id:"redelegate-procedure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redelegate-procedure"}},[t._v("#")]),t._v(" Redelegate procedure")]),t._v(" "),a("p",[t._v("It is possible to perform a procedure of moving tokens in stake from one validator to another through the "),a("code",[t._v("redelegate transaction")]),t._v("."),a("br"),t._v("\nTo perform "),a("code",[t._v("redelegate transaction")]),t._v(" use the follow command")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("cncli tx staking "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  redelegate "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("source-validator-operator-addr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("destination-validator-operator-addr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  50000000000ucommercio "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your pub addr delegator"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--fees")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("10000ucommercio "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --chain-id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$CHAINID")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v("\n")])])]),a("p",[t._v("value of "),a("code",[t._v("<source-validator-operator-addr>")]),t._v(" and "),a("code",[t._v("<destination-validator-operator-addr>")]),t._v(" can be obtains from explorer:")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://testnet.commercio.network/it/validators",target:"_blank",rel:"noopener noreferrer"}},[t._v("Commercio.network explorer Testnet"),a("OutboundLink")],1),t._v("."),a("br"),t._v(" "),a("a",{attrs:{href:"https://mainnet.commercio.network/it/validators",target:"_blank",rel:"noopener noreferrer"}},[t._v("Commercio.network explorer Mainnet"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Search your source validator in the list, i.e. the validator you want to move the tokens from, and click on its name."),a("br"),t._v("\nThe validator tab should have the value "),a("strong",[t._v("Operator")]),t._v(". That value is your "),a("code",[t._v("<source-validator-operator-addr>")]),a("br"),t._v("\nReturn to the list of validators and search your destination validator, i.e. the validator you want to move the tokens to, and click on its name."),a("br"),t._v("\nThe validator tab should have the value "),a("strong",[t._v("Operator")]),t._v(". That value is your "),a("code",[t._v("<destination-validator-operator-addr>")])]),t._v(" "),a("p",[t._v("If you are using the "),a("strong",[t._v("Ledger device")]),t._v(" you must first connect it to your computer, start the cosmos application and add "),a("code",[t._v("--ledger")]),t._v(" flag to the command.")])])}),[],!1,null,null,null);a.default=o.exports}}]);