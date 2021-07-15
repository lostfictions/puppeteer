(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{2836:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=l(n),u=r,m=b["".concat(p,".").concat(u)]||b[u]||d[u]||o;return n?a.a.createElement(m,c(c({ref:t},i),{},{components:n})):a.a.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var i=2;i<o;i++)p[i]=n[i];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},308:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(2836)),p=["components"],c={},s={unversionedId:"puppeteer.cdpsession",id:"version-10.0.0/puppeteer.cdpsession",isDocsHomePage:!1,title:"puppeteer.cdpsession",description:"Home &gt; puppeteer &gt; CDPSession",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.cdpsession.md",slug:"/puppeteer.cdpsession",permalink:"/puppeteer/docs/10.0.0/puppeteer.cdpsession",version:"10.0.0",sidebar:"version-10.0.0/docs",previous:{title:"puppeteer.target.worker",permalink:"/puppeteer/docs/10.0.0/puppeteer.target.worker"},next:{title:"puppeteer.cdpsession.connection",permalink:"/puppeteer/docs/10.0.0/puppeteer.cdpsession.connection"}},i=[{value:"CDPSession class",id:"cdpsession-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]},{value:"Methods",id:"methods",children:[]}],l={toc:i};function b(e){var t=e.components,n=Object(a.a)(e,p);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.cdpsession"},"CDPSession")),Object(o.b)("h2",{id:"cdpsession-class"},"CDPSession class"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"CDPSession")," instances are used to talk raw Chrome Devtools Protocol."),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"export declare class CDPSession extends EventEmitter \n")),Object(o.b)("b",null,"Extends:")," [EventEmitter](/puppeteer/docs/10.0.0/puppeteer.eventemitter)",Object(o.b)("h2",{id:"remarks"},"Remarks"),Object(o.b)("p",null,"Protocol methods can be called with ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.cdpsession.send"},"CDPSession.send()")," method and protocol events can be subscribed to with ",Object(o.b)("inlineCode",{parentName:"p"},"CDPSession.on")," method."),Object(o.b)("p",null,"Useful links: ",Object(o.b)("a",{parentName:"p",href:"https://chromedevtools.github.io/devtools-protocol/"},"DevTools Protocol Viewer")," and ",Object(o.b)("a",{parentName:"p",href:"https://github.com/aslushnikov/getting-started-with-cdp/blob/master/README.md"},"Getting Started with DevTools Protocol"),"."),Object(o.b)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",Object(o.b)("inlineCode",{parentName:"p"},"CDPSession")," class."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const client = await page.target().createCDPSession();\nawait client.send('Animation.enable');\nclient.on('Animation.animationCreated', () => console.log('Animation created!'));\nconst response = await client.send('Animation.getPlaybackRate');\nconsole.log('playback rate is ' + response.playbackRate);\nawait client.send('Animation.setPlaybackRate', {\n  playbackRate: response.playbackRate / 2\n});\n\n")),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Method"),Object(o.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.cdpsession.connection"},"connection()")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.cdpsession.detach"},"detach()")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Detaches the cdpSession from the target. Once detached, the cdpSession object won't emit any events and can't be used to send messages.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.cdpsession.send"},"send(method, paramArgs)")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null})))))}b.isMDXComponent=!0}}]);