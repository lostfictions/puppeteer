(window.webpackJsonp=window.webpackJsonp||[]).push([[1213],{1284:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),p=(r(0),r(2836)),u=["components"],c={},o={unversionedId:"puppeteer.registercustomqueryhandler",id:"puppeteer.registercustomqueryhandler",isDocsHomePage:!1,title:"puppeteer.registercustomqueryhandler",description:"Home &gt; puppeteer &gt; registerCustomQueryHandler",source:"@site/docs\\puppeteer.registercustomqueryhandler.md",slug:"/puppeteer.registercustomqueryhandler",permalink:"/puppeteer/docs/next/puppeteer.registercustomqueryhandler",version:"current"},l=[{value:"registerCustomQueryHandler() function",id:"registercustomqueryhandler-function",children:[]},{value:"Parameters",id:"parameters",children:[]}],i={toc:l};function s(e){var t=e.components,r=Object(a.a)(e,u);return Object(p.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.registercustomqueryhandler"},"registerCustomQueryHandler")),Object(p.b)("h2",{id:"registercustomqueryhandler-function"},"registerCustomQueryHandler() function"),Object(p.b)("p",null,"Registers a ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.customqueryhandler"},"custom query handler"),". After registration, the handler can be used everywhere where a selector is expected by prepending the selection string with ",Object(p.b)("inlineCode",{parentName:"p"},"<name>/"),". The name is only allowed to consist of lower- and upper case latin letters."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"export declare function registerCustomQueryHandler(name: string, queryHandler: CustomQueryHandler): void;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"name"),Object(p.b)("td",{parentName:"tr",align:null},"string"),Object(p.b)("td",{parentName:"tr",align:null},"The name that the custom query handler will be registered under.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"queryHandler"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.customqueryhandler"},"CustomQueryHandler")),Object(p.b)("td",{parentName:"tr",align:null},"The ",Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.customqueryhandler"},"custom query handler")," to register.")))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"void"))}s.isMDXComponent=!0},2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),i=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=i(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=i(r),d=n,m=s["".concat(u,".").concat(d)]||s[d]||b[d]||p;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,u=new Array(p);u[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,u[1]=c;for(var l=2;l<p;l++)u[l]=r[l];return a.a.createElement.apply(null,u)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);