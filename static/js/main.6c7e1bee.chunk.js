(this["webpackJsonpcustom-counter"]=this["webpackJsonpcustom-counter"]||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n(1),r=n.n(s),u=n(4),i=n.n(u),o=(n(10),n(11),n(2)),a=function(t){var e=t.count;return Object(c.jsx)("p",{className:"count",children:e})},b=function(){var t=Object(s.useState)("Custom Counter"),e=Object(o.a)(t,2),n=e[0],r=e[1],u=Object(s.useState)(0),i=Object(o.a)(u,2),b=i[0],j=i[1],l=Object(s.useState)(1),d=Object(o.a)(l,2),O=d[0],h=d[1];return O<1&&h(1),Object(c.jsxs)("div",{className:"counter-container",children:[Object(c.jsx)("h2",{children:n}),Object(c.jsx)(a,{count:b}),Object(c.jsxs)("div",{className:"counter-controller",children:[Object(c.jsx)("button",{type:"button",className:"btn btn-dec",onClick:function(){return j(b-O)},children:"-"}),Object(c.jsx)("button",{type:"button",className:"btn btn-reset",onClick:function(){return j(0)},children:"Reset"}),Object(c.jsx)("button",{type:"button",className:"btn btn-inc",onClick:function(){return j(O+b)},children:"+"})]}),Object(c.jsxs)("div",{className:"counter-settings",children:[Object(c.jsxs)("form",{className:"settings-row",children:[Object(c.jsx)("p",{children:"Name: "}),Object(c.jsx)("input",{className:"",value:n,onChange:function(t){return r(t.target.value)}})]}),Object(c.jsxs)("div",{className:"settings-row",children:[Object(c.jsx)("p",{children:"Increment: "}),Object(c.jsx)("input",{type:"number",value:O,onChange:function(t){return h(Number(t.target.value))}})]}),Object(c.jsxs)("div",{className:"settings-row settings-btns",children:[Object(c.jsx)("button",{type:"button",className:"btn btn-dec",onClick:function(){return h(O-1)},children:"-"}),Object(c.jsx)("button",{type:"button",className:"btn btn-inc",onClick:function(){return h(O+1)},children:"+"})]})]})]})};var j=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Custom Counter React App"}),Object(c.jsx)(b,{})]})},l=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,r=e.getLCP,u=e.getTTFB;n(t),c(t),s(t),r(t),u(t)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(j,{})}),document.getElementById("root")),l()}},[[12,1,2]]]);
//# sourceMappingURL=main.6c7e1bee.chunk.js.map