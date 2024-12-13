(function(a){typeof define=='function'&&define.amd?define([],a):typeof module!="undefined"&&module!==null&&module.exports?module.exports=a:a()})(function(){var O=Object.assign||window.jQuery&&jQuery.extend,t=8,R=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a,b){return window.setTimeout(function(){a()},25)}}(),n,c,d,m,Q,i,k;(function(){if(typeof window.CustomEvent=="function")return!1;function a(c,a){a=a||{bubbles:!1,cancelable:!1,detail:void 0};var b=document.createEvent('CustomEvent');return b.initCustomEvent(c,a.bubbles,a.cancelable,a.detail),b}a.prototype=window.Event.prototype,window.CustomEvent=a})(),n={textarea:!0,input:!0,select:!0,button:!0},c={move:'mousemove',cancel:'mouseup dragstart',end:'mouseup'},d={move:'touchmove',cancel:'touchend',end:'touchend'},m=/\s+/,Q={bubbles:!0,cancelable:!0},i=typeof Symbol=="function"?Symbol('events'):{};function P(a){return new CustomEvent(a,Q)}function w(a){return a[i]||(a[i]={})}function a(g,b,h,i,j){var d,c,e,a;b=b.split(m),d=w(g),c=b.length;function f(a){h(a,i)}while(c--)a=b[c],e=d[a]||(d[a]=[]),e.push([h,f]),g.addEventListener(a,f)}function b(g,d,h,i){var e,f,c,a,b;if(d=d.split(m),e=w(g),f=d.length,!e)return;while(f--){if(c=d[f],a=e[c],!a)continue;for(b=a.length;b--;)a[b][0]===h&&(g.removeEventListener(c,a[b][1]),a.splice(b,1))}}function g(c,d,a){var b=P(d);a&&O(b,a),c.dispatchEvent(b)}function N(e){var c=e,a=!1,b=!1;function d(e){a?(c(),R(d),b=!0,a=!1):b=!1}this.kick=function(c){a=!0,b||d()},this.end=function(d){var e=c;if(!d)return;b?(c=a?function(){e(),d()}:d,a=!0):d()}}function M(){}function q(a){a.preventDefault()}function A(a){return!!n[a.target.tagName.toLowerCase()]}function G(a){return a.which===1&&!a.ctrlKey&&!a.altKey}function e(a,c){var b,d;if(a.identifiedTouch)return a.identifiedTouch(c);for(b=-1,d=a.length;++b<d;)if(a[b].identifier===c)return a[b]}function u(c,b){var a=e(c.changedTouches,b.identifier);if(!a)return;if(a.pageX===b.pageX&&a.pageY===b.pageY)return;return a}function F(b){if(!G(b))return;if(A(b))return;a(document,c.move,r,b),a(document,c.cancel,x,b)}function r(a,b){z(a,b,a,y)}function x(a,b){y()}function y(){b(document,c.move,r),b(document,c.cancel,x)}function D(e){var b,c;if(n[e.target.tagName.toLowerCase()])return;b=e.changedTouches[0],c={target:b.target,pageX:b.pageX,pageY:b.pageY,identifier:b.identifier,touchmove:function(a,b){C(a,b)},touchend:function(a,b){B(a,b)}},a(document,d.move,c.touchmove,c),a(document,d.cancel,c.touchend,c)}function C(a,b){var c=u(a,b);if(!c)return;z(a,b,c,h)}function B(b,a){var c=e(b.changedTouches,a.identifier);if(!c)return;h(a)}function h(a){b(document,d.move,a.touchmove),b(document,d.cancel,a.touchend)}function z(e,a,b,f){var c=b.pageX-a.pageX,d=b.pageY-a.pageY;if(c*c+d*d<t*t)return;E(e,a,b,c,d,f)}function E(a,b,f,c,d,i){var e=a.targetTouches,h=a.timeStamp-b.timeStamp,j={altKey:a.altKey,ctrlKey:a.ctrlKey,shiftKey:a.shiftKey,startX:b.pageX,startY:b.pageY,distX:c,distY:d,deltaX:c,deltaY:d,pageX:f.pageX,pageY:f.pageY,velocityX:c/h,velocityY:d/h,identifier:b.identifier,targetTouches:e,finger:e?e.length:1,enableMove:function(){this.moveEnabled=!0,this.enableMove=M,a.preventDefault()}};g(b.target,'movestart',j),i(b)}function v(b,a){var c=a.timer;a.touch=b,a.timeStamp=b.timeStamp,c.kick()}function s(f,a){var c=a.target,d=a.event,e=a.timer;H(),p(c,d,e,function(){setTimeout(function(){b(c,'click',q)},0)})}function H(){b(document,c.move,v),b(document,c.end,s)}function I(a,b){var c=b.event,e=b.timer,d=u(a,c);if(!d)return;a.preventDefault(),c.targetTouches=a.targetTouches,b.touch=d,b.timeStamp=a.timeStamp,e.kick()}function J(c,a){var d=a.target,b=a.event,f=a.timer,g=e(c.changedTouches,b.identifier);if(!g)return;K(a),p(d,b,f)}function K(a){b(document,d.move,a.activeTouchmove),b(document,d.end,a.activeTouchend)}function L(a,b,d){var c=d-a.timeStamp;a.distX=b.pageX-a.startX,a.distY=b.pageY-a.startY,a.deltaX=b.pageX-a.pageX,a.deltaY=b.pageY-a.pageY,a.velocityX=.3*a.velocityX+.7*a.deltaX/c,a.velocityY=.3*a.velocityY+.7*a.deltaY/c,a.pageX=b.pageX,a.pageY=b.pageY}function p(b,c,d,a){d.end(function(){return g(b,'moveend',c),a&&a()})}function S(b){var f,e;if(b.defaultPrevented)return;if(!b.moveEnabled)return;f={startX:b.startX,startY:b.startY,pageX:b.pageX,pageY:b.pageY,distX:b.distX,distY:b.distY,deltaX:b.deltaX,deltaY:b.deltaY,velocityX:b.velocityX,velocityY:b.velocityY,identifier:b.identifier,targetTouches:b.targetTouches,finger:b.finger},e={target:b.target,event:f,timer:new N(h),touch:void 0,timeStamp:b.timeStamp};function h(a){L(f,e.touch,e.timeStamp),g(e.target,'move',f)}b.identifier===void 0?(a(b.target,'click',q),a(document,c.move,v,e),a(document,c.end,s,e)):(e.activeTouchmove=function(a,b){I(a,b)},e.activeTouchend=function(a,b){J(a,b)},a(document,d.move,e.activeTouchmove,e),a(document,d.end,e.activeTouchend,e))}if(a(document,'mousedown',F),a(document,'touchstart',D),a(document,'movestart',S),!window.jQuery)return;k="startX startY pageX pageY distX distY deltaX deltaY velocityX velocityY".split(' ');function j(a){a.enableMove()}function l(a){a.enableMove()}function o(a){a.enableMove()}function f(a){var b=a.handler;a.handler=function(c){for(var d=k.length,a;d--;)a=k[d],c[a]=c.originalEvent[a];b.apply(this,arguments)}}jQuery.event.special.movestart={setup:function(){return a(this,'movestart',j),!1},teardown:function(){return b(this,'movestart',j),!1},add:f},jQuery.event.special.move={setup:function(){return a(this,'movestart',l),!1},teardown:function(){return b(this,'movestart',l),!1},add:f},jQuery.event.special.moveend={setup:function(){return a(this,'movestart',o),!1},teardown:function(){return b(this,'movestart',o),!1},add:f}})