(this["webpackJsonpauth-backbone"]=this["webpackJsonpauth-backbone"]||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(5),s=t.n(c),l=(t(13),function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"BackBoneing"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"#"},"Home")))))}),o=t(2),m=t(6),u=t(1),p=t(3),i=t.n(p),b=t(7),d=Object(n.createContext)(),v=function(e){var a=Object(n.useState)(""),t=Object(u.a)(a,2),r=(t[0],t[1]),c=Object(n.useState)({username:"",password:""}),s=Object(u.a)(c,2),l=s[0],o=(s[1],l.username),m=l.password,p=Object(n.useState)(!1),d=Object(u.a)(p,2),v=d[0];d[1];Object(n.useEffect)((function(){(function(){var e=Object(b.a)(i.a.mark((function e(){var a,t,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!v){e.next=18;break}return a=new URLSearchParams,t=new Headers,a.append("client_id","apitest"),a.append("client_secret","6645c999-570d-4fbe-8f31-f3112b1b5647"),a.append("grant_type","password"),a.append("username","".concat(o)),a.append("password","".concat(m)),t.append("Content-Type","application/x-www-form-urlencoded"),e.next=12,fetch("https://nr.yogestiono.cl/api/rc/auth",{method:"POST",headers:t,body:a});case 12:return n=e.sent,e.next=15,n.json();case 15:c=e.sent,r(c),console.log(c);case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(){return e.apply(this,arguments)}})()()}),[l])},f=function(e){var a=e.mensaje;return r.a.createElement("div",{className:"alert alert-danger text-danger",role:"alert"},a)},g=function(){var e=Object(n.useContext)(d),a=e.setInputUsuario,t=e.setDisponible,c=e.usuario,s=Object(n.useState)({username:"",password:""}),l=Object(u.a)(s,2),p=l[0],i=l[1],b=Object(n.useState)({errorInputUser:!1,errorInputPass:!1}),v=Object(u.a)(b,2),g=v[0],E=v[1],h=function(e){i(Object(m.a)({},p,Object(o.a)({},e.target.name,e.target.value)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container mt-5"},r.a.createElement("form",{onSubmit:function(e){return e.preventDefault(),""===p.username.trim()?(console.log("username vacio !"),void E({errorInput:!0})):p.password?(E({errorInput:!1,errorSelect:!1}),a(p),void t(!0)):(console.log("password vacio !"),void E({errorSelect:!0}))},className:"mb-5"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Nombre"),r.a.createElement("input",{type:"text",className:"form-control",id:"username",name:"username",placeholder:"Tu username",onChange:h})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Contrase\xf1a"),r.a.createElement("input",{type:"password",className:"form-control",id:"password",name:"password",placeholder:"Tu password",onChange:h})),r.a.createElement("button",{type:"submit",className:"btn btn-dark btn-block btn-lg"},"Entrar")),r.a.createElement("div",{className:"alert alert-primary",role:"alert"},r.a.createElement("pre",null,JSON.stringify(c,null,2))),g.errorInput&&r.a.createElement(f,{mensaje:"Ingrese un nombre !"}),g.errorSelect&&r.a.createElement(f,{mensaje:"Ingresa una contrase\xf1a !"})))};var E=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l,null),r.a.createElement(g,null))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null,r.a.createElement(E,null))),document.getElementById("root"))},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.f7332e7d.chunk.js.map