(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{456:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[t._v("#")]),t._v(" State")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("commerciomint")]),t._v(" module keeps state of the Exchange Trade Positions")]),t._v(" "),s("h2",{attrs:{id:"store"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#store"}},[t._v("#")]),t._v(" Store")]),t._v(" "),s("h3",{attrs:{id:"positions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#positions"}},[t._v("#")]),t._v(" Positions")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Key")]),t._v(" "),s("th"),t._v(" "),s("th",[t._v("Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("commerciomint:etp:[owner][ID]")])]),t._v(" "),s("td",[t._v("→")]),t._v(" "),s("td",[s("em",[t._v("Position")])])])])]),t._v(" "),s("h2",{attrs:{id:"type-definitions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type-definitions"}},[t._v("#")]),t._v(" Type definitions")]),t._v(" "),s("h3",{attrs:{id:"positions-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#positions-2"}},[t._v("#")]),t._v(" Positions")]),t._v(" "),s("p",[t._v("Positions are objects that are created when a user deposits an amount of Commercio Cash Credit (CCC). However the holded collateral is proportional to the position's exchange rate.")]),t._v(" "),s("div",{staticClass:"language-protobuf extra-class"},[s("pre",{pre:!0,attrs:{class:"language-protobuf"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("message")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Position")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" owner "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),t._v(" collateral "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token positional-class-name class-name"}},[t._v("cosmos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("base"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v1beta1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Coin")]),t._v(" credits "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token positional-class-name class-name"}},[t._v("google"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("protobuf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Timestamp")]),t._v(" created_at "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gogoproto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stdtime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" ID "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" exchange_rate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gogoproto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nullable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gogoproto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("customtype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/cosmos/cosmos-sdk/types.Dec"')]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);