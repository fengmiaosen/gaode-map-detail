webpackJsonp([0],{63:function(t,e,o){"use strict";function n(t,e,o){var n=new AMap.Marker({position:new AMap.LngLat(t,e),zIndex:o}),r='<div class="my-mkr"><img src="//webapi.amap.com/theme/v1.3/markers/n/mark_r.png" alt="'+o+'" class="mkr-img"><span class="mkr-txt">'+o+"</span></div>";return n.setContent(r),n}function r(t,e){t.clearMap();var o=[],r=null;e.forEach(function(e,i){var p=e.body;if("object"==("undefined"==typeof p?"undefined":a(p))&&p.pois&&p.pois[0]){var s=p.pois[0],c=s.location.split(","),f=c[0],m=c[1];r=n(f,m,i+1,s.id,s.name),r.setMap(t),o.push(r)}}),t.setFitView(o)}Object.defineProperty(e,"__esModule",{value:!0}),e.addMarker=r;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}});
//# sourceMappingURL=0.js.map