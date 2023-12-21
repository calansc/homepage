(()=>{"use strict";var n,e,t,r,i,a,o,d,p,c,s,l,u,m,g={426:(n,e,t)=>{t.d(e,{Z:()=>d});var r=t(81),i=t.n(r),a=t(645),o=t.n(a)()(i());o.push([n.id,":root {\n    --blue: #1f5b83;\n    --white: white;\n    --darkgrey: rgb(63, 63, 63);\n}\n* {\n    margin: 0px;\n    padding: 0px;\n}\nh3 {\n    font-weight: 100;\n}\nh4 {\n    font-weight: 100;\n}\n.header {\n    background-image: linear-gradient(156deg, var(--blue) 35%, var(--white) calc(35% + 2px));\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n.header-one {\n    margin: 10vw 10vw 0px 10vw;\n}\n.header-picture-frame {\n   position: relative;\n}\n.header-picture {\n    max-height: 400px;\n    max-width: 400px;\n    object-fit:contain;\n}\n.header-name {\n    position:absolute;\n    bottom: 0;    \n    font-size: 3rem;\n    color: white;\n    text-shadow: 1px 1px 2px pink;\n}\n.header-two {\n    background-color: white;\n    margin:8vw;\n}\n.about-me {\n    text-align: center;\n}\n.header-links {\n    /* margin: 0px 20vw 0px 20vw; */\n    display:grid;\n    grid-auto-flow: column;\n    grid-template-columns: 1fr 1fr;\n}\n.header svg {\n    margin:8px;\n    max-width: 48px;\n    max-height: 48px;\n}\n.header-github {\n    justify-self: right;\n    /* height: 64px; */\n    width:64px;\n}\n.header-github-img, .header-linkedin-img {\n    margin:8px;\n    max-width: 48px;\n    max-height: 48px;\n}\n.middle {\n    margin-top: 64px;\n    margin-bottom: 64px;\n}\n\n.work {\n    text-align: center;\n    margin-bottom: 1em;\n}\n.project-container {\n    display: grid;\n   padding-left: 8vw;\n   padding-right:8vw;\n}\n.project {\n    display: grid;\n    grid-template-rows: 224px auto;\n    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, .1);\n    margin-bottom: 3rem;\n}\n.project-image {\n    /* max-width: 100vw; */\n    width:100%;\n    max-height: 100%;\n    /* border: 1px solid black; */\n}\n.project-card {\n    display: grid;\n    /* grid-template-columns: auto 32px 32px; */\n    grid-template-rows: 40px 90px;\n    \n    margin: 1rem;\n }\n .project-card-header{\n    display: grid;\n    grid-template-columns: auto 32px 32px;\n    align-items: center;\n }\n .project-name {\n    font-size: 1.8rem;\n }\n .project-description {\n    color: var(--darkgrey)\n }\n .middle-github, .middle-link {\n    width: 32px;\n    height: 32px;\n}\n.middle-github-img, .middle-link-img {\n    width: 32px;\n    height: 32px;\n}\n.footer {\n    background-color: var(--blue);\n    color: var(--white);\n    /* padding-left: 8vw;\n    padding-right: 8vw;\n    padding-top: 2rem;\n    padding-bottom: 2rem; */\n}\n.footer-contact {\n    text-align: center;\n    padding-left:8vw;\n    padding-right:8vw;\n}\n.footer-description, .footer-address, .footer-number, .footer-email {\n    padding-top:1rem;\n    padding-bottom:1rem;\n    padding-left:8vw;\n    padding-right:8vw;\n}\n\n.footer-links {\n    display: grid;\n    grid-auto-flow: column;\n    justify-items: center;\n}\n.footer svg {\n    margin:8px;\n    max-width: 64px;\n    max-height: 64px;\n\n}\n.footer-image {\n    /* max-height: 400px; */\n    max-width: 100vw;\n    object-fit:contain;\n}\n@media (min-width: 501px) {\n\n}\n@media (min-width:1001px) {\n\n}",""]);const d=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var d=0;d<this.length;d++){var p=this[d][0];null!=p&&(o[p]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&o[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),i&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=i):s[4]="".concat(i)),e.push(s))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},o=[],d=0;d<n.length;d++){var p=n[d],c=r.base?p[0]+r.base:p[0],s=a[c]||0,l="".concat(c," ").concat(s);a[c]=s+1;var u=t(l),m={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var g=i(m,r);r.byIndex=d,e.splice(d,0,{identifier:l,updater:g,references:1})}o.push(l)}return o}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=r(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<a.length;o++){var d=t(a[o]);e[d].references--}for(var p=r(n,i),c=0;c<a.length;c++){var s=t(a[c]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=p}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},f={};function h(n){var e=f[n];if(void 0!==e)return e.exports;var t=f[n]={id:n,exports:{}};return g[n](t,t.exports,h),t.exports}h.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return h.d(e,{a:e}),e},h.d=(n,e)=>{for(var t in e)h.o(e,t)&&!h.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},h.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),h.nc=void 0,n=h(379),e=h.n(n),t=h(795),r=h.n(t),i=h(569),a=h.n(i),o=h(565),d=h.n(o),p=h(216),c=h.n(p),s=h(589),l=h.n(s),u=h(426),(m={}).styleTagTransform=l(),m.setAttributes=d(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=c(),e()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals})();