function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,m=Math.min,p=function(){return l.Date.now()};function v(e,t,n){var r,o,i,f,u,a,c=0,l=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,f=e.apply(i,n)}function j(e){return c=e,u=setTimeout(O,t),l?y(e):f}function h(e){var n=e-a;return void 0===a||n>=t||n<0||d&&e-c>=i}function O(){var e=p();if(h(e))return S(e);u=setTimeout(O,function(e){var n=t-(e-a);return d?m(n,i-(e-c)):n}(e))}function S(e){return u=void 0,v&&r?y(e):(r=o=void 0,f)}function T(){var e=p(),n=h(e);if(r=arguments,o=this,a=e,n){if(void 0===u)return j(a);if(d)return u=setTimeout(O,t),y(a)}return void 0===u&&(u=setTimeout(O,t)),f}return t=g(t)||0,b(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(g(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=a=o=u=void 0},T.flush=function(){return void 0===u?f:S(p())},T}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||f.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const y={},j={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),email:document.querySelector("#email")};function h(){localStorage.setItem("feedback-form-state",JSON.stringify(y))}!function(){let e=localStorage.getItem("feedback-form-state");e&&(e=JSON.parse(e),Object.entries(e).forEach((([e,t])=>{y[e]=t,j.form.elements[e].value=t})))}(),j.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),console.log(y)})),j.input.addEventListener("input",e(t)(h,500)),j.form.addEventListener("input",(e=>{y[e.target.name]=e.target.value,h()}));
//# sourceMappingURL=03-feedback.513e14c8.js.map