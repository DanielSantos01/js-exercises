(()=>{"use strict";var n={601:(n,e,r)=>{const t=JSON.parse('{"WT":"abcdefghijklmnopqrstuvwxyzç","KT":"0123456789","Vy":"!@#$%&*()-_+=^~/.,\'"}');var o,a,i,c=t.WT.length,s=t.KT.length,A=t.Vy.length,l=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],t=Math.floor(Math.random()*(e-n)+n);return r[t]},u=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=Math.floor(Math.random()*c),r=t.WT[e];return n?r.toUpperCase():r},d=function(){var n=Math.floor(Math.random()*A);return t.Vy[n]},p=document.querySelectorAll(".input"),f=r(379),h=r.n(f),m=r(974);h()(m.Z,{insert:"head",singleton:!1}),m.Z.locals,o=document.querySelector(".btn-generate"),a=document.querySelector(".password-content"),i=document.querySelector(".length"),o.addEventListener("click",(function(){var n,e,r=function(){for(var n={},e=0;e<p.length;e++){var r=p[e],t=r.classList.length-1;switch(r.classList[t]){case"length":n.length=Number(r.value);break;case"numbers":r.checked&&(n.numbers=!0);break;case"uppercase":r.checked&&(n.uppercase=!0);break;case"lowercase":r.checked&&(n.lowercase=!0);break;case"special-caracters":r.checked&&(n.special_caracters=!0)}}return n}();if(n=r,e=Object.keys(n),n.length?!(e.length<=1&&(a.innerHTML="Nenhum campo selecionado",1)):(a.innerHTML="Impossível criar senhas sem caracteres",0)){var o=function(n){for(var e,r="",o=Object.keys(n);r.length<n.length;)switch(l(1,o.length,o)){case"numbers":r+=(void 0,e=Math.floor(Math.random()*s),t.KT[e]);break;case"uppercase":r+=u(!0);break;case"lowercase":r+=u();break;case"special_caracters":r+=d()}return r}(r);a.innerHTML=o}})),i.addEventListener("input",(function(){Number(i.value)<0&&(i.value="0")}))},974:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(15),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);"]),i.push([n.id,":root {\n  --primary-color: rgb(17, 86, 102);\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  max-width: 640px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  overflow: hidden;\n}\n\n.row-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n  height: 40px;\n}\n\n.row-container > p {\n  width: 60%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.btn-generate {\n  display: block;\n  background-color: aquamarine;\n  width: 70px;\n  height: 25px;\n  border-radius: 5px;\n  cursor: pointer;\n  border: none;\n  transition: 0.2s;\n  margin: 20px auto;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.btn-generate:hover {\n  transform: scale(1.1);\n}\n\n.btn-generate:active {\n  transform: scale(1);\n}\n\n.input {\n  cursor: pointer;\n}\n\n.input-number {\n  width: 50px;\n}\n\np.option {\n  font-size: 14px;\n}\n\n.password-content {\n  text-align: center;\n  word-wrap: break-word;\n  white-space: normal;\n  overflow: hidden;\n  color: blueviolet;\n}\n\n@media (max-width: 520px) {\n  .btn-generate {\n    height: 40px;\n  }\n}","",{version:3,sources:["webpack://./src/assets/css/styles.css"],names:[],mappings:"AACA;EACE,iCAAiC;EACjC,sCAAsC;AACxC;;AAEA;EACE,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,UAAU;EACV,gCAAgC;EAChC,oCAAoC;EACpC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,4BAA4B;EAC5B,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;EACjB,0CAA0C;AAC5C;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE;IACE,YAAY;EACd;AACF",sourcesContent:["@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');\n:root {\n  --primary-color: rgb(17, 86, 102);\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  max-width: 640px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  overflow: hidden;\n}\n\n.row-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n  height: 40px;\n}\n\n.row-container > p {\n  width: 60%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.btn-generate {\n  display: block;\n  background-color: aquamarine;\n  width: 70px;\n  height: 25px;\n  border-radius: 5px;\n  cursor: pointer;\n  border: none;\n  transition: 0.2s;\n  margin: 20px auto;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.btn-generate:hover {\n  transform: scale(1.1);\n}\n\n.btn-generate:active {\n  transform: scale(1);\n}\n\n.input {\n  cursor: pointer;\n}\n\n.input-number {\n  width: 50px;\n}\n\np.option {\n  font-size: 14px;\n}\n\n.password-content {\n  text-align: center;\n  word-wrap: break-word;\n  white-space: normal;\n  overflow: hidden;\n  color: blueviolet;\n}\n\n@media (max-width: 520px) {\n  .btn-generate {\n    height: 40px;\n  }\n}"],sourceRoot:""}]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=n(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);t&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),e.push(s))}},e}},15:n=>{function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}n.exports=function(n){var r,t,o=(t=4,function(n){if(Array.isArray(n))return n}(r=n)||function(n,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n)){var r=[],t=!0,o=!1,a=void 0;try{for(var i,c=n[Symbol.iterator]();!(t=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);t=!0);}catch(n){o=!0,a=n}finally{try{t||null==c.return||c.return()}finally{if(o)throw a}}return r}}(r,t)||function(n,r){if(n){if("string"==typeof n)return e(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?e(n,r):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),A="/*# ".concat(s," */"),l=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[a].concat(l).concat([A]).join("\n")}return[a].join("\n")}},379:(n,e,r)=>{var t,o=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),a=[];function i(n){for(var e=-1,r=0;r<a.length;r++)if(a[r].identifier===n){e=r;break}return e}function c(n,e){for(var r={},t=[],o=0;o<n.length;o++){var c=n[o],s=e.base?c[0]+e.base:c[0],A=r[s]||0,l="".concat(s," ").concat(A);r[s]=A+1;var u=i(l),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(a[u].references++,a[u].updater(d)):a.push({identifier:l,updater:h(d,e),references:1}),t.push(l)}return t}function s(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var a=r.nc;a&&(t.nonce=a)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var i=o(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var A,l=(A=[],function(n,e){return A[n]=e,A.filter(Boolean).join("\n")});function u(n,e,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=l(e,o);else{var a=document.createTextNode(o),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function d(n,e,r){var t=r.css,o=r.media,a=r.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var p=null,f=0;function h(n,e){var r,t,o;if(e.singleton){var a=f++;r=p||(p=s(e)),t=u.bind(null,r,a,!1),o=u.bind(null,r,a,!0)}else r=s(e),t=d.bind(null,r,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var r=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<r.length;t++){var o=i(r[t]);a[o].references--}for(var s=c(n,e),A=0;A<r.length;A++){var l=i(r[A]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}r=s}}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r(601)})();
//# sourceMappingURL=bundle.js.map