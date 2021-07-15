(window.webpackJsonp=window.webpackJsonp||[]).push([[1830],{1902:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),l=(n(0),n(2836)),p=["components"],c={},o={unversionedId:"puppeteer.elementhandle.select",id:"version-6.0.0/puppeteer.elementhandle.select",isDocsHomePage:!1,title:"puppeteer.elementhandle.select",description:"Home &gt; puppeteer &gt; ElementHandle &gt; select",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.elementhandle.select.md",slug:"/puppeteer.elementhandle.select",permalink:"/puppeteer/docs/6.0.0/puppeteer.elementhandle.select",version:"6.0.0",sidebar:"version-6.0.0/docs",previous:{title:"puppeteer.elementhandle.screenshot",permalink:"/puppeteer/docs/6.0.0/puppeteer.elementhandle.screenshot"},next:{title:"puppeteer.elementhandle.tap",permalink:"/puppeteer/docs/6.0.0/puppeteer.elementhandle.tap"}},i=[{value:"ElementHandle.select() method",id:"elementhandleselect-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],u={toc:i};function s(e){var t=e.components,n=Object(a.a)(e,p);return Object(l.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/index"},"Home")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.elementhandle"},"ElementHandle")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.elementhandle.select"},"select")),Object(l.b)("h2",{id:"elementhandleselect-method"},"ElementHandle.select() method"),Object(l.b)("p",null,"Triggers a ",Object(l.b)("inlineCode",{parentName:"p"},"change")," and ",Object(l.b)("inlineCode",{parentName:"p"},"input")," event once all the provided options have been selected. If there's no ",Object(l.b)("inlineCode",{parentName:"p"},"<select>")," element matching ",Object(l.b)("inlineCode",{parentName:"p"},"selector"),", the method throws an error."),Object(l.b)("b",null,"Signature:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"select(...values: string[]): Promise<string[]>;\n")),Object(l.b)("h2",{id:"parameters"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Parameter"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"values"),Object(l.b)("td",{parentName:"tr",align:null},"string","[","]"),Object(l.b)("td",{parentName:"tr",align:null},"Values of options to select. If the ",Object(l.b)("code",null,"<","select",">")," has the ",Object(l.b)("code",null,"multiple")," attribute, all values are considered, otherwise only the first one is taken into account.")))),Object(l.b)("b",null,"Returns:"),Object(l.b)("p",null,"Promise","<","string","[","]",">"),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"handle.select('blue'); // single selection\nhandle.select('red', 'green', 'blue'); // multiple selections\n\n")))}s.isMDXComponent=!0},2836:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(p,".").concat(d)]||s[d]||b[d]||l;return n?a.a.createElement(m,c(c({ref:t},i),{},{components:n})):a.a.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var i=2;i<l;i++)p[i]=n[i];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);