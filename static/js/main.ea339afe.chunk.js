(this.webpackJsonpnitesh=this.webpackJsonpnitesh||[]).push([[0],{25:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(9),c=n(10),l=n(12),a=n(11),i=n(23),o=n(1),s=n(0),u=n.n(s),h=n(24),d=n(87);function j(){var e=Object(i.a)(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: #262626;\n"]);return j=function(){return e},e}var b=h.a.div(j()),f=function(e){Object(l.a)(n,e);var t=Object(a.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(o.jsxs)(b,{className:"preloader",children:[Object(o.jsxs)("div",{className:"preloader__content",children:[Object(o.jsx)("div",{className:"preloader__circle",children:Object(o.jsx)(d.a,{size:"100%",thickness:8,color:"#ffffff",secondaryColor:"#555555",speed:110})}),Object(o.jsxs)("div",{className:"preloader__header",children:[Object(o.jsx)("div",{className:"preloader__heading h2-light h2",children:"Nitesh Kumar"}),Object(o.jsx)("div",{className:"preloader__subline small-caps mt-1",children:"Creative Developer"})]}),Object(o.jsx)("div",{className:"preloader__counter h5 h5-light",children:"\xa0"})]}),Object(o.jsx)("div",{className:"preloader__curtain"})]})}}]),n}(u.a.PureComponent)},46:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),l=n.n(c),a=n(35),i=n.n(a),o=(n(46),n(47),n(40)),s=n(2),u=n(9),h=n(10),d=n(12),j=n(11),b=n(25),f=(n(49),n(27)),p=n(39),v=n.n(p),O=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).state={scrollContainer:null},e.scrollContainer=l.a.createRef(),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.setState({scrollContainer:this.scrollContainer.current.view}),this.scrollContainer.current.scrollTop(0)}},{key:"render",value:function(){var e=this;return Object(r.jsx)(v.a,{style:{height:"100vh"},className:"scroll-container",onScroll:function(t){var n;(null===(n=e.props)||void 0===n?void 0:n.onScroll)&&e.props.onScroll(t)},ref:this.scrollContainer,children:Object(r.jsx)(f.ParallaxProvider,{scrollContainer:this.state.scrollContainer,scrollAxis:this.props.scrollAxis,children:this.props.children})})}}]),n}(l.a.Component);O.defaultProps={scrollAxis:"vertical"};var x=l.a.lazy((function(){return n.e(3).then(n.bind(null,96))})),m=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).ScrollContainer_=l.a.createRef(),e.homepage_=l.a.createRef(),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.setState({scroll:this.ScrollContainer_.current.scrollContainer})}},{key:"onScroll",value:function(e){}},{key:"render",value:function(){var e;return Object(r.jsx)(O,{ref:this.ScrollContainer_,onScroll_:this.onScroll,children:Object(r.jsx)("div",{children:Object(r.jsx)(c.Suspense,{fallback:Object(r.jsx)(b.a,{}),children:Object(r.jsx)(x,{ref:this.homepage_,scroll:null===(e=this.state)||void 0===e?void 0:e.scroll})})})})}}]),n}(l.a.PureComponent);var C=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(o.a,{children:Object(r.jsx)(s.c,{children:Object(r.jsx)(s.a,{path:"/",children:Object(r.jsx)(m,{})})})})})},_=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,95)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,l=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),l(e),a(e)}))};i.a.render(Object(r.jsx)(l.a.StrictMode,{children:Object(r.jsx)(C,{})}),document.getElementById("root")),_(),n(85).install()}},[[86,1,2]]]);
//# sourceMappingURL=main.ea339afe.chunk.js.map