(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{"./src/modals/Eth/PaxWelcome/index.js":function(e,t,n){"use strict";n.r(t);var o=n("../../node_modules/redux/es/redux.js"),r=n("../../node_modules/react-redux/es/index.js"),a=n("../../node_modules/react-intl/lib/index.es.js"),s=n("../../node_modules/react/index.js"),i=n.n(s),l=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),c=n("./src/data/index.ts"),u=n("./src/providers/ModalEnhancer/index.tsx"),d=n("../blockchain-info-components/src/index.js");function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _templateObject4(){var e=_taggedTemplateLiteral(["\n  height: 25%;\n"]);return _templateObject4=function _templateObject4(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral(["\n  height: 56px;\n  margin-top: 44px;\n  font-size: 18px;\n"]);return _templateObject3=function _templateObject3(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral(["\n  text-align: center;\n  > div:nth-child(2) {\n    margin: -8px 0 8px;\n  }\n"]);return _templateObject2=function _templateObject2(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral(["\n  position: absolute;\n  border: none;\n  > span {\n    &:hover {\n      cursor: pointer;\n    }\n  }\n  z-index: 99;\n"]);return _templateObject=function _templateObject(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var p=Object(l.d)(d.y)(_templateObject()),f=l.d.div(_templateObject2()),m=Object(l.d)(d.e)(_templateObject3()),b=Object(l.d)(d.t)(_templateObject4()),y=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(PaxWelcomeContainer,e);var t=function _createSuper(e){return function(){var t,n=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var o=_getPrototypeOf(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return _possibleConstructorReturn(this,t)}}(PaxWelcomeContainer);function PaxWelcomeContainer(){var e;_classCallCheck(this,PaxWelcomeContainer);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return _defineProperty(_assertThisInitialized(e=t.call.apply(t,[this].concat(o))),"onGetPax",(function(){e.props.modalActions.closeModal(),e.props.routerActions.push("/usd-d/transactions")})),e}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(PaxWelcomeContainer,[{key:"render",value:function render(){var e=this.props,t=e.close,n=e.position,o=e.total;return i.a.createElement(d.v,{size:"small",position:n,total:o},i.a.createElement(p,{onClose:t}),i.a.createElement(d.w,null,i.a.createElement(f,null,i.a.createElement(b,{name:"coin-pax"}),i.a.createElement(d.P,{size:"20px",weight:400},i.a.createElement(a.b,{id:"modals.usddwelcome.intro",defaultMessage:"Introducing USD Digital, a safe and stable digital dollar in your wallet"})),i.a.createElement(m,{nature:"primary",fullwidth:!0,onClick:this.onGetPax},i.a.createElement(a.b,{id:"buttons.learn_more",defaultMessage:"Learn More"})))))}}]),PaxWelcomeContainer}(i.a.PureComponent),_=Object(o.d)(Object(u.a)("PaxWelcome"),Object(r.c)(null,(function mapDispatchToProps(e){return{modalActions:Object(o.b)(c.b.modals,e),routerActions:Object(o.b)(c.b.router,e)}})));t.default=_(y)},"./src/providers/ModalEnhancer/index.tsx":function(e,t,n){"use strict";var o=n("./src/data/index.ts"),r=n("../../node_modules/redux/es/redux.js"),a=n("../../node_modules/react-redux/es/index.js"),s=n("../../node_modules/ramda/es/equals.js"),i=n("../../node_modules/react/index.js"),l=n.n(i),c=n("../../node_modules/react-dom/index.js"),u=n.n(c),__rest=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const d=Object(a.c)(e=>({modals:o.f.modals.getModals(e)}),e=>({close:Object(r.d)(e,o.b.modals.closeModal),closeAll:Object(r.d)(e,o.b.modals.closeAllModals),update:Object(r.d)(e,o.b.modals.updateModalOptions)}));t.a=(e,t={})=>n=>d(class extends i.PureComponent{constructor(){super(...arguments),this.state={},this.handleClose=()=>{t.transition?(this.setState({userClickedOutside:!0}),setTimeout(()=>{this.props.close(),this.setState({userClickedOutside:!1})},t.transition)):this.props.close()},this.handleClick=e=>{const t=u.a.findDOMNode(this.node);t&&!this.props.disableOutsideClose&&Object(s.a)(t.children[0],e.target)&&this.handleClose()},this.onKeyPressed=e=>{27!==(e||window.event).keyCode||t.preventEscapeClose||this.handleClose()}}render(){const t=this.props,{modals:o}=t,r=__rest(t,["modals"]),a=o.filter(t=>t.type===e),setRef=e=>{e&&(this.node=e,e.focus())};return a.length?l.a.createElement("div",null,a.map((t,a)=>l.a.createElement("div",{key:`${e}:${a}`,onKeyDown:this.onKeyPressed,onMouseDown:this.handleClick,ref:setRef,tabIndex:0},l.a.createElement(n,Object.assign({ref:this.node,position:o.indexOf(t)+1,total:o.length},this.state,t.options,t.props,r))))):null}})}}]);