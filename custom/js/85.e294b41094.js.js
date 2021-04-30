(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{"../../node_modules/copy-to-clipboard/index.js":function(e,t,o){"use strict";var r=o("../../node_modules/toggle-selection/index.js"),n={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function copy(e,t){var o,a,i,c,s,l,p=!1;t||(t={}),o=t.debug||!1;try{if(i=r(),c=document.createRange(),s=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),void 0===r.clipboardData){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=n[t.format]||n.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(l),c.selectNodeContents(l),s.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");p=!0}catch(r){o&&console.error("unable to copy using execCommand: ",r),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(r){o&&console.error("unable to copy using clipboardData: ",r),o&&console.error("falling back to prompt"),a=function format(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(c):s.removeAllRanges()),l&&document.body.removeChild(l),i()}return p}},"../../node_modules/react-copy-to-clipboard/lib/Component.js":function(e,t,o){"use strict";function _typeof2(e){return(_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof2(e){return typeof e}:function _typeof2(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=_interopRequireDefault(o("../../node_modules/react/index.js")),n=_interopRequireDefault(o("../../node_modules/copy-to-clipboard/index.js"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function _typeof(e){return _typeof2(e)}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e)})(e)}function ownKeys(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,n=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var a=function(e){function CopyToClipboard(){var e,t;_classCallCheck(this,CopyToClipboard);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return _defineProperty(_assertThisInitialized(t=_possibleConstructorReturn(this,(e=_getPrototypeOf(CopyToClipboard)).call.apply(e,[this].concat(a)))),"onClick",(function(e){var o=t.props,a=o.text,i=o.onCopy,c=o.children,s=o.options,l=r.default.Children.only(c),p=(0,n.default)(a,s);i&&i(a,p),l&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(e)})),t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(CopyToClipboard,e),function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}(CopyToClipboard,[{key:"render",value:function render(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),o=_objectWithoutProperties(e,["text","onCopy","options","children"]),n=r.default.Children.only(t);return r.default.cloneElement(n,function _objectSpread(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(o,!0).forEach((function(t){_defineProperty(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):ownKeys(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},o,{onClick:this.onClick}))}}]),CopyToClipboard}(r.default.PureComponent);t.CopyToClipboard=a,_defineProperty(a,"defaultProps",{onCopy:void 0,options:void 0})},"../../node_modules/react-copy-to-clipboard/lib/index.js":function(e,t,o){"use strict";var r=o("../../node_modules/react-copy-to-clipboard/lib/Component.js").CopyToClipboard;r.CopyToClipboard=r,e.exports=r},"../../node_modules/toggle-selection/index.js":function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],r=0;r<e.rangeCount;r++)o.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||o.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},"./src/modals/Onboarding/AirdropSuccess/index.js":function(e,t,o){"use strict";o.r(t);var r=o("./src/data/index.ts"),n=o("../../node_modules/redux/es/redux.js"),a=o("../blockchain-info-components/src/index.js"),i=o("../../node_modules/react-redux/es/index.js"),c=o("../../node_modules/react-intl/lib/index.es.js"),s=o("../../node_modules/react-copy-to-clipboard/lib/index.js"),l=o.n(s),p=o("./src/providers/ModalEnhancer/index.tsx"),u=o("../../node_modules/react/index.js"),d=o.n(u),f=o("../../node_modules/styled-components/dist/styled-components.browser.esm.js");function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function _templateObject7(){var e=_taggedTemplateLiteral(["\n  margin-right: 12px;\n"]);return _templateObject7=function _templateObject7(){return e},e}function _templateObject6(){var e=_taggedTemplateLiteral(["\n  height: 48px;\n  font-weight: 400;\n  min-width: auto;\n  padding: 14px;\n"]);return _templateObject6=function _templateObject6(){return e},e}function _templateObject5(){var e=_taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: auto;\n  padding: 0 24px 32px 24px;\n  box-sizing: border-box;\n"]);return _templateObject5=function _templateObject5(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral(["\n  margin-top: 16px;\n"]);return _templateObject4=function _templateObject4(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral(["\n  border-radius: 8px 8px 0 0;\n"]);return _templateObject3=function _templateObject3(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 24px;\n  box-sizing: border-box;\n  text-align: center;\n"]);return _templateObject2=function _templateObject2(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral(["\n  position: absolute;\n  border: 0;\n  > span {\n    color: ",";\n  }\n"]);return _templateObject=function _templateObject(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var y=Object(f.d)(a.y)(_templateObject(),(function(e){return e.theme.grey000})),b=f.d.div(_templateObject2()),m=Object(f.d)(a.t)(_templateObject3()),_=Object(f.d)(a.P)(_templateObject4()),h=f.d.div(_templateObject5()),O=Object(f.d)(a.e)(_templateObject6()),g=Object(f.d)(a.q).attrs({color:"white"})(_templateObject7()),j=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(AirdropSuccess,e);var t=function _createSuper(e){return function(){var t,o=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var r=_getPrototypeOf(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return _possibleConstructorReturn(this,t)}}(AirdropSuccess);function AirdropSuccess(){var e;_classCallCheck(this,AirdropSuccess);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return _defineProperty(_assertThisInitialized(e=t.call.apply(t,[this].concat(r))),"state",{isLinkCopied:!1}),_defineProperty(_assertThisInitialized(e),"handleCopy",(function(){e.setState({isLinkCopied:!0}),setTimeout((function(){e.setState({isLinkCopied:!1})}),3e3)})),_defineProperty(_assertThisInitialized(e),"hideCopied",(function(){e.setState({isLinkCopied:!1})})),e}return function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}(AirdropSuccess,[{key:"render",value:function render(){var e=this.state.isLinkCopied,t=this.props,o=t.close,r=t.position,n=t.total,i="https://www.blockchain.com/getcrypto",s="https://twitter.com/intent/tweet?text="+"I just enrolled in @blockchain's Airdrop Program so that I'm ready for their next %23crypto airdrop. Click below to learn more 👇 ".concat(i),p="https://www.facebook.com/sharer/sharer.php?u=".concat(i);return d.a.createElement(a.v,{size:"small",position:r,total:n,dataE2e:"infoModalAirdropSuccess"},d.a.createElement(y,{onClose:o}),d.a.createElement(m,{width:"100%",name:"airdrop-enrolled"}),d.a.createElement(b,null,d.a.createElement(a.P,{size:"24px",weight:400},d.a.createElement(c.b,{id:"modals.airdropsuccess.airdropprogram",defaultMessage:"Enrolled in Airdrop Program!"})),d.a.createElement(_,{weight:400},d.a.createElement(c.b,{id:"modals.airdropsuccess.sharethewealth",defaultMessage:"Share the wealth with friends and family. Literally."}))),d.a.createElement(h,null,d.a.createElement(a.u,{href:s,rel:"noopener noreferrer",target:"_blank"},d.a.createElement(O,{nature:"primary",size:"16px"},d.a.createElement(g,{name:"twitter",size:"18px"}),d.a.createElement(c.b,{defaultMessage:"Tweet",id:"modals.airdropsuccess.tweet"}))),d.a.createElement(a.u,{href:p,rel:"noopener noreferrer",target:"_blank"},d.a.createElement(O,{nature:"secondary",size:"16px"},d.a.createElement(g,{name:"facebook",size:"18px"}),d.a.createElement(c.b,{defaultMessage:"Share",id:"modals.airdropsuccess.share"}))),d.a.createElement(l.a,{text:i,onCopy:this.handleCopy},e?d.a.createElement(a.V,{id:"copied"},d.a.createElement(O,{nature:"purple",size:"16px",onMouseLeave:this.hideCopied},d.a.createElement(g,{name:"copy",size:"12px"}),d.a.createElement(c.b,{defaultMessage:"Copy",id:"modals.airdropsuccess.copy"}))):d.a.createElement(O,{nature:"purple",size:"16px"},d.a.createElement(g,{name:"copy",size:"12px"}),d.a.createElement(c.b,{defaultMessage:"Copy",id:"modals.airdropsuccess.copy"})))))}}]),AirdropSuccess}(d.a.PureComponent),C=Object(n.d)(Object(p.a)("AirdropSuccess"),Object(i.c)(null,(function mapDispatchToProps(e){return{actions:Object(n.b)(r.b.components.onboarding,e)}})));t.default=C(j)},"./src/providers/ModalEnhancer/index.tsx":function(e,t,o){"use strict";var r=o("./src/data/index.ts"),n=o("../../node_modules/redux/es/redux.js"),a=o("../../node_modules/react-redux/es/index.js"),i=o("../../node_modules/ramda/es/equals.js"),c=o("../../node_modules/react/index.js"),s=o.n(c),l=o("../../node_modules/react-dom/index.js"),p=o.n(l),__rest=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]])}return o};const u=Object(a.c)(e=>({modals:r.f.modals.getModals(e)}),e=>({close:Object(n.d)(e,r.b.modals.closeModal),closeAll:Object(n.d)(e,r.b.modals.closeAllModals),update:Object(n.d)(e,r.b.modals.updateModalOptions)}));t.a=(e,t={})=>o=>u(class extends c.PureComponent{constructor(){super(...arguments),this.state={},this.handleClose=()=>{t.transition?(this.setState({userClickedOutside:!0}),setTimeout(()=>{this.props.close(),this.setState({userClickedOutside:!1})},t.transition)):this.props.close()},this.handleClick=e=>{const t=p.a.findDOMNode(this.node);t&&!this.props.disableOutsideClose&&Object(i.a)(t.children[0],e.target)&&this.handleClose()},this.onKeyPressed=e=>{27!==(e||window.event).keyCode||t.preventEscapeClose||this.handleClose()}}render(){const t=this.props,{modals:r}=t,n=__rest(t,["modals"]),a=r.filter(t=>t.type===e),setRef=e=>{e&&(this.node=e,e.focus())};return a.length?s.a.createElement("div",null,a.map((t,a)=>s.a.createElement("div",{key:`${e}:${a}`,onKeyDown:this.onKeyPressed,onMouseDown:this.handleClick,ref:setRef,tabIndex:0},s.a.createElement(o,Object.assign({ref:this.node,position:r.indexOf(t)+1,total:r.length},this.state,t.options,t.props,n))))):null}})}}]);