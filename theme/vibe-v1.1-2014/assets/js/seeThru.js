/*! seethru 2.1.3 09-10-2014 see https://github.com/m90/seeThru for details */
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.seeThru=b()}(this,function(){function a(a,b){var c,d=document.createElement("canvas"),e=d.getContext("2d");d.width=b.width,d.height=b.height,e.drawImage(a,0,0,b.width,b.height),c=e.getImageData(0,0,b.width,b.height);for(var f=3,g=c.data.length;g>f;f+=4)c.data[f-1]=c.data[f-2]=c.data[f-3]=c.data[f],c.data[f]=255;return c}function b(a,b){for(var c=3,d=a.data.length;d>c;c+=4)a.data[c]=b[c-1],a.data[c-3]=a.data[c-3]/(b[c-1]?b[c-1]/255:1),a.data[c-2]=a.data[c-2]/(b[c-1]?b[c-1]/255:1),a.data[c-1]=a.data[c-1]/(b[c-1]?b[c-1]/255:1);return a}function c(){for(var a=0,b=["ms","moz","webkit","o"],c=0;c<b.length;c++)if(window[b[c]+"RequestAnimationFrame"])return window[b[c]+"RequestAnimationFrame"];return function(b){var c=(new Date).getTime(),d=Math.max(0,16-(c-a)),e=window.setTimeout(function(){b(c+d)},d);return a=c+d,e}}function d(){for(var a=["ms","moz","webkit","o"],b=0;b<a.length;b++){if(window[a[b]+"CancelAnimationFrame"])return window[a[b]+"CancelAnimationFrame"];if(window[a[b]+"CancelRequestAnimationFrame"])return window[a[b]+"CancelRequestAnimationFrame"]}return function(a){clearTimeout(a)}}function e(a){return[].slice.call(a)}function f(a){return Object.prototype.toString.call(a)}function g(a,b){b.nextSibling?b.parentNode.insertBefore(a,b.nextSibling):b.parentNode.appendChild(a)}function h(a){return a.tagName?a:"[object String]"===f(a)?document.querySelector(a):a.length?a[0]:null}function i(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c+": "+a[c]+";");return b.join("")}function j(a){a.fn&&!a.fn.seeThru&&(a.fn.seeThru=function(){var b=e(arguments);return this.each(function(){var c=a(this);if(!b.length||1===b.length&&"[object Object]"===f(b[0])){if(c.data("seeThru"))return;c.data("seeThru",new m(this,b[0])._init())}else if(b.length&&"[object String]"===f(b[0])){if(!c.data("seeThru"))return;c.data("seeThru").ready(function(){c.data("seeThru")[b[0]](b[1]),"revert"===b[0]&&c.data("seeThru",null)})}})})}function k(){var a=[];this.push=function(b){return b?(a.push(b),b):null},this.has=function(b){return a.some(function(a){return a===b})},this.remove=function(b){a=a.filter(function(a){return a!==b})}}function l(e,f){var j,k,l,m=f.mask?1:2,n={width:parseInt(f.width,10),height:parseInt(f.height,10)},o=document.createElement("canvas"),p=o.getContext("2d"),q=document.createElement("canvas"),r=q.getContext("2d"),s=window.requestAnimationFrame||c(),t=window.cancelAnimationFrame||d(),u=function(a){var c,d,g,h;for(p.drawImage(e,0,0,n.width,n.height*m),c=p.getImageData(0,0,n.width,n.height),d=p.getImageData(0,n.height,n.width,n.height).data,f.unmult&&b(c,d),g=3,h=c.data.length;h>g;g+=4)c.data[g]=f.alphaMask?d[g-1]:Math.max(d[g-1],d[g-2],d[g-3]);r.putImageData(c,0,0,0,0,n.width,n.height),a&&(l=s(function(){u(!0)}))},v=function(b){if("IMG"!==b.tagName)throw new Error("Cannot use non-image element as mask!");b.width=n.width,b.height=n.height,f.alphaMask?p.putImageData(a(b,n),0,n.height):p.drawImage(b,0,n.height,n.width,n.height),b.style.display="none"};this.startRendering=function(){return u(!0),this},this.stopRendering=function(){return t(l),this},this.teardown=function(){return t(l),e.nextSibling.remove(),e.nextSibling.remove(),e.style.display=j,this},this.updateMask=function(a){return v(a),this},this.getCanvas=function(){return q},this.getPoster=function(){return k};var w=e.getBoundingClientRect();n.height&&n.width||(e.width||e.height?e.height?e.width?(n.width=n.width||w.width,n.height=n.height||w.height/m):(n.width=n.width||w.height*(e.videoWidth/Math.floor(e.videoHeight/m)),n.height=n.height||w.height):(n.width=n.width||w.width,n.height=n.height||w.width/(e.videoWidth/Math.floor(e.videoHeight/m))):(n.width=n.width||e.videoWidth,n.height=n.height||e.videoHeight/m)),o.width=n.width,o.height=2*n.height,o.style.display="none",o.className="seeThru-buffer",q.width=n.width,q.height=n.height,q.className="seeThru-display",g(o,e),g(q,e),f.mask&&v(h(f.mask)),f.poster&&e.poster&&(k=document.createElement("div"),k.className="seeThru-poster",k.style.cssText=i({width:n.width+"px",height:n.height+"px",position:"absolute",top:0,left:0,backgroundSize:"cover",backgroundPosition:"center",backgroundImage:'url("'+e.poster+'")'}),g(k,e)),j=window.getComputedStyle(e).display,e.style.display="none","autoplay"===f.start&&e.play()}function m(a,b){var c=this,d=!1,e=[],f={start:"autoplay",end:"loop",mask:!1,alphaMask:!1,width:null,height:null,poster:!1,unmult:!1},g=function(){try{return new Event("submit",{bubbles:!1}).bubbles!==!1?!1:new Event("submit",{bubbles:!0}).bubbles!==!0?!1:!0}catch(a){return!1}}(),i=["mouseenter","mouseleave","click","mousedown","mouseup","mousemove","mouseover","hover","dblclick","contextmenu","focus","blur"];if(b=b||{},this._video=h(a),!this._video||"VIDEO"!==this._video.tagName)throw new Error("Could not use specified source");this._options=function(a){for(var b in f)f.hasOwnProperty(b)&&(b in a||(a[b]=f[b]));return a}(b),this._init=function(){var a=function(){function a(){c._video.play(),c._options.poster?c._seeThru.getPoster().removeEventListener("click",a):c._seeThru.getCanvas().removeEventListener("click",a)}if(n.has(this._video))throw new Error("seeThru already initialized on passed video element!");this._seeThru=new l(this._video,this._options),"clicktoplay"===this._options.start?this._options.poster?this._seeThru.getPoster().addEventListener("click",a):this._seeThru.getCanvas().addEventListener("click",a):"autoplay"===this._options.start&&b.poster&&(this._seeThru.getPoster().style.display="none"),"rewind"===this._options.end?this._video.addEventListener("ended",function(){c._video.currentTime=0,c._seeThru.getCanvas().addEventListener("click",a)}):"stop"!==this._options.end&&this._video.addEventListener("ended",function(){c._video.currentTime=0,c._video.play()}),this._options.poster&&this._video.poster&&(this._video.addEventListener("play",function(){c._seeThru.getPoster().style.display="none"}),this._video.addEventListener("pause",function(){c._seeThru.getPoster().style.display="block"})),i.forEach(function(a){c._seeThru.getCanvas().addEventListener(a,function(){var b;g?b=new Event(a):(b=document.createEvent("Event"),b.initEvent(a,!0,!0)),c._video.dispatchEvent(b)})}),this._seeThru.startRendering(),d=!0,n.push(this._video),e.forEach(function(a){a(c,c._video,c.getCanvas())})}.bind(this);return this._video.readyState>0?a():this._video.addEventListener("loadedmetadata",function(){a()}),this},this.getCanvas=function(){return this._seeThru.getCanvas()},this.play=function(){return this._video.play(),this},this.pause=function(){return this._video.pause(),this},this.revert=function(){this._seeThru.teardown(),n.remove(this._video)},this.updateMask=function(a){return this._seeThru.updateMask(h(a)),this},this.ready=function(a){return d?a(this,this._video,this.getCanvas()):e.push(a),this}}window.jQuery&&j(window.jQuery);var n=new k;return{create:function(a,b){return new m(a,b)._init()},attach:j}});