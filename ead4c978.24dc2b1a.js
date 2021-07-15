(window.webpackJsonp=window.webpackJsonp||[]).push([[2543],{2614:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return i}));var n=r(3),o=r(7),a=(r(0),r(2836)),p=["components"],c={},u={unversionedId:"puppeteer.mouse.move",id:"version-5.4.0/puppeteer.mouse.move",isDocsHomePage:!1,title:"puppeteer.mouse.move",description:"Home &gt; puppeteer &gt; Mouse &gt; move",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.mouse.move.md",slug:"/puppeteer.mouse.move",permalink:"/puppeteer/docs/puppeteer.mouse.move",version:"5.4.0"},l=[{value:"Mouse.move() method",id:"mousemove-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],b={toc:l};function i(e){var t=e.components,r=Object(o.a)(e,p);return Object(a.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.mouse"},"Mouse")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.mouse.move"},"move")),Object(a.b)("h2",{id:"mousemove-method"},"Mouse.move() method"),Object(a.b)("p",null,"Dispatches a ",Object(a.b)("inlineCode",{parentName:"p"},"mousemove")," event."),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"move(x: number, y: number, options?: {\n        steps?: number;\n    }): Promise<void>;\n")),Object(a.b)("h2",{id:"parameters"},"Parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Parameter"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"x"),Object(a.b)("td",{parentName:"tr",align:null},"number"),Object(a.b)("td",{parentName:"tr",align:null},"Horizontal position of the mouse.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"y"),Object(a.b)("td",{parentName:"tr",align:null},"number"),Object(a.b)("td",{parentName:"tr",align:null},"Vertical position of the mouse.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"options"),Object(a.b)("td",{parentName:"tr",align:null},"{ steps?: number; }"),Object(a.b)("td",{parentName:"tr",align:null},"Optional object. If specified, the ",Object(a.b)("code",null,"steps")," property sends intermediate ",Object(a.b)("code",null,"mousemove")," events when set to ",Object(a.b)("code",null,"1")," (default).")))),Object(a.b)("b",null,"Returns:"),Object(a.b)("p",null,"Promise","<","void",">"))}i.isMDXComponent=!0},2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),i=b(r),s=n,d=i["".concat(p,".").concat(s)]||i[s]||m[s]||a;return r?o.a.createElement(d,c(c({ref:t},l),{},{components:r})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var l=2;l<a;l++)p[l]=r[l];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);