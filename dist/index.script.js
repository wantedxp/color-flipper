(()=>{"use strict";var n={705:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var p=0;p<n.length;p++){var d=[].concat(n[p]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},738:n=>{n.exports=function(n){return n[1]}},21:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(738),o=e.n(t),a=e(705),i=e.n(a)()(o());i.push([n.id,"* {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: sans-serif;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    background-color: #fff;\r\n    padding: 20px;\r\n    width: 100%;\r\n    height: 70px;\r\n    -webkit-box-shadow: -2px 13px 23px -12px rgba(0, 0, 0, 0.75);\r\n    -moz-box-shadow: -2px 13px 23px -12px rgba(0, 0, 0, 0.75);\r\n    box-shadow: -2px 13px 23px -12px rgba(0, 0, 0, 0.75);\r\n}\r\n\r\nh4 {\r\n    color: #58a5c4ef;\r\n    font-size: 1.2rem;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    font-size: 1.1rem;\r\n    padding: 0px 6px;\r\n    color: #414040;\r\n}\r\n\r\n.main {\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 60px;\r\n}\r\n\r\n.background-container {\r\n    background-color: #000000;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    height: 70px;\r\n    font-size: 40px;\r\n    padding: 10px;\r\n    border-radius: 8px;\r\n}\r\n\r\n.color {\r\n    color: #58a5c4ef;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.btn {\r\n    background-color: transparent;\r\n    height: 45px;\r\n    border-radius: 8px;\r\n    padding: 8px;\r\n    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);\r\n    font-weight: bold;\r\n}\r\n\r\n/* RESPONSIVE */\r\n\r\n@media (max-width: 560px) {\r\n    .background-container {\r\n        font-size: 30px;\r\n        display: flex;\r\n        align-items: center;\r\n    }\r\n}\r\n\r\n@media (max-width: 430px) {\r\n    .background-container {\r\n        font-size: 25px;\r\n    }\r\n}\r\n\r\n@media (max-width: 360px) {\r\n    .background-container {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .main {\r\n        gap: 30px;\r\n    }\r\n\r\n    .btn {\r\n        width: 100px;\r\n    }\r\n}\r\n\r\n@media (max-width: 300px) {\r\n    .background-container {\r\n        font-size: 18px;\r\n    }\r\n\r\n    .main {\r\n        gap: 30px;\r\n    }\r\n\r\n    \r\n}",""]);const c=i},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],p=t.base?s[0]+t.base:s[0],d=a[p]||0,u="".concat(p," ").concat(d);a[p]=d+1;var l=e(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)r[l].references++,r[l].updater(f);else{var x=o(f,t);t.byIndex=c,r.splice(c,0,{identifier:u,updater:x,references:1})}i.push(u)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=e(a[i]);r[c].references--}for(var s=t(n,o),p=0;p<a.length;p++){var d=e(a[p]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}a=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return n[t](a,a.exports,e),a.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0,(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),a=e(569),i=e.n(a),c=e(565),s=e.n(c),p=e(216),d=e.n(p),u=e(589),l=e.n(u),f=e(21),x={};x.styleTagTransform=l(),x.setAttributes=s(),x.insert=i().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=d(),r()(f.Z,x),f.Z&&f.Z.locals&&f.Z.locals;var m=["green","red","blue","#f15025"],h=document.getElementById("btn"),g=document.querySelector(".color");h.addEventListener("click",(function(){var n=Math.floor(Math.random()*m.length);console.log(n),document.body.style.backgroundColor=m[n],g.textContent=m[n]}))})()})();