"use strict";(self.webpackChunkhyper_react=self.webpackChunkhyper_react||[]).push([[1144],{28633:function(n,e,t){t.d(e,{Z:function(){return u}});var r=t(72791);function u(){return(0,r.useState)(null)}},47904:function(n,e,t){var r=t(72791);e.Z=function(n){var e=(0,r.useRef)(n);return(0,r.useEffect)((function(){e.current=n}),[n]),e}},39007:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(72791),u=t(47904);function o(n){var e=(0,u.Z)(n);return(0,r.useCallback)((function(){return e.current&&e.current.apply(e,arguments)}),[e])}},79392:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(72791),u=t(39007);function o(n,e,t,o){void 0===o&&(o=!1);var a=(0,u.Z)(t);(0,r.useEffect)((function(){var t="function"===typeof n?n():n;return t.addEventListener(e,a,o),function(){return t.removeEventListener(e,a,o)}}),[n])}},49815:function(n,e,t){var r=t(72791),u="undefined"!==typeof t.g&&t.g.navigator&&"ReactNative"===t.g.navigator.product,o="undefined"!==typeof document;e.Z=o||u?r.useLayoutEffect:r.useEffect},55746:function(n,e,t){t.d(e,{Z:function(){return u}});var r=t(72791);function u(){var n=(0,r.useRef)(!0),e=(0,r.useRef)((function(){return n.current}));return(0,r.useEffect)((function(){return n.current=!0,function(){n.current=!1}}),[]),e.current}},52803:function(n,e,t){t.d(e,{Z:function(){return u}});var r=t(72791);function u(n){var e=(0,r.useRef)(null);return(0,r.useEffect)((function(){e.current=n})),e.current}},16445:function(n,e,t){t.d(e,{Z:function(){return d}});var r=t(29439),u=t(72791),o=(t(28633),t(47904),t(39007));t(79392);t(55746),t(52803);t(49815),new WeakMap;var a=t(15341),i=t(80184),c=["onKeyDown"];var f=u.forwardRef((function(n,e){var t,u=n.onKeyDown,f=function(n,e){if(null==n)return{};var t,r,u={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(u[t]=n[t]);return u}(n,c),d=(0,a.FT)(Object.assign({tagName:"a"},f)),s=(0,r.Z)(d,1)[0],v=(0,o.Z)((function(n){s.onKeyDown(n),null==u||u(n)}));return(t=f.href)&&"#"!==t.trim()&&"button"!==f.role?(0,i.jsx)("a",Object.assign({ref:e},f,{onKeyDown:u})):(0,i.jsx)("a",Object.assign({ref:e},f,s,{onKeyDown:v}))}));f.displayName="Anchor";var d=f},15341:function(n,e,t){t.d(e,{FT:function(){return i}});var r=t(29439),u=t(72791),o=t(80184),a=["as","disabled"];function i(n){var e=n.tagName,t=n.disabled,r=n.href,u=n.target,o=n.rel,a=n.role,i=n.onClick,c=n.tabIndex,f=void 0===c?0:c,d=n.type;e||(e=null!=r||null!=u||null!=o?"a":"button");var s={tagName:e};if("button"===e)return[{type:d||"button",disabled:t},s];var v=function(n){(t||"a"===e&&function(n){return!n||"#"===n.trim()}(r))&&n.preventDefault(),t?n.stopPropagation():null==i||i(n)};return"a"===e&&(r||(r="#"),t&&(r=void 0)),[{role:null!=a?a:"button",disabled:void 0,tabIndex:t?void 0:f,href:r,target:"a"===e?u:void 0,"aria-disabled":t||void 0,rel:"a"===e?o:void 0,onClick:v,onKeyDown:function(n){" "===n.key&&(n.preventDefault(),v(n))}},s]}var c=u.forwardRef((function(n,e){var t=n.as,u=n.disabled,c=function(n,e){if(null==n)return{};var t,r,u={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(u[t]=n[t]);return u}(n,a),f=i(Object.assign({tagName:t,disabled:u},c)),d=(0,r.Z)(f,2),s=d[0],v=d[1].tagName;return(0,o.jsx)(v,Object.assign({},c,s,{ref:e}))}));c.displayName="Button",e.ZP=c},3070:function(n,e,t){var r=t(97357),u=!1,o=!1;try{var a={get passive(){return u=!0},get once(){return o=u=!0}};r.Z&&(window.addEventListener("test",a,a),window.removeEventListener("test",a,!0))}catch(i){}e.ZP=function(n,e,t,r){if(r&&"boolean"!==typeof r&&!o){var a=r.once,i=r.capture,c=t;!o&&a&&(c=t.__once||function n(r){this.removeEventListener(e,n,i),t.call(this,r)},t.__once=c),n.addEventListener(e,c,u?r:i)}n.addEventListener(e,t,r)}},97357:function(n,e){e.Z=!("undefined"===typeof window||!window.document||!window.document.createElement)},92899:function(n,e,t){var r=t(3070),u=t(36382);e.Z=function(n,e,t,o){return(0,r.ZP)(n,e,t,o),function(){(0,u.Z)(n,e,t,o)}}},78376:function(n,e,t){function r(n){return n&&n.ownerDocument||document}t.d(e,{Z:function(){return r}})},36382:function(n,e){e.Z=function(n,e,t,r){var u=r&&"boolean"!==typeof r?r.capture:r;n.removeEventListener(e,t,u),t.__once&&n.removeEventListener(e,t.__once,u)}},91991:function(n,e,t){var r=t(72791).createContext(null);r.displayName="InputGroupContext",e.Z=r}}]);
//# sourceMappingURL=1144.543c93ba.chunk.js.map