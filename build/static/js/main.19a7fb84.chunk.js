(this.webpackJsonpart_collector_react=this.webpackJsonpart_collector_react||[]).push([[0],{12:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(0),c=a.n(r),s=a(5),l=a.n(s),u=a(1),i=a.n(u),o=a(2),m="https://api.harvardartmuseums.org",p="apikey=d26c93df-b997-4aa7-ab86-bafb04a7b4eb";function f(e,t){return h.apply(this,arguments)}function h(){return(h=Object(o.a)(i.a.mark((function e(t,a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(m,"/object?").concat(p,"&").concat(t,"=").concat(encodeURI(a.split("-").join("|"))));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function d(e){return E.apply(this,arguments)}function E(){return(E=Object(o.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function v(e){return b.apply(this,arguments)}function b(){return(b=Object(o.a)(i.a.mark((function e(t){var a,n,r,c,s,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.century,n=t.classification,r=t.queryString,c="".concat(m,"/object?").concat(p,"&classification=").concat(n,"&century=").concat(a,"&keyword=").concat(r),e.prev=2,e.next=5,fetch(c);case 5:return s=e.sent,e.next=8,s.json();case 8:return l=e.sent,e.abrupt("return",l);case 12:throw e.prev=12,e.t0=e.catch(2),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}function y(){return g.apply(this,arguments)}function g(){return(g=Object(o.a)(i.a.mark((function e(){var t,a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("centuries")){e.next=2;break}return e.abrupt("return",JSON.parse(localStorage.getItem("centuries")));case 2:return t="".concat(m,"/century?").concat(p,"&size=100&sort=temporalorder"),e.prev=3,e.next=6,fetch(t);case 6:return a=e.sent,e.next=9,a.json();case 9:return n=e.sent,r=n.records,localStorage.setItem("centuries",JSON.stringify(r)),e.abrupt("return",r);case 15:throw e.prev=15,e.t0=e.catch(3),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,15]])})))).apply(this,arguments)}function N(){return S.apply(this,arguments)}function S(){return(S=Object(o.a)(i.a.mark((function e(){var t,a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("classifications")){e.next=2;break}return e.abrupt("return",JSON.parse(localStorage.getItem("classifications")));case 2:return t="".concat(m,"/classification?").concat(p,"&size=100&sort=name"),e.prev=3,e.next=6,fetch(t);case 6:return a=e.sent,e.next=9,a.json();case 9:return n=e.sent,r=n.records,localStorage.setItem("classifications",JSON.stringify(r)),e.abrupt("return",r);case 15:throw e.prev=15,e.t0=e.catch(3),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,15]])})))).apply(this,arguments)}var j=function(e){var t=e.searchTerm,a=e.searchValue,n=e.setIsLoading,r=e.setSearchResults;return c.a.createElement("span",{className:"content"},c.a.createElement("a",{href:"#",onClick:function(){var e=Object(o.a)(i.a.mark((function e(c){var s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),n(!0),e.prev=2,e.next=5,f(t,a);case 5:s=e.sent,r(s),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:return e.prev=12,n(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})));return function(t){return e.apply(this,arguments)}}()},a))},x=function(e){var t=e.setIsLoading,a=e.setSearchResults,n=e.featuredResult;return n?c.a.createElement("main",{id:"feature"},c.a.createElement("div",{className:"object-feature"},c.a.createElement("header",null,c.a.createElement("h3",null,n.title),c.a.createElement("h4",null,n.dated)),c.a.createElement("span",{className:"title"},"Description"),c.a.createElement("span",{className:"content"},n.description),c.a.createElement("section",{className:"facts"},c.a.createElement("span",{className:"title"},"Culture"),c.a.createElement(j,{searchTerm:"culture",searchValue:n.culture,setIsLoading:t,setSearchResults:a}),c.a.createElement("span",{className:"title"},"Technique"),c.a.createElement(j,{searchTerm:"technique",searchValue:n.technique,setIsLoading:t,setSearchResults:a}),c.a.createElement("span",{className:"title"},"People"),n.people?n.people.map((function(e){return c.a.createElement(j,{searchTerm:"person",searchValue:e.displayname,setIsLoading:t,setSearchResults:a})})):null,c.a.createElement("span",{className:"title"},"Medium"),c.a.createElement(j,{searchTerm:"medium",searchValue:n.medium,setIsLoading:t,setSearchResults:a}),c.a.createElement("span",{className:"title"},"Style"),c.a.createElement("span",{className:"content"},n.style),c.a.createElement("span",{className:"title"},"Dimensions"),c.a.createElement("span",{className:"content"},n.dimensions),c.a.createElement("span",{className:"title"},"Department"),c.a.createElement("span",{className:"content"},n.department),c.a.createElement("span",{className:"title"},"Division"),c.a.createElement("span",{className:"content"},n.division),c.a.createElement("span",{className:"title"},"Contact"),c.a.createElement("span",{className:"content"},n.contact),c.a.createElement("span",{className:"title"},"Credit"),c.a.createElement("span",{className:"content"},n.creditline)),c.a.createElement("section",{className:"photos"},c.a.createElement("img",{src:n.primaryimageurl,alt:n.title}),n.images?n.images.map((function(e){return console.log(e),c.a.createElement("img",{src:e.baseimageurl,alt:n.title})})):null))):c.a.createElement("main",{id:"feature"})},O=function(){return c.a.createElement("div",{id:"loading"},c.a.createElement("h2",{className:"message"},"Searching..."))},w=function(e){var t=e.setSearchResults,a=e.setFeaturedResult,n=e.setIsLoading,r=e.searchResults,s=r.info,l=r.records;function u(e){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(i.a.mark((function e(a){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.prev=1,e.next=4,d(a);case 4:r=e.sent,t(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:return e.prev=11,n(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}return c.a.createElement("aside",{id:"preview"},c.a.createElement("header",{className:"pagination"},c.a.createElement("button",{disabled:!s.prev,className:"previous",onClick:function(){u(s.prev)}},"Previous"),c.a.createElement("button",{disabled:!s.next,className:"next",onClick:function(){u(s.next)}},"Next")),c.a.createElement("section",{className:"results"},l.map((function(e){return c.a.createElement("div",{key:e.id,className:"object-preview",onClick:function(t){t.preventDefault(),a(e)}},e.primaryimageurl?c.a.createElement("img",{src:e.primaryimageurl,alt:e.description}):null,e.title?c.a.createElement("h3",null,e.title):c.a.createElement("h3",null,"MISSING INFO"))}))))},k=function(e){var t=e.setIsLoading,a=e.setSearchResults,s=Object(r.useState)([]),l=Object(n.a)(s,2),u=l[0],m=l[1],p=Object(r.useState)([]),f=Object(n.a)(p,2),h=f[0],d=f[1],E=Object(r.useState)(""),b=Object(n.a)(E,2),g=b[0],S=b[1],j=Object(r.useState)("any"),x=Object(n.a)(j,2),O=x[0],w=x[1],k=Object(r.useState)("any"),I=Object(n.a)(k,2),R=I[0],C=I[1];return Object(r.useEffect)((function(){try{Promise.all([y(),N()]).then((function(e){m(e[0]),d(e[1])}))}catch(e){console.error(e)}}),[]),c.a.createElement("form",{id:"search",onSubmit:function(){var e=Object(o.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),t(!0),e.prev=2,e.next=5,v({century:O,classification:R,queryString:g});case 5:r=e.sent,a(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:return e.prev=12,t(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})));return function(t){return e.apply(this,arguments)}}()},c.a.createElement("fieldset",null,c.a.createElement("label",{htmlFor:"keywords"},"Query"),c.a.createElement("input",{id:"keywords",type:"text",placeholder:"enter keywords...",value:g,onChange:function(e){S(e.target.value)}})),c.a.createElement("fieldset",null,c.a.createElement("label",{htmlFor:"select-classification"},"Classification"," ",c.a.createElement("span",{className:"classification-count"},"(",h.length,")")),c.a.createElement("select",{name:"classification",id:"select-classification",value:R,onChange:function(e){C(e.target.value)}},c.a.createElement("option",{value:"any"},"Any"),h.map((function(e){return c.a.createElement("option",{value:e.name,key:e.id},e.name)})))),c.a.createElement("fieldset",null,c.a.createElement("label",{htmlFor:"select-century"},"Century ",c.a.createElement("span",{className:"century-count"},"(",u.length,")")),c.a.createElement("select",{name:"century",id:"select-century",value:O,onChange:function(e){w(e.target.value)}},c.a.createElement("option",{value:"any"},"Any"),u.map((function(e){return c.a.createElement("option",{value:e.name,key:e.id},e.name)})))),c.a.createElement("button",null,"SEARCH"))},I=function(){return c.a.createElement("div",{id:"title"},c.a.createElement("h1",null,"The Art Collector"),c.a.createElement("h5",null,"Search the Harvard Art Museums' Private Collections"))},R=function(){var e=Object(r.useState)({info:{},records:[]}),t=Object(n.a)(e,2),a=t[0],s=t[1],l=Object(r.useState)(null),u=Object(n.a)(l,2),i=u[0],o=u[1],m=Object(r.useState)(!1),p=Object(n.a)(m,2),f=p[0],h=p[1];return c.a.createElement("div",{className:"app"},c.a.createElement(I,null),c.a.createElement(k,{setIsLoading:h,setSearchResults:s}),c.a.createElement(w,{searchResults:a,setIsLoading:h,setSearchResults:s,setFeaturedResult:o}),c.a.createElement(x,{featuredResult:i,setIsLoading:h,setSearchResults:s}),f?c.a.createElement(O,null):null)};l.a.render(c.a.createElement(R,null),document.getElementById("app"))},6:function(e,t,a){e.exports=a(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.19a7fb84.chunk.js.map