(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{2:function(e,t,o){"use strict";var n=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},i=function(e){return"IMG"===e.tagName},r=function(e){return e&&1===e.nodeType},d=function(e){return".svg"===(e.currentSrc||e.src).substr(-4).toLowerCase()},a=function(e){try{return Array.isArray(e)?e.filter(i):function(e){return NodeList.prototype.isPrototypeOf(e)}(e)?[].slice.call(e).filter(i):r(e)?[e].filter(i):"string"==typeof e?[].slice.call(document.querySelectorAll(e)).filter(i):[]}catch(e){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}},c=function(e,t){var o=n({bubbles:!1,cancelable:!1,detail:void 0},t);if("function"==typeof window.CustomEvent)return new CustomEvent(e,o);var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,o.bubbles,o.cancelable,o.detail),i},m=window.Promise||function(e){function t(){}e(t,t)};!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===o&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"),t.a=function e(t){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];var n=t.reduce(function(e,t){return[].concat(e,a(t))},[]);return n.filter(function(e){return-1===f.indexOf(e)}).forEach(function(e){f.push(e),e.classList.add("medium-zoom-image")}),p.forEach(function(e){var t=e.type,o=e.listener,i=e.options;n.forEach(function(e){e.addEventListener(t,o,i)})}),b},l=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).target,t=function(){var e=Math.min,t={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},o=void 0,i=void 0;if(v.container)if(v.container instanceof Object)o=(t=n({},t,v.container)).width-t.left-t.right-2*v.margin,i=t.height-t.top-t.bottom-2*v.margin;else{var a=(r(v.container)?v.container:document.querySelector(v.container)).getBoundingClientRect(),c=a.width,m=a.height,l=a.left,u=a.top;t=n({},t,{width:c,height:m,left:l,top:u})}o=o||t.width-2*v.margin,i=i||t.height-2*v.margin;var s=y.zoomedHd||y.original,f=d(s)?o:s.naturalWidth||o,p=d(s)?i:s.naturalHeight||i,g=s.getBoundingClientRect(),h=g.top,z=g.left,b=g.width,w=g.height,E=e(f,o)/b,L=e(p,i)/w,H=e(E,L),C="scale("+H+") translate3d("+((o-b)/2-z+v.margin+t.left)/H+"px, "+((i-w)/2-h+v.margin+t.top)/H+"px, 0)";y.zoomed.style.transform=C,y.zoomedHd&&(y.zoomedHd.style.transform=C)};return new m(function(o){if(e&&-1===f.indexOf(e))o(b);else if(y.zoomed)o(b);else{if(e)y.original=e;else{if(!(0<f.length))return void o(b);var n=f;y.original=n[0]}if(y.original.dispatchEvent(c("medium-zoom:open",{detail:{zoom:b}})),h=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,g=!0,y.zoomed=function(e){var t=e.getBoundingClientRect(),o=t.top,n=t.left,i=t.width,r=t.height,d=e.cloneNode(),a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,c=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return d.removeAttribute("id"),d.style.position="absolute",d.style.top=o+a+"px",d.style.left=n+c+"px",d.style.width=i+"px",d.style.height=r+"px",d.style.transform="",d}(y.original),document.body.appendChild(z),v.template){var i=r(v.template)?v.template:document.querySelector(v.template);y.template=document.createElement("div"),y.template.appendChild(i.content.cloneNode(!0)),document.body.appendChild(y.template)}if(document.body.appendChild(y.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),y.original.classList.add("medium-zoom-image--hidden"),y.zoomed.classList.add("medium-zoom-image--opened"),y.zoomed.addEventListener("click",u),y.zoomed.addEventListener("transitionend",function e(){g=!1,y.zoomed.removeEventListener("transitionend",e),y.original.dispatchEvent(c("medium-zoom:opened",{detail:{zoom:b}})),o(b)}),y.original.getAttribute("data-zoom-src")){y.zoomedHd=y.zoomed.cloneNode(),y.zoomedHd.removeAttribute("srcset"),y.zoomedHd.removeAttribute("sizes"),y.zoomedHd.src=y.zoomed.getAttribute("data-zoom-src"),y.zoomedHd.onerror=function(){clearInterval(d),console.warn("Unable to reach the zoom image target "+y.zoomedHd.src),y.zoomedHd=null,t()};var d=setInterval(function(){y.zoomedHd.complete&&(clearInterval(d),y.zoomedHd.classList.add("medium-zoom-image--opened"),y.zoomedHd.addEventListener("click",u),document.body.appendChild(y.zoomedHd),t())},10)}else if(y.original.hasAttribute("srcset")){y.zoomedHd=y.zoomed.cloneNode(),y.zoomedHd.removeAttribute("sizes");var a=y.zoomedHd.addEventListener("load",function(){y.zoomedHd.removeEventListener("load",a),y.zoomedHd.classList.add("medium-zoom-image--opened"),y.zoomedHd.addEventListener("click",u),document.body.appendChild(y.zoomedHd),t()})}else t()}})},u=function(){return new m(function(e){!g&&y.original?(g=!0,document.body.classList.remove("medium-zoom--opened"),y.zoomed.style.transform="",y.zoomedHd&&(y.zoomedHd.style.transform=""),y.template&&(y.template.style.transition="opacity 150ms",y.template.style.opacity=0),y.original.dispatchEvent(c("medium-zoom:close",{detail:{zoom:b}})),y.zoomed.addEventListener("transitionend",function t(){y.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(y.zoomed),y.zoomedHd&&document.body.removeChild(y.zoomedHd),document.body.removeChild(z),y.zoomed.classList.remove("medium-zoom-image--opened"),y.template&&document.body.removeChild(y.template),g=!1,y.zoomed.removeEventListener("transitionend",t),y.original.dispatchEvent(c("medium-zoom:closed",{detail:{zoom:b}})),y.original=null,y.zoomed=null,y.zoomedHd=null,y.template=null,e(b)})):e(b)})},s=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).target;return y.original?u():l({target:e})},f=[],p=[],g=!1,h=0,v=o,y={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(t)?v=t:(t||"string"==typeof t)&&i(t);var z=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.background=e,t}((v=n({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},v)).background);document.addEventListener("click",function(e){var t=e.target;return t===z?void u():void(-1===f.indexOf(t)||s({target:t}))}),document.addEventListener("keyup",function(e){27===(e.keyCode||e.which)&&u()}),document.addEventListener("scroll",function(){if(!g&&y.original){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(h-e)>v.scrollOffset&&setTimeout(u,150)}}),window.addEventListener("resize",u);var b={open:l,close:u,toggle:s,update:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e;if(e.background&&(z.style.background=e.background),e.container&&e.container instanceof Object&&(t.container=n({},v.container,e.container)),e.template){var o=r(e.template)?e.template:document.querySelector(e.template);t.template=o}return v=n({},v,t),f.forEach(function(e){e.dispatchEvent(c("medium-zoom:update",{detail:{zoom:b}}))}),b},clone:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return e(n({},v,t))},attach:i,detach:function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];y.zoomed&&u();var n=0<t.length?t.reduce(function(e,t){return[].concat(e,a(t))},[]):f;return n.forEach(function(e){e.classList.remove("medium-zoom-image"),e.dispatchEvent(c("medium-zoom:detach",{detail:{zoom:b}}))}),f=f.filter(function(e){return-1===n.indexOf(e)}),b},on:function(e,t){var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return f.forEach(function(n){n.addEventListener("medium-zoom:"+e,t,o)}),p.push({type:"medium-zoom:"+e,listener:t,options:o}),b},off:function(e,t){var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return f.forEach(function(n){n.removeEventListener("medium-zoom:"+e,t,o)}),p=p.filter(function(o){return o.type!=="medium-zoom:"+e||o.listener.toString()!==t.toString()}),b},getOptions:function(){return v},getImages:function(){return f},getZoomedImage:function(){return y.original}};return b}},3:function(e,t,o){"use strict";var n=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object"],i=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}";function r(e,t){return"string"==typeof e&&(t=e,e=document),Array.prototype.slice.call(e.querySelectorAll(t))}function d(e){return"string"==typeof e?e.split(",").map(c).filter(a):function(e){return"[object Array]"===Object.prototype.toString.call(e)}(e)?function(e){return[].concat.apply([],e)}(e.map(d).filter(a)):e||[]}function a(e){return e.length>0}function c(e){return e.replace(/^\s+|\s+$/g,"")}e.exports=function(e,t){var o;t=t||{},o=e=e||"body","[object Object]"===Object.prototype.toString.call(o)&&(t=e,e="body"),t.ignore=t.ignore||"",t.players=t.players||"";var c=r(e);if(a(c)){var m;if(!document.getElementById("fit-vids-style"))(document.head||document.getElementsByTagName("head")[0]).appendChild(((m=document.createElement("div")).innerHTML='<p>x</p><style id="fit-vids-style">'+i+"</style>",m.childNodes[1]));var l=d(t.players)||[],u=d(t.ignore)||[],s=n.filter(function(e){if(e.length<1)return function(){return!0};return function(t){return-1===e.indexOf(t)}}(u)).concat(l).join();a(s)&&c.forEach(function(e){r(e,s).forEach(function(e){!function(e){if(/fluid-width-video-wrapper/.test(e.parentNode.className))return;var t=parseInt(e.getAttribute("width"),10),o=parseInt(e.getAttribute("height"),10),n=isNaN(t)?e.clientWidth:t,i=(isNaN(o)?e.clientHeight:o)/n;e.removeAttribute("width"),e.removeAttribute("height");var r=document.createElement("div");e.parentNode.insertBefore(r,e),r.className="fluid-width-video-wrapper",r.style.paddingTop=100*i+"%",r.appendChild(e)}(e)})})}}},39:function(e,t,o){e.exports=o(40)},40:function(e,t,o){"use strict";o.r(t);var n=o(0),i=o.n(n),r=o(2),d=o(3),a=o.n(d);i()(document).ready(function(){a()(".js-post-content"),document.querySelectorAll(".kg-gallery-image img").forEach(function(e){var t=e.closest(".kg-gallery-image"),o=e.attributes.width.value/e.attributes.height.value;t.style.flex="".concat(o," 1 0%")}),i()(".js-post-content").find("figure img").each(function(){i()(this).addClass("js-zoomable")}),Object(r.a)(".js-zoomable")})}},[[39,0,1]]]);