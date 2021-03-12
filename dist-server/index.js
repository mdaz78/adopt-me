parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"2tnM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("react");const t=(0,e.createContext)(["green",()=>{}]);var r=t;exports.default=r;
},{}],"qepC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("react-router-dom"),s=require("react/jsx-runtime");const r=({name:r,animal:t,breed:i,images:a,location:n,id:l})=>{let c="http://pets-images.dev-apis.com/pets/none.jpg";return a.length&&(c=a[0]),(0,s.jsxs)(e.Link,{to:`/details/${l}`,className:"pet",children:[(0,s.jsx)("div",{className:"image-container",children:(0,s.jsx)("img",{src:c,alt:r})}),(0,s.jsxs)("div",{className:"info",children:[(0,s.jsx)("h1",{children:r}),(0,s.jsx)("h2",{children:`${t} — ${i} — ${n}`})]})]})};var t=r;exports.default=t;
},{}],"r5l1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=i;var e=a(require("react")),r=a(require("./Pet")),t=require("react/jsx-runtime");function a(e){return e&&e.__esModule?e:{default:e}}function i({pets:e}){return(0,t.jsx)("div",{className:"search",children:e.length?e.map(({id:e,name:a,animal:i,breed:s,images:n,city:u,state:d})=>(0,t.jsx)(r.default,{name:a,animal:i,breed:s,images:n,location:`${u}, ${d}`,id:e},e)):(0,t.jsx)("h2",{children:"No Pets Found"})})}
},{"./Pet":"qepC"}],"/HkA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=a;var e=require("react");const t={};function a(a){const[s,n]=(0,e.useState)([]),[o,r]=(0,e.useState)("unloaded");return(0,e.useEffect)(()=>{a?t[a]?n(t[a]):async function(){n([]),r("loading");const e=await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${a}`),s=await e.json();t[a]=s.breeds||[],n(t[a]),r("loaded")}():n([])},[a]),[s,o]}
},{}],"n0tu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=s;var e=u(require("react")),t=l(require("./Results")),r=l(require("./ThemeContext")),a=l(require("./useBreedList")),n=require("react/jsx-runtime");function l(e){return e&&e.__esModule?e:{default:e}}function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function u(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var l=a?Object.getOwnPropertyDescriptor(e,n):null;l&&(l.get||l.set)?Object.defineProperty(r,n,l):r[n]=e[n]}return r.default=e,t&&t.set(e,r),r}const i=["bird","cat","dog","rabbit","reptile"];function s(){const[l,o]=(0,e.useState)(""),[u,s]=(0,e.useState)(""),[c,d]=(0,e.useState)(""),[p,h]=(0,e.useState)([]),[f]=(0,a.default)(u),[j,v]=(0,e.useContext)(r.default);async function x(){const e=await fetch(`http://pets-v2.dev-apis.com/pets?animal=${u}&location=${l}&breed=${c}`),t=await e.json();h(t.pets)}return(0,e.useEffect)(()=>{x()},[]),(0,n.jsxs)("div",{className:"search-params",children:[(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault(),x()},children:[(0,n.jsxs)("label",{htmlFor:"location",children:["Location",(0,n.jsx)("input",{id:"location",value:l,placeholder:"Location",onChange:e=>o(e.target.value)})]}),(0,n.jsxs)("label",{htmlFor:"animal",children:["Animal",(0,n.jsxs)("select",{id:"animal",value:u,onChange:e=>s(e.target.value),onBlur:e=>s(e.target.value),children:[(0,n.jsx)("option",{}),i.map(e=>(0,n.jsx)("option",{value:e,children:e},e))]})]}),(0,n.jsxs)("label",{htmlFor:"breed",children:["Breed",(0,n.jsxs)("select",{disabled:!f.length,id:"breed",value:c,onChange:e=>d(e.target.value),onBlur:e=>d(e.target.value),children:[(0,n.jsx)("option",{}),f.map(e=>(0,n.jsx)("option",{value:e,children:e},e))]})]}),(0,n.jsxs)("label",{htmlFor:"theme",children:["Theme",(0,n.jsxs)("select",{value:j,onChange:e=>v(e.target.value),onBlur:e=>v(e.target.value),children:[(0,n.jsx)("option",{value:"peru",children:"Peru"}),(0,n.jsx)("option",{value:"darkblue",children:"Dark Blue"}),(0,n.jsx)("option",{value:"chartreuse",children:"Chartreuse"}),(0,n.jsx)("option",{value:"mediumorchid",children:"Medium Orchid"})]})]}),(0,n.jsx)("button",{style:{backgroundColor:j},children:"Submit"})]}),(0,n.jsx)(t.default,{pets:p})]})}
},{"./Results":"r5l1","./ThemeContext":"2tnM","./useBreedList":"/HkA"}],"Ztkr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("react")),t=require("react/jsx-runtime");function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(a,i,s):a[i]=e[i]}return a.default=e,t&&t.set(e,a),a}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class i extends e.Component{constructor(...e){super(...e),n(this,"state",{active:0}),n(this,"handleIndexClick",e=>{this.setState({active:+e.target.dataset.index})})}render(){const{active:e}=this.state,{images:r}=this.props;return(0,t.jsxs)("div",{className:"carousel",children:[(0,t.jsx)("img",{src:r[e],alt:"animal"}),(0,t.jsx)("div",{className:"carousel-smaller",children:r.map((r,a)=>(0,t.jsx)("img",{src:r,"data-index":a,onClick:this.handleIndexClick,className:a===e?"active":"",alt:"animal thumbnail"},r))})]})}}exports.default=i,n(i,"defaultProps",{images:["http://pets-images.dev-apis.com/pets/none.jpg"]});
},{}],"mD05":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("react"),r=require("react-router-dom"),t=require("react/jsx-runtime");function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}class o extends e.Component{constructor(...e){super(...e),s(this,"state",{hasError:!1,redirect:!1})}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,r){console.error("ErrorBoundary caught an error",e,r),setTimeout(()=>this.setState({redirect:!0}),5e3)}componentDidUpdate(){this.state.hasError&&setTimeout(()=>this.setState({redirect:!0}),5e3)}render(){return this.state.redirect?(0,t.jsx)(r.Redirect,{to:"/"}):this.state.hasError?(0,t.jsxs)("h2",{children:["There was an error with this listing. ",(0,t.jsx)(r.Link,{to:"/",children:"Click here"})," ","to back to the home page or wait five seconds."]}):this.props.children}}var i=o;exports.default=i;
},{}],"KnKP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=u(require("react")),r=require("react-dom"),t=require("react/jsx-runtime");function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function u(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=n();if(r&&r.has(e))return r.get(e);var t={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var c=u?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(t,o,c):t[o]=e[o]}return t.default=e,r&&r.set(e,t),t}let o;const c=({children:n})=>{o=o||document.getElementById("modal");const u=(0,e.useRef)(null);return u.current||(u.current=document.createElement("div")),(0,e.useEffect)(()=>(o.appendChild(u.current),()=>o.removeChild(u.current)),[]),(0,r.createPortal)((0,t.jsx)("div",{children:n}),u.current)};var i=c;exports.default=i;
},{}],"C/Dc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=j;var e=l(require("react")),t=require("react-router-dom"),r=a(require("./Carousel")),n=a(require("./ErrorBoundary")),o=a(require("./ThemeContext")),i=a(require("./Modal")),s=require("react/jsx-runtime");function a(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function l(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){p(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class h extends e.Component{constructor(...e){super(...e),p(this,"state",{loading:!0,showModal:!1}),p(this,"toggleModal",()=>this.setState({showModal:!this.state.showModal})),p(this,"adopt",()=>window.location="http://bit.ly/pet-adopt")}async componentDidMount(){const e=await fetch(`http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`),t=await e.json();this.setState(Object.assign({loading:!1},t.pets[0]))}render(){if(this.state.loading)return(0,s.jsx)("h2",{children:"loading … "});const{animal:e,breed:t,city:n,state:a,description:c,name:l,images:u,showModal:d}=this.state;return(0,s.jsxs)("div",{className:"details",children:[(0,s.jsx)(r.default,{images:u}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:l}),(0,s.jsx)("h2",{children:`${e} — ${t} — ${n}, ${a}`}),(0,s.jsx)(o.default.Consumer,{children:([e])=>(0,s.jsxs)("button",{onClick:this.toggleModal,style:{backgroundColor:e},children:["Adopt ",l]})}),(0,s.jsx)("p",{children:c}),d?(0,s.jsx)(i.default,{children:(0,s.jsxs)("div",{children:[(0,s.jsxs)("h1",{children:["Would you like to adopt ",l,"?"]}),(0,s.jsxs)("div",{className:"buttons",children:[(0,s.jsx)("button",{onClick:this.adopt,children:"Yes"}),(0,s.jsx)("button",{onClick:this.toggleModal,children:"No"})]})]})}):null]})]})}}const f=(0,t.withRouter)(h);function j(e){return(0,s.jsx)(n.default,{children:(0,s.jsx)(f,d({},e))})}
},{"./Carousel":"Ztkr","./ErrorBoundary":"mD05","./ThemeContext":"2tnM","./Modal":"KnKP"}],"eBcb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("react"),r=require("react-router-dom"),t=u(require("./ThemeContext")),d=u(require("./SearchParams")),i=u(require("./Details")),s=require("react/jsx-runtime");function u(e){return e&&e.__esModule?e:{default:e}}const a=()=>{const u=(0,e.useState)("darkblue");return(0,s.jsx)(e.StrictMode,{children:(0,s.jsx)(t.default.Provider,{value:u,children:(0,s.jsxs)("div",{children:[(0,s.jsx)("header",{children:(0,s.jsx)(r.Link,{to:"/",children:(0,s.jsx)("h1",{children:"Adopt Me!"})})}),(0,s.jsxs)(r.Switch,{children:[(0,s.jsx)(r.Route,{path:"/details/:id",children:(0,s.jsx)(i.default,{})}),(0,s.jsx)(r.Route,{path:"/",exact:!0,children:(0,s.jsx)(d.default,{})})]})]})})})};var l=a;exports.default=l;
},{"./ThemeContext":"2tnM","./SearchParams":"n0tu","./Details":"C/Dc"}],"Focm":[function(require,module,exports) {
"use strict";var e=u(require("express")),t=require("react-dom/server"),r=require("react-router-dom"),s=u(require("fs")),i=u(require("../src/App")),n=require("react/jsx-runtime");function u(e){return e&&e.__esModule?e:{default:e}}const d=process.env.PORT||3e3,o=s.default.readFileSync("dist/index.html").toString(),l=o.split("not rendered"),a=(0,e.default)();a.use("/dist",e.default.static("dist")),a.use((e,s)=>{s.write(l[0]);const u={},d=(0,n.jsx)(r.StaticRouter,{url:e.url,context:u,children:(0,n.jsx)(i.default,{})}),o=(0,t.renderToNodeStream)(d);o.pipe(s,{end:!1}),o.on("end",()=>{s.status(u.statusCode||200),s.write(l[1]),s.end()})}),console.log(`listening on http://localhost:${d}`),a.listen(d);
},{"../src/App":"eBcb"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map