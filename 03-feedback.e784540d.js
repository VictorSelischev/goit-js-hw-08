!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,d=c||l||Function("return this")(),s=Object.prototype.toString,v=Math.max,b=Math.min,p=function(){return d.Date.now()};function m(e,t,n){var o,r,u,f,a,c,l=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function j(t){var n=o,i=r;return o=r=void 0,l=t,f=e.apply(i,n)}function T(e){return l=e,a=setTimeout(O,t),d?j(e):f}function h(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function O(){var e=p();if(h(e))return w(e);a=setTimeout(O,function(e){var n=t-(e-c);return s?b(n,u-(e-l)):n}(e))}function w(e){return a=void 0,m&&o?j(e):(o=r=void 0,f)}function x(){var e=p(),n=h(e);if(o=arguments,r=this,c=e,n){if(void 0===a)return T(c);if(s)return a=setTimeout(O,t),j(c)}return void 0===a&&(a=setTimeout(O,t)),f}return t=g(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(g(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),x.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=r=a=void 0},x.flush=function(){return void 0===a?f:w(p())},x}function y(e){var i=void 0===e?"undefined":t(n)(e);return!!e&&("object"==i||"function"==i)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var i="function"==typeof e.valueOf?e.valueOf():e;e=y(i)?i+"":i}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var c=u.test(e);return c||f.test(e)?a(e.slice(2),c?2:8):r.test(e)?NaN:+e}document.querySelector(".feedback-form").addEventListener("input",(function(e){var t=e.currentTarget.elements,n=t.email,i=t.message,o={};o.email=n.value,o.message=i.value}))}();
//# sourceMappingURL=03-feedback.e784540d.js.map