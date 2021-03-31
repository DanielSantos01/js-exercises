(()=>{"use strict";var n={974:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(15),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);"]),i.push([n.id,":root {\n  --primary-color: rgb(17, 86, 102);\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.container > h1 {\n  text-align: center;\n}\n\n.row-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.btn-generate {\n  background-color: aquamarine;\n  width: 70px;\n  height: 25px;\n  border-radius: 5px;\n  cursor: pointer;\n  border: none;\n  transition: 0.2s;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.btn-generate:hover {\n  transform: scale(1.1);\n}\n\n.btn-generate:active {\n  transform: scale(1);\n}\n\n.cpf-content {\n  text-align: center;\n  color: blueviolet;\n}\n\n@media (max-width: 520px) {\n  .row-container {\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  .btn-generate {\n    height: 40px;\n  }\n\n  .cpf-content {\n    margin-top: 20px;\n  }\n}","",{version:3,sources:["webpack://./src/assets/css/styles.css"],names:[],mappings:"AACA;EACE,iCAAiC;EACjC,sCAAsC;AACxC;;AAEA;EACE,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,UAAU;EACV,gCAAgC;EAChC,oCAAoC;EACpC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,4BAA4B;EAC5B,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,gBAAgB;EAChB,0CAA0C;AAC5C;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE;IACE,sBAAsB;IACtB,uBAAuB;EACzB;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,gBAAgB;EAClB;AACF",sourcesContent:["@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');\n:root {\n  --primary-color: rgb(17, 86, 102);\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.container > h1 {\n  text-align: center;\n}\n\n.row-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.btn-generate {\n  background-color: aquamarine;\n  width: 70px;\n  height: 25px;\n  border-radius: 5px;\n  cursor: pointer;\n  border: none;\n  transition: 0.2s;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.btn-generate:hover {\n  transform: scale(1.1);\n}\n\n.btn-generate:active {\n  transform: scale(1);\n}\n\n.cpf-content {\n  text-align: center;\n  color: blueviolet;\n}\n\n@media (max-width: 520px) {\n  .row-container {\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  .btn-generate {\n    height: 40px;\n  }\n\n  .cpf-content {\n    margin-top: 20px;\n  }\n}"],sourceRoot:""}]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},15:n=>{function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}n.exports=function(n){var t,r,o=(r=4,function(n){if(Array.isArray(n))return n}(t=n)||function(n,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n)){var t=[],r=!0,o=!1,a=void 0;try{for(var i,c=n[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!e||t.length!==e);r=!0);}catch(n){o=!0,a=n}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return t}}(t,r)||function(n,t){if(n){if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(n,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),u="/*# ".concat(s," */"),l=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[a].concat(l).concat([u]).join("\n")}return[a].join("\n")}},379:(n,e,t)=>{var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function i(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},r=[],o=0;o<n.length;o++){var c=n[o],s=e.base?c[0]+e.base:c[0],u=t[s]||0,l="".concat(s," ").concat(u);t[s]=u+1;var A=i(l),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==A?(a[A].references++,a[A].updater(f)):a.push({identifier:l,updater:h(f,e),references:1}),r.push(l)}return r}function s(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var i=o(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var u,l=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function A(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=l(e,o);else{var a=document.createTextNode(o),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function f(n,e,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var d=null,p=0;function h(n,e){var t,r,o;if(e.singleton){var a=p++;t=d||(d=s(e)),r=A.bind(null,t,a,!1),o=A.bind(null,t,a,!0)}else t=s(e),r=f.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=i(t[r]);a[o].references--}for(var s=c(n,e),u=0;u<t.length;u++){var l=i(t[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=s}}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var e=function(){function e(n){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),Object.defineProperties(this,{CPFWithoutSymbols:{writable:!1,enumerable:!0,configurable:!1,value:n.replace(/\D+/g,"")},EXPECTED_LENGTH:{writable:!1,enumerable:!1,configurable:!1,value:11},INITIAL_POSITION:{writable:!1,enumerable:!1,configurable:!1,value:0}})}var t,r,o;return t=e,o=[{key:"calculateNumber",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=n.length+1,t=Array.from(n).reduce((function(n,t){var r=n+Number(t)*e;return e--,r}),0),r=11-t%11;return String(r<=9?r:0)}}],(r=[{key:"validate",value:function(){return!!this.checkLength()&&!this.checkSequency()&&this.checkValidate()}},{key:"checkLength",value:function(){return this.CPFWithoutSymbols.length===this.EXPECTED_LENGTH}},{key:"checkSequency",value:function(){var n=this.CPFWithoutSymbols.length;return this.CPFWithoutSymbols.charAt(this.INITIAL_POSITION).repeat(n)===this.CPFWithoutSymbols}},{key:"checkValidate",value:function(){for(var n=this.CPFWithoutSymbols.slice(0,9),e=0;e<2;e++){var t=this.calculateNumber(n);n="".concat(n).concat(t)}return n===this.CPFWithoutSymbols}}])&&n(t.prototype,r),o&&n(t,o),e}();function r(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var o,a,i,c=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var t,o;return t=n,(o=[{key:"getRandomInitialDigits",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e8,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:999999999,t=Math.floor(Math.random()*(e-n)+n);return String(t)}},{key:"mask",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=0,r=function(){return n[t++]||""},o=e.replace(/#/g,r);return o}},{key:"generateCPF",value:function(){var n=this.getRandomInitialDigits(),t=e.calculateNumber(n),r=n+t+e.calculateNumber(n+t);return this.mask(r,"###.###.###-##")}}])&&r(t.prototype,o),n}(),s=t(379),u=t.n(s),l=t(974);u()(l.Z,{insert:"head",singleton:!1}),l.Z.locals,o=new c,a=document.querySelector(".btn-generate"),i=document.querySelector(".cpf-content"),a.addEventListener("click",(function(){var n=o.generateCPF();i.innerHTML=n}))})()})();
//# sourceMappingURL=bundle.js.map