(window.webpackJsonp=window.webpackJsonp||[]).push([[2159],{2231:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),l=(n(0),n(2836)),p=["components"],c={},b={unversionedId:"puppeteer.elementhandle",id:"version-5.4.0/puppeteer.elementhandle",isDocsHomePage:!1,title:"puppeteer.elementhandle",description:"Home &gt; puppeteer &gt; ElementHandle",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.elementhandle.md",slug:"/puppeteer.elementhandle",permalink:"/puppeteer/docs/puppeteer.elementhandle",version:"5.4.0",sidebar:"version-5.4.0/docs",previous:{title:"puppeteer.jshandle.jsonvalue",permalink:"/puppeteer/docs/puppeteer.jshandle.jsonvalue"},next:{title:"puppeteer.elementhandle._",permalink:"/puppeteer/docs/puppeteer.elementhandle._"}},o=[{value:"ElementHandle class",id:"elementhandle-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Methods",id:"methods",children:[]}],d={toc:o};function u(e){var t=e.components,n=Object(r.a)(e,p);return Object(l.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.elementhandle"},"ElementHandle")),Object(l.b)("h2",{id:"elementhandle-class"},"ElementHandle class"),Object(l.b)("p",null,"ElementHandle represents an in-page DOM element."),Object(l.b)("b",null,"Signature:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"export declare class ElementHandle<ElementType extends Element = Element> extends JSHandle<ElementType> \n")),Object(l.b)("b",null,"Extends:")," [JSHandle](/puppeteer/docs/puppeteer.jshandle)<ElementType>",Object(l.b)("h2",{id:"remarks"},"Remarks"),Object(l.b)("p",null,"ElementHandles can be created with the ",Object(l.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.page._"},"Page.$()")," method."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\n\n(async () => {\n const browser = await puppeteer.launch();\n const page = await browser.newPage();\n await page.goto('https://example.com');\n const hrefElement = await page.$('a');\n await hrefElement.click();\n // ...\n})();\n\n")),Object(l.b)("p",null,"ElementHandle prevents the DOM element from being garbage-collected unless the handle is ",Object(l.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.jshandle.dispose"},"disposed"),". ElementHandles are auto-disposed when their origin frame gets navigated."),Object(l.b)("p",null,"ElementHandle instances can be used as arguments in ",Object(l.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.page._eval"},"Page.$eval()")," and ",Object(l.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.page.evaluate"},"Page.evaluate()")," methods."),Object(l.b)("p",null,"If you're using TypeScript, ElementHandle takes a generic argument that denotes the type of element the handle is holding within. For example, if you have a handle to a ",Object(l.b)("inlineCode",{parentName:"p"},"<select>")," element, you can type it as ",Object(l.b)("inlineCode",{parentName:"p"},"ElementHandle<HTMLSelectElement>")," and you get some nicer type checks."),Object(l.b)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",Object(l.b)("inlineCode",{parentName:"p"},"ElementHandle")," class."),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Method"),Object(l.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.elementhandle._"},"$(selector)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Runs ",Object(l.b)("code",null,"element.querySelector")," within the page. If no element matches the selector, the return value resolves to ",Object(l.b)("code",null,"null"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.elementhandle.__"},"$$(selector)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Runs ",Object(l.b)("code",null,"element.querySelectorAll")," within the page. If no elements match the selector, the return value resolves to ",Object(l.b)("code",null,"[]"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.elementhandle.__eval"},"$$eval(selector, pageFunction, args)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"This method runs ",Object(l.b)("code",null,"document.querySelectorAll")," within the element and passes it as the first argument to ",Object(l.b)("code",null,"pageFunction"),". If there's no element matching ",Object(l.b)("code",null,"selector"),", the method throws an error.If ",Object(l.b)("code",null,"pageFunction")," returns a Promise, then ",Object(l.b)("code",null,"frame.$$eval")," would wait for the promise to resolve and return its value.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.elementhandle._eval"},"$eval(selector, pageFunction, args)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"This method runs ",Object(l.b)("code",null,"document.querySelector")," within the element and passes it as the first argument to ",Object(l.b)("code",null,"pageFunction"),". If there's no element matching ",Object(l.b)("code",null,"selector"),", the method throws an error.If ",Object(l.b)("code",null,"pageFunction")," returns a Promise, then ",Object(l.b)("code",null,"frame.$eval")," would wait for the promise to resolve and return its value.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.elementhandle._x"},"$x(expression)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"The method evaluates the XPath expression relative to the elementHandle. If there are no such elements, the method will resolve to an empty array.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.elementhandle.aselement"},"asElement()")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.elementhandle.boundingbox"},"boundingBox()")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"This method returns the bounding box of the element (relative to the main frame), or ",Object(l.b)("code",null,"null")," if the element is not visible.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.elementhandle.boxmodel"},"boxModel()")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"This method returns boxes of the element, or ",Object(l.b)("code",null,"null")," if the element is not visible.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.elementhandle.click"},"click(options)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"This method scrolls element into view if needed, and then uses ",Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.mouse"},"Page.mouse")," to click in the center of the element. If the element is detached from DOM, the method throws an error.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.elementhandle.clickablepoint"},"clickablePoint()")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.elementhandle.contentframe"},"contentFrame()")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Resolves to the content frame for element handles referencing iframe nodes, or null otherwise")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.elementhandle.drag"},"drag(target)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"This method creates and captures a dragevent from the element.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.elementhandle.draganddrop"},"dragAndDrop(target, options)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"This method triggers a dragenter, dragover, and drop on the element.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.elementhandle.dragenter"},"dragEnter(data)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"This method creates a ",Object(l.b)("code",null,"dragenter")," event on the element.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.elementhandle.dragover"},"dragOver(data)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"This method creates a ",Object(l.b)("code",null,"dragover")," event on the element.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.elementhandle.drop"},"drop(data)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"This method triggers a drop on the element.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.elementhandle.focus"},"focus()")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Calls ",Object(l.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus"},"focus")," on the element.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.elementhandle.hover"},"hover()")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"This method scrolls element into view if needed, and then uses ",Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.mouse"},"Page.mouse")," to hover over the center of the element. If the element is detached from DOM, the method throws an error.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.elementhandle.isintersectingviewport"},"isIntersectingViewport()")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Resolves to true if the element is visible in the current viewport.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.elementhandle.press"},"press(key, options)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Focuses the element, and then uses ",Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.keyboard.down"},"Keyboard.down()")," and ",Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.keyboard.up"},"Keyboard.up()"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.elementhandle.screenshot"},"screenshot(options)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"This method scrolls element into view if needed, and then uses ",Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.screenshot"},"Page.screenshot()")," to take a screenshot of the element. If the element is detached from DOM, the method throws an error.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.elementhandle.select"},"select(values)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Triggers a ",Object(l.b)("code",null,"change")," and ",Object(l.b)("code",null,"input")," event once all the provided options have been selected. If there's no ",Object(l.b)("code",null,"<","select",">")," element matching ",Object(l.b)("code",null,"selector"),", the method throws an error.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.elementhandle.tap"},"tap()")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"This method scrolls element into view if needed, and then uses ",Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.touchscreen.tap"},"Touchscreen.tap()")," to tap in the center of the element. If the element is detached from DOM, the method throws an error.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.elementhandle.type"},"type(text, options)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Focuses the element, and then sends a ",Object(l.b)("code",null,"keydown"),", ",Object(l.b)("code",null,"keypress"),"/",Object(l.b)("code",null,"input"),", and ",Object(l.b)("code",null,"keyup")," event for each character in the text.To press a special key, like ",Object(l.b)("code",null,"Control")," or ",Object(l.b)("code",null,"ArrowDown"),", use ",Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.elementhandle.press"},"ElementHandle.press()"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.elementhandle.uploadfile"},"uploadFile(filePaths)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"This method expects ",Object(l.b)("code",null,"elementHandle")," to point to an ",Object(l.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"},"input element"),".")))))}u.isMDXComponent=!0},2836:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return i}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=d(n),s=a,i=u["".concat(p,".").concat(s)]||u[s]||m[s]||l;return n?r.a.createElement(i,c(c({ref:t},o),{},{components:n})):r.a.createElement(i,c({ref:t},o))}));function i(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=s;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var o=2;o<l;o++)p[o]=n[o];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);