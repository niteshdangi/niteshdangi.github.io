(this.webpackJsonpnitesh=this.webpackJsonpnitesh||[]).push([[3],{88:function(e,t,n){"use strict";function i(e){try{return f.insertRule(e,f.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function o(){d||(t.globalHide=d=!0,window.removeEventListener("scroll",o,!0),i("."+s+" { opacity: 0; }"),window.removeEventListener("orientationchange",o,!0),window.document.removeEventListener("visibilitychange",o))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=i,t.cascade=function(e,t,n,i,o){var s=Math.log(i),r=(Math.log(o)-s)/(n-t);return Math.exp(s+r*(e-t))},t.animation=function(e){if(!f)return"";var t="@keyframes "+(v+h)+"{"+e+"}",n=p[e];return n?""+v+n:(f.insertRule(t,f.cssRules.length),p[e]=h,""+v+h++)},t.hideAll=o,t.default=function(e){var n=e.ssrFadeout;t.fadeOutEnabled=n};var s=t.namespace="react-reveal",r=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),a=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},c=t.disableSsr=function(){return t.ssr=r=!1},d=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),u=(t.ie10=!1,t.collapseend=void 0),h=1,p={},f=!1,v=s+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=a="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=r=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),r&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=r=!1),r&&window.setTimeout(c,1500),a||(t.collapseend=u=document.createEvent("Event"),u.initEvent("collapseend",!0,!0));var m=document.createElement("style");document.head.appendChild(m),m.sheet&&m.sheet.cssRules&&m.sheet.insertRule&&(f=m.sheet,window.addEventListener("scroll",o,!0),window.addEventListener("orientationchange",o,!0),window.document.addEventListener("visibilitychange",o))}},89:function(e,t,n){"use strict";function i(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}function o(e,t){var n=t.left,i=t.right,o=t.up,s=t.down,r=t.top,a=t.bottom,l=t.mirror,c=t.opposite,u=(n?1:0)|(i?2:0)|(r||s?4:0)|(a||o?8:0)|(l?16:0)|(c?32:0)|(e?64:0);if(h.hasOwnProperty(u))return h[u];if(!l!=!(e&&c)){var p=[i,n,a,r,s,o];n=p[0],i=p[1],r=p[2],a=p[3],o=p[4],s=p[5]}var f=n||i,v=r||a||o||s,m=void 0;return f||v?e?m="40% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d("+(f?(n?"":"-")+"42px":"0")+", "+(v?(s||r?"-":"")+"60px":"0")+", 0);\n        }\n        to {\n          opacity: 0;\n          transform: scale(.1) translate3d("+(f?(i?"":"-")+"2000px":"0")+", "+(v?(o||a?"":"-")+"2000px":"0")+", 0);\n          transform-origin: "+(v?"center bottom":(n?"left":"right")+" center")+";\n        }":m="from {\n          opacity: 0;\n          transform: scale3d(.1, .1, .1) translate3d("+(f?(n?"-":"")+"1000px":"0")+", "+(v?(s||r?"-":"")+"1000px":"0")+", 0);\n          animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n        }\n        60% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d("+(f?(i?"-":"")+"10px":"0")+", "+(v?(o||a?"-":"")+"60px":"0")+", 0);\n          animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n        }":m=(e?"to":"from")+" {opacity: 0; transform: scale3d(.1, .1, .1);} "+(e?"from":"to")+" { opacity: 1; transform: none;}",h[u]=(0,d.animation)(m),h[u]}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.defaults,t=e.children,n=(e.out,e.forever),s=e.timeout,r=e.duration,a=void 0===r?d.defaults.duration:r,l=e.delay,u=void 0===l?d.defaults.delay:l,h=e.count,p=void 0===h?d.defaults.count:h,f=i(e,["children","out","forever","timeout","duration","delay","count"]),v={make:o,duration:void 0===s?a:s,delay:u,forever:n,count:p,style:{animationFillMode:"both"},reverse:f.left};return(0,c.default)(f,v,v,t)}Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(7),l=n(90),c=(r=l)&&r.__esModule?r:{default:r},d=n(88),u={out:a.bool,left:a.bool,right:a.bool,top:a.bool,bottom:a.bool,mirror:a.bool,opposite:a.bool,duration:a.number,timeout:a.number,delay:a.number,count:a.number,forever:a.bool},h={};s.propTypes=u,t.default=s,e.exports=t.default},90:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=function(e,t,n,i){return"in"in e&&(e.when=e.in),s.default.Children.count(i)<2?s.default.createElement(r.default,o({},e,{inEffect:t,outEffect:n,children:i})):(i=s.default.Children.map(i,(function(i){return s.default.createElement(r.default,o({},e,{inEffect:t,outEffect:n,children:i}))})),"Fragment"in s.default?s.default.createElement(s.default.Fragment,null,i):s.default.createElement("span",null,i))};var s=i(n(0)),r=i(n(92));e.exports=t.default},91:function(e,t,n){"use strict";function i(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}function o(e,t){var n=t.distance,i=t.left,o=t.right,s=t.up,r=t.down,a=t.top,c=t.bottom,d=t.big,u=t.mirror,p=t.opposite,f=(n?n.toString():0)+((i?1:0)|(o?2:0)|(a||r?4:0)|(c||s?8:0)|(u?16:0)|(p?32:0)|(e?64:0)|(d?128:0));if(h.hasOwnProperty(f))return h[f];var v=i||o||s||r||a||c,m=void 0,b=void 0;if(v){if(!u!=!(e&&p)){var y=[o,i,c,a,r,s];i=y[0],o=y[1],a=y[2],c=y[3],s=y[4],r=y[5]}var g=n||(d?"2000px":"100%");m=i?"-"+g:o?g:"0",b=r||a?"-"+g:s||c?g:"0"}return h[f]=(0,l.animation)((e?"to":"from")+" {opacity: 0;"+(v?" transform: translate3d("+m+", "+b+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),h[f]}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.children,s=(e.out,e.forever),r=e.timeout,a=e.duration,c=void 0===a?l.defaults.duration:a,u=e.delay,h=void 0===u?l.defaults.delay:u,p=e.count,f=void 0===p?l.defaults.count:p,v=i(e,["children","out","forever","timeout","duration","delay","count"]),m={make:o,duration:void 0===r?c:r,delay:h,forever:s,count:f,style:{animationFillMode:"both"},reverse:v.left};return t?(0,d.default)(v,m,m,n):m}Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(7),l=n(88),c=n(90),d=(r=c)&&r.__esModule?r:{default:r},u={out:a.bool,left:a.bool,right:a.bool,top:a.bool,bottom:a.bool,big:a.bool,mirror:a.bool,opposite:a.bool,duration:a.number,timeout:a.number,distance:a.string,delay:a.number,count:a.number,forever:a.bool},h={};s.propTypes=u,t.default=s,e.exports=t.default},92:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,o=!1,s=void 0;try{for(var r,a=e[Symbol.iterator]();!(i=(r=a.next()).done)&&(n.push(r.value),!t||n.length!==t);i=!0);}catch(e){o=!0,s=e}finally{try{!i&&a.return&&a.return()}finally{if(o)throw s}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n(0),c=(i=l)&&i.__esModule?i:{default:i},d=n(7),u=n(88),h=(0,d.shape)({make:d.func,duration:d.number.isRequired,delay:d.number.isRequired,forever:d.bool,count:d.number.isRequired,style:d.object.isRequired,reverse:d.bool}),p={collapse:d.bool,collapseEl:d.element,cascade:d.bool,wait:d.number,force:d.bool,disabled:d.bool,appear:d.bool,enter:d.bool,exit:d.bool,fraction:d.number,refProp:d.string,innerRef:d.func,onReveal:d.func,unmountOnExit:d.bool,mountOnEnter:d.bool,inEffect:h.isRequired,outEffect:(0,d.oneOfType)([h,(0,d.oneOf)([!1])]).isRequired,ssrReveal:d.bool,collapseOnly:d.bool,ssrFadeout:d.bool},f={transitionGroup:d.object},v=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return i.isOn=void 0===e.when||!!e.when,i.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:i.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},i.savedChild=!1,i.isShown=!1,u.observerMode?i.handleObserve=i.handleObserve.bind(i):(i.revealHandler=i.makeHandler(i.reveal),i.resizeHandler=i.makeHandler(i.resize)),i.saveRef=i.saveRef.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?r({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!u.observerMode&&this.props.collapse&&window.document.dispatchEvent(u.collapseend)))}},{key:"animationEnd",value:function(e,t,n){var i=this,o=n.forever,s=n.count,r=n.delay,a=n.duration;if(!o){this.animationEndTimeout=window.setTimeout((function(){i&&i.el&&(i.animationEndTimeout=void 0,e.call(i))}),r+(a+(t?a:0)*s))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,n){var i=n.duration+(t.cascade?n.duration:0),o=this.isOn?this.getDimensionValue():0,s=void 0,r=void 0;if(t.collapseOnly)s=n.duration/3,r=n.delay;else{var a=i>>2,l=a>>1;s=a,r=n.delay+(this.isOn?0:i-a-l),e.style.animationDuration=i-a+(this.isOn?l:-l)+"ms",e.style.animationDelay=n.delay+(this.isOn?a-l:0)+"ms"}return e.collapse={height:o,transition:"height "+s+"ms ease "+r+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,n=e[t?"outEffect":"inEffect"],i="style"in n&&n.style.animationName||void 0,o=void 0;e.collapseOnly?o={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&n.make&&(i=n.make),o={hasAppeared:!0,hasExited:!1,collapse:void 0,style:r({},n.style,{animationDuration:n.duration+"ms",animationDelay:n.delay+"ms",animationIterationCount:n.forever?"infinite":n.count,opacity:1,animationName:i}),className:n.className}),this.setState(e.collapse?this.collapse(o,e,n):o),t?(this.savedChild=c.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,n)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),u.ssr&&(0,u.disableSsr)()}},{key:"handleObserve",value:function(e,t){s(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&u.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];u.globalHide||(0,u.hideAll)(),this&&this.el&&(e||(e=this.props),u.ssr&&(0,u.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):n||this.inViewport(e)||e.force?this.animate(e):u.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var n=this.context.transitionGroup,i=n&&!n.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!i||u.ssr&&!u.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):u.ssr&&(u.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,n=void 0;n="string"==typeof e?e.split("").map((function(e,t){return c.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):c.default.Children.toArray(e);var i=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],s=i.duration,a=i.reverse,l=n.length,d=2*s;this.props.collapse&&(d=parseInt(this.state.style.animationDuration,10),s=d/2);var h=a?l:0;return n.map((function(e){return"object"===(void 0===e?"undefined":o(e))&&e?c.default.cloneElement(e,{style:r({},e.props.style,t.state.style,{animationDuration:Math.round((0,u.cascade)(a?h--:h++,0,l,s,d))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===o(this.props.children)){var e=c.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:c.default.createElement("div",null,e)}return c.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var n=!1,i=t.props,o=i.style,s=i.className,a=i.children,l=this.props.disabled?s:(this.props.outEffect?u.namespace:"")+(this.state.className?" "+this.state.className:"")+(s?" "+s:"")||void 0,d=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&a&&this.state.style.animationName?(n=this.cascade(a),d=r({},o,{opacity:1})):d=this.props.disabled?o:r({},o,this.state.style);var h=r({},this.props.props,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({className:l,style:d},this.props.refProp,this.saveRef)),p=c.default.cloneElement(t,h,e?n||a:void 0);return void 0!==this.props.collapse?this.props.collapseEl?c.default.cloneElement(this.props.collapseEl,{style:r({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:p}):c.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:p}):p}},{key:"makeHandler",value:function(e){var t=this,n=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,u.raf)(n),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var n=this.el.offsetHeight,i=window.pageYOffset-t.getTop(this.el),o=Math.min(n,window.innerHeight)*(u.globalHide?e.fraction:0);return i>o-window.innerHeight&&i<n-o}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){u.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!u.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(c.default.Component);v.propTypes=p,v.defaultProps={fraction:.2,refProp:"ref"},v.contextTypes=f,v.displayName="RevealBase",t.default=v,e.exports=t.default},94:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return z}));var i=n(9),o=n(10),s=n(12),r=n(11),a=n(23),l=n(1),c=n(0),d=n.n(c),u=n(24),h=n(25),p=n(27),f=n.p+"static/media/home.2b5f05af.png",v=n(89),m=n.n(v),b=n(91),y=n.n(b);function g(){var e=Object(a.a)(["\n  border: 1px solid #555;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  position: relative;\n  left: 50%;\n  transform: translateX(-50%);\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n"]);return g=function(){return e},e}function j(){var e=Object(a.a)(["\n  background: #111;\n"]);return j=function(){return e},e}var O=u.a.div(j()),w=u.a.div(g()),x=function(e){var t=e.url,n=e.onMouseMove,i=e.onMouseOut,o=e.title,s=e.width,r=void 0===s?50:s;return Object(l.jsx)("div",{className:"col",children:Object(l.jsx)(y.a,{bottom:!0,children:Object(l.jsx)("div",{children:Object(l.jsx)(w,{title:o,onMouseMove:n,onMouseOut:i,className:"skill",children:Object(l.jsx)("img",{src:t,alt:"",width:r})})})})})},M=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){}},{key:"onMouseOut",value:function(e){e.preventDefault(),e.target.style.transform="translate(-50%,0)"}},{key:"onMouseMove",value:function(e){e.preventDefault(),e.target.style.transform="translate(calc(-50% + ".concat(2*e.movementX,"px),").concat(2*e.movementY,"px) scale(1.05)")}},{key:"render",value:function(){return Object(l.jsx)(O,{children:Object(l.jsxs)("div",{className:"header__content",children:[Object(l.jsx)(m.a,{children:Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"header__content_line"})})}),Object(l.jsx)(y.a,{bottom:!0,children:Object(l.jsx)("div",{className:"h2 h2-light",children:"GET TO KNOW ME!"})}),Object(l.jsx)(y.a,{bottom:!0,children:Object(l.jsx)("div",{style:{marginTop:50},children:Object(l.jsx)("div",{className:"about_para small-caps-2 mt-1",style:{maxWidth:700,left:"50%",position:"relative",transform:"translateX(-50%)"},children:"I am a 3rd year student pursuing Bachelor's of Technology in Computer Science. I am an avid learner and always curious to learn about new technologies."})})}),Object(l.jsxs)("div",{className:"container",style:{marginTop:70},children:[Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)(x,{onMouseMove:this.onMouseMove,onMouseOut:this.onMouseOut,title:"Html5",url:"https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-2.png"}),Object(l.jsx)(x,{onMouseMove:this.onMouseMove,onMouseOut:this.onMouseOut,title:"CSS3",url:"https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png"}),Object(l.jsx)(x,{onMouseMove:this.onMouseMove,onMouseOut:this.onMouseOut,width:70,title:"Javascript",url:"https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"}),Object(l.jsx)(x,{onMouseMove:this.onMouseMove,onMouseOut:this.onMouseOut,title:"PHP",url:"https://www.php.net/images/logos/new-php-logo.png"})]}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)(x,{onMouseMove:this.onMouseMove,onMouseOut:this.onMouseOut,width:90,title:"Django",url:"https://cdn.freebiesupply.com/logos/thumbs/2x/django-community-logo.png"}),Object(l.jsx)(x,{onMouseMove:this.onMouseMove,onMouseOut:this.onMouseOut,title:"Python",url:"https://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png"}),Object(l.jsx)(x,{onMouseMove:this.onMouseMove,onMouseOut:this.onMouseOut,width:70,title:"React",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"}),Object(l.jsx)(x,{onMouseMove:this.onMouseMove,onMouseOut:this.onMouseOut,title:"Java",url:"https://assets.stickpng.com/images/58480979cef1014c0b5e4901.png"})]}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)(x,{onMouseMove:this.onMouseMove,onMouseOut:this.onMouseOut,title:"Android Studio",url:"https://2.bp.blogspot.com/-tzm1twY_ENM/XlCRuI0ZkRI/AAAAAAAAOso/BmNOUANXWxwc5vwslNw3WpjrDlgs9PuwQCLcBGAsYHQ/s1600/pasted%2Bimage%2B0.png"}),Object(l.jsx)(x,{onMouseMove:this.onMouseMove,onMouseOut:this.onMouseOut,title:"Excel",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Microsoft_Excel_2013_logo.svg/1043px-Microsoft_Excel_2013_logo.svg.png"}),Object(l.jsx)(x,{onMouseMove:this.onMouseMove,onMouseOut:this.onMouseOut,title:"CodeIgnitor",url:"https://assets.stickpng.com/images/5847eb8bcef1014c0b5e4851.png"}),Object(l.jsx)(x,{onMouseMove:this.onMouseMove,onMouseOut:this.onMouseOut,title:"Expo",url:"https://www.jonathanhelvey.com/static/expo-a60a7cc250f47bbd0ee473b576c6c476.png"})]})]})]})})}}]),n}(d.a.PureComponent),E=n.p+"static/media/shophub.d082695e.png",k=n.p+"static/media/morvii.eeac1338.png";function _(){var e=Object(a.a)(["\n  background: #111;\n"]);return _=function(){return e},e}var N=u.a.div(_()),R=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){}},{key:"onMouseOut",value:function(e){e.preventDefault(),e.target.style.transform="translate(-50%,0)"}},{key:"onMouseMove",value:function(e){e.preventDefault(),e.target.style.transform="translate(calc(-50% + ".concat(2*e.movementX,"px),").concat(2*e.movementY,"px) scale(1.05)")}},{key:"render",value:function(){return Object(l.jsx)(N,{children:Object(l.jsxs)("div",{className:"header__content",children:[Object(l.jsx)(m.a,{children:Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"header__content_line"})})}),Object(l.jsx)(y.a,{bottom:!0,children:Object(l.jsx)("div",{className:"h2 h2-light",children:"Projects"})}),Object(l.jsx)(T,{title:"Morvii",img:k,body:"A fully functional android application like instagram",languages:"React, Django, Node.js",buttons:Object(l.jsxs)("span",{children:[Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://morwii.github.io",class:"btn btn-primary",children:"View Features"}),Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",style:{marginLeft:10},href:"https://github.com/niteshdangi/morvii",class:"btn btn-primary",children:"GitHub"})]})}),Object(l.jsx)(T,{title:"ShopHub",img:E,body:"A web application for ecommerce with offline access. Currently only frontend is working with few pages",languages:"React",buttons:Object(l.jsxs)("span",{children:[Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://niteshdangi.github.io/shophub",class:"btn btn-primary",children:"Visit Website"}),Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",style:{marginLeft:10},href:"https://github.com/niteshdangi/shophub",class:"btn btn-primary",children:"GitHub"})]})})]})})}}]),n}(d.a.PureComponent),T=function(e){var t=e.img,n=e.title,i=e.body,o=e.languages,s=e.buttons;return Object(l.jsx)(y.a,{bottom:!0,children:Object(l.jsx)("div",{style:{marginTop:50},children:Object(l.jsx)("div",{className:"card mb-3",style:{left:"50%",transform:"translateX(-50%)",textAlign:"left"},children:Object(l.jsxs)("div",{className:"row no-gutters",children:[Object(l.jsx)("div",{style:{justifyContent:"center",alignItems:"center",display:"flex"},className:"col-md-4",children:Object(l.jsx)("img",{src:t,className:"card-img",alt:n})}),Object(l.jsx)("div",{className:"col-md-8",children:Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h5",{className:"card-title",children:n}),Object(l.jsx)("p",{className:"card-text",children:i}),Object(l.jsx)("p",{className:"card-text",children:Object(l.jsx)("small",{className:"text-muted",children:o})}),Object(l.jsx)("p",{children:s})]})})]})})})})};function S(){var e=Object(a.a)(["\n  position: relative;\n  display: inline-block;\n  letter-spacing: 1px;\n  line-height: 1.3;\n  text-transform: uppercase;\n  font-weight: bold;\n  text-align: center;\n  transition: all 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  cursor: pointer;\n  outline: none;\n  box-shadow: none;\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 64px;\n"]);return S=function(){return e},e}function P(){var e=Object(a.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: auto;\n  transform: translate(-50%, -50%);\n"]);return P=function(){return e},e}function C(){var e=Object(a.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(\n    0,\n    rgba(17, 17, 17, 1),\n    rgba(17, 17, 17, 0.7),\n    rgba(17, 17, 17, 0.5)\n  );\n"]);return C=function(){return e},e}function H(){var e=Object(a.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n"]);return H=function(){return e},e}var A=u.a.div(H(),f),L=u.a.div(C()),I=u.a.div(P()),D=u.a.a(S()),z=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){setTimeout((function(){var e,t,n,i;null===(e=document.querySelector(".preloader"))||void 0===e||null===(t=e.classList)||void 0===t||t.add("hide__preloader"),null===(n=document.querySelector(".content"))||void 0===n||null===(i=n.classList)||void 0===i||i.add("loaded"),setTimeout((function(){var e;null===(e=document.querySelector(".preloader"))||void 0===e||e.remove()}),3010)}),500)}},{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(h.a,{}),Object(l.jsx)("div",{style:{height:"100vh"},children:Object(l.jsxs)(A,{className:"content",children:[Object(l.jsx)(L,{}),Object(l.jsx)(p.Parallax,{y:[-20,20],styleInner:{height:"100%"},styleOuter:{height:"100%"},children:Object(l.jsxs)(I,{children:[Object(l.jsx)("h1",{className:"xl xl-light",style:{margin:0},children:Object(l.jsxs)("div",{className:"split-text__line",children:[Object(l.jsx)("div",{className:"split-text__char",children:"N"}),Object(l.jsx)("div",{className:"split-text__char",children:"i"}),Object(l.jsx)("div",{className:"split-text__char",children:"t"}),Object(l.jsx)("div",{className:"split-text__char",children:"e"}),Object(l.jsx)("div",{className:"split-text__char",children:"s"}),Object(l.jsx)("div",{className:"split-text__char",children:"h"})]})}),Object(l.jsx)("div",{className:"h4 h4-light",children:Object(l.jsxs)("div",{className:"split-text__line",children:[Object(l.jsx)("div",{className:"split-text__char",children:"Creative \xa0"}),Object(l.jsx)("div",{className:"split-text__char",children:"Thinking \xa0"}),Object(l.jsx)("div",{className:"split-text__char",children:"Never \xa0"}),Object(l.jsx)("div",{className:"split-text__char",children:"Ends"}),Object(l.jsx)("div",{className:"split-text__char",children:"!"})]})}),Object(l.jsx)("div",{style:{marginTop:50},children:Object(l.jsx)(D,{"data-hover":"Download Resume",className:"button",target:"_blank",rel:"noreferrer",href:"https://niteshdangi.github.io/resume.pdf",children:Object(l.jsx)("span",{className:"button__label-hover",children:"Download Resume"})})})]})})]})}),Object(l.jsx)(M,{}),Object(l.jsx)(R,{}),Object(l.jsx)("div",{style:{height:"100vh",overflow:"hidden"},children:Object(l.jsxs)("div",{style:{height:"100%"},children:[Object(l.jsx)(L,{style:{top:"unset",background:"linear-gradient( 180deg, rgba(17,17,17,1), rgba(17,17,17,0.7), rgba(17,17,17,0.5) )"}}),Object(l.jsx)("div",{style:{background:"url(https://source.unsplash.com/1600x900/?coding,laptop-code,contactme)",backgroundPosition:"center",backgroundSize:"cover",position:"absolute",width:"100%",height:"100%",zIndex:-1}}),Object(l.jsx)(p.Parallax,{y:[-40,40],styleInner:{height:"100%"},styleOuter:{height:"100%"},children:Object(l.jsxs)(I,{style:{position:"relative"},children:[Object(l.jsx)("div",{className:"h4 h4-light",style:{fontFamily:"Raleway"},children:"Hit me up if you'd like to collaborate or discuss books with me!"}),Object(l.jsxs)("div",{className:"row",style:{maxWidth:150,position:"relative",left:"50%",transform:"translateX(-50%)"},children:[Object(l.jsx)("div",{className:"col",children:Object(l.jsx)("a",{className:"social",href:"https://github.com/niteshdangi",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{src:"https://cdn2.iconfinder.com/data/icons/social-icons-grey/512/GITHUB-512.png",width:40,alt:""})})}),Object(l.jsx)("div",{className:"col",children:Object(l.jsx)("a",{className:"social",href:"https://linkedin.com/in/niteshdangi",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{src:"https://icon-library.com/images/linkedin-icon-no-background/linkedin-icon-no-background-29.jpg",width:40,alt:""})})})]})]})})]})})]})}}]),n}(d.a.PureComponent)}}]);
//# sourceMappingURL=3.e73af855.chunk.js.map