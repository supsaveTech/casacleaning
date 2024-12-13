!function(b,a){"function"==typeof define&&define.amd?define(["jquery"],function(b){return a(b)}):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(this,function(a){var b=function(j,a){var e,c=document.createElement("canvas"),b,d,f,g,k,h,i;j.appendChild(c),"object"==typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(c),b=c.getContext("2d"),c.width=c.height=a.size,d=1,window.devicePixelRatio>1&&(d=window.devicePixelRatio,c.style.width=c.style.height=[a.size,"px"].join(""),c.width=c.height=a.size*d,b.scale(d,d)),b.translate(a.size/2,a.size/2),b.rotate((-.5+a.rotate/180)*Math.PI),f=(a.size-a.lineWidth)/2,a.scaleColor&&a.scaleLength&&(f-=a.scaleLength+2),Date.now=Date.now||function(){return+new Date},g=function(c,d,a){a=Math.min(Math.max(-1,a||0),1);var e=0>=a;b.beginPath(),b.arc(0,0,f,0,2*Math.PI*a,e),b.strokeStyle=c,b.lineWidth=d,b.stroke()},k=function(){var d,c,e;b.lineWidth=1,b.fillStyle=a.scaleColor,b.save();for(e=24;e>0;--e)e%6===0?(c=a.scaleLength,d=0):(c=.6*a.scaleLength,d=a.scaleLength-c),b.fillRect(-a.size/2+d,0,c,1),b.rotate(Math.PI/12);b.restore()},h=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}(),i=function(){a.scaleColor&&k(),a.trackColor&&g(a.trackColor,a.trackWidth||a.lineWidth,1)},this.getCanvas=function(){return c},this.getCtx=function(){return b},this.clear=function(){b.clearRect(a.size/-2,a.size/-2,a.size,a.size)},this.draw=function(c){a.scaleColor||a.trackColor?b.getImageData&&b.putImageData?e?b.putImageData(e,0,0):(i(),e=b.getImageData(0,0,a.size*d,a.size*d)):(this.clear(),i()):this.clear(),b.lineCap=a.lineCap;var f;f="function"==typeof a.barColor?a.barColor(c):a.barColor,g(f,a.lineWidth,c/100)}.bind(this),this.animate=function(b,c){var e=Date.now(),d;a.onStart(b,c),d=function(){var f=Math.min(Date.now()-e,a.animate.duration),g=a.easing(this,f,b,c-b,a.animate.duration);this.draw(g),a.onStep(b,c,g),f>=a.animate.duration?a.onStop(b,c):h(d)}.bind(this),h(d)}.bind(this)},c=function(c,e){var d={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(e,a,b,c,d){return a/=d/2,1>a?c/2*a*a+b:-c/2*(--a*(a-2)-1)+b},onStart:function(a,b){},onStep:function(a,b,c){},onStop:function(a,b){}},a,f,g;if("undefined"!=typeof b)d.renderer=b;else{if("undefined"==typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");d.renderer=SVGRenderer}a={},f=0,g=function(){this.el=c,this.options=a;for(var b in d)d.hasOwnProperty(b)&&(a[b]=e&&"undefined"!=typeof e[b]?e[b]:d[b],"function"==typeof a[b]&&(a[b]=a[b].bind(this)));"string"==typeof a.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[a.easing])?a.easing=jQuery.easing[a.easing]:a.easing=d.easing,"number"==typeof a.animate&&(a.animate={duration:a.animate,enabled:!0}),"boolean"!=typeof a.animate||a.animate||(a.animate={duration:1e3,enabled:a.animate}),this.renderer=new a.renderer(c,a),this.renderer.draw(f),c.dataset&&c.dataset.percent?this.update(parseFloat(c.dataset.percent)):c.getAttribute&&c.getAttribute("data-percent")&&this.update(parseFloat(c.getAttribute("data-percent")))}.bind(this),this.update=function(b){return b=parseFloat(b),a.animate.enabled?this.renderer.animate(f,b):this.renderer.draw(b),f=b,this}.bind(this),this.disableAnimation=function(){return a.animate.enabled=!1,this},this.enableAnimation=function(){return a.animate.enabled=!0,this},g()};a.fn.easyPieChart=function(b){return this.each(function(){var d;a.data(this,"easyPieChart")||(d=a.extend({},b,a(this).data()),a.data(this,"easyPieChart",new c(this,d)))})}})