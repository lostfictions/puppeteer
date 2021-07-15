(window.webpackJsonp=window.webpackJsonp||[]).push([[755],{2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(r),m=n,d=b["".concat(o,".").concat(m)]||b[m]||s[m]||p;return r?a.a.createElement(d,i(i({ref:t},l),{},{components:r})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<p;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},826:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),p=(r(0),r(2836)),o=["components"],i={},c={unversionedId:"puppeteer.frame.goto",id:"puppeteer.frame.goto",isDocsHomePage:!1,title:"puppeteer.frame.goto",description:"Home &gt; puppeteer &gt; Frame &gt; goto",source:"@site/docs\\puppeteer.frame.goto.md",slug:"/puppeteer.frame.goto",permalink:"/puppeteer/docs/next/puppeteer.frame.goto",version:"current"},l=[{value:"Frame.goto() method",id:"framegoto-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],u={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,o);return Object(p.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.frame"},"Frame")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.frame.goto"},"goto")),Object(p.b)("h2",{id:"framegoto-method"},"Frame.goto() method"),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"goto(url: string, options?: {\n        referer?: string;\n        timeout?: number;\n        waitUntil?: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[];\n    }): Promise<HTTPResponse | null>;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"url"),Object(p.b)("td",{parentName:"tr",align:null},"string"),Object(p.b)("td",{parentName:"tr",align:null},"the URL to navigate the frame to. This should include the scheme, e.g. ",Object(p.b)("code",null,"https://"),".")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"options"),Object(p.b)("td",{parentName:"tr",align:null},"{ referer?: string; timeout?: number; waitUntil?: ",Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.puppeteerlifecycleevent"},"PuppeteerLifeCycleEvent")," ","|"," ",Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.puppeteerlifecycleevent"},"PuppeteerLifeCycleEvent"),"[","]","; }"),Object(p.b)("td",{parentName:"tr",align:null},"navigation options. ",Object(p.b)("code",null,"waitUntil")," is useful to define when the navigation should be considered successful - see the docs for ",Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.puppeteerlifecycleevent"},"PuppeteerLifeCycleEvent")," for more details.")))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.httpresponse"},"HTTPResponse")," ","|"," null",">"),Object(p.b)("p",null,"A promise which resolves to the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect."),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"frame.goto")," will throw an error if: - there's an SSL error (e.g. in case of self-signed certificates)."),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"target URL is invalid.")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"the ",Object(p.b)("inlineCode",{parentName:"p"},"timeout")," is exceeded during navigation.")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"the remote server does not respond or is unreachable.")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"the main resource failed to load."))),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"frame.goto"),' will not throw an error when any valid HTTP status code is returned by the remote server, including 404 "Not Found" and 500 "Internal Server Error". The status code for such responses can be retrieved by calling ',Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.httpresponse.status"},"HTTPResponse.status()"),"."),Object(p.b)("p",null,"NOTE: ",Object(p.b)("inlineCode",{parentName:"p"},"frame.goto")," either throws an error or returns a main resource response. The only exceptions are navigation to ",Object(p.b)("inlineCode",{parentName:"p"},"about:blank")," or navigation to the same URL with a different hash, which would succeed and return ",Object(p.b)("inlineCode",{parentName:"p"},"null"),"."),Object(p.b)("p",null,"NOTE: Headless mode doesn't support navigation to a PDF document. See the ",Object(p.b)("a",{parentName:"p",href:"https://bugs.chromium.org/p/chromium/issues/detail?id=761295"},"upstream issue"),"."))}b.isMDXComponent=!0}}]);