/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.5.1-master-00d96ce
 */
!function(){"use strict";function e(){if("undefined"==typeof Hammer)throw new Error("ngMaterial requires HammerJS to be preloaded.")}function n(e){function n(e){return e.debounce=function(n){var t,r,o,i;return function(){t=arguments,i=this,o=n,r||(r=!0,e(function(){o.apply(i,t),r=!1}))}},e}e.decorator("$$rAF",["$delegate","$rootScope",n])}angular.module("material.core",[]).run(e).config(n),n.$inject=["$provide"]}(),function(){"use strict";function e(e,n){function t(e){return r?"webkit"+e.charAt(0).toUpperCase()+e.substring(1):e}var r=/webkit/i.test(n.vendorPrefix);return{KEY_CODE:{ENTER:13,ESCAPE:27,SPACE:32,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40},CSS:{TRANSITIONEND:"transitionend"+(r?" webkitTransitionEnd":""),ANIMATIONEND:"animationend"+(r?" webkitAnimationEnd":""),TRANSFORM:t("transform"),TRANSITION:t("transition"),TRANSITION_DURATION:t("transitionDuration"),ANIMATION_PLAY_STATE:t("animationPlayState"),ANIMATION_DURATION:t("animationDuration"),ANIMATION_NAME:t("animationName"),ANIMATION_TIMING:t("animationTimingFunction"),ANIMATION_DIRECTION:t("animationDirection")}}}angular.module("material.core").factory("$mdConstant",e),e.$inject=["$$rAF","$sniffer"]}(),function(){"use strict";var e=["0","0","0"];angular.module("material.core").factory("$mdUtil",["$cacheFactory",function(n){function t(e,n){function t(){return[].concat(g)}function r(){return g.length}function o(e){return g.length&&e>-1&&e<g.length}function i(e){return e?o(d(e)+1):!1}function a(e){return e?o(d(e)-1):!1}function u(e){return o(e)?g[e]:null}function c(e,n){return g.filter(function(t){return t[e]===n})}function l(e,n){return e?(angular.isNumber(n)||(n=g.length),g.splice(n,0,e),d(e)):-1}function s(e){m(e)&&g.splice(d(e),1)}function d(e){return g.indexOf(e)}function m(e){return e&&d(e)>-1}function f(e,t){if(t=t||v,m(e)){var r=d(e)+1,i=o(r)?g[r]:n?h():null;return t(i)?i:f(i,t)}return null}function p(e,t){if(t=t||v,m(e)){var r=d(e)-1,i=o(r)?g[r]:n?$():null;return t(i)?i:p(i,t)}return null}function h(){return g.length?g[0]:null}function $(){return g.length?g[g.length-1]:null}var v=function(){return!0};n=!!n;var g=e||[];return{items:t,count:r,inRange:o,contains:m,indexOf:d,itemAt:u,findBy:c,add:l,remove:s,first:h,last:$,next:f,previous:p,hasPrevious:a,hasNext:i}}function r(e,t){var r=n(e,t),o={};return r._put=r.put,r.put=function(e,n){return o[e]=!0,r._put(e,n)},r._remove=r.remove,r.remove=function(e){return delete o[e],r._remove(e)},r.keys=function(){return Object.keys(o)},r}var o;return o={now:window.performance?angular.bind(window.performance,window.performance.now):Date.now,iterator:t,cacheFactory:r,debounce:function(e,n,t){var r;return function(){var o=this,i=arguments;clearTimeout(r),r=setTimeout(function(){r=null,t||e.apply(o,i)},n),t&&!r&&e.apply(o,i)}},throttle:function(e,n){var t;return function(){var r=this,i=arguments,a=o.now();(!t||t-a>n)&&(e.apply(r,i),t=a)}},nextUid:function(){for(var n,t=e.length;t;){if(t--,n=e[t].charCodeAt(0),57==n)return e[t]="A",e.join("");if(90!=n)return e[t]=String.fromCharCode(n+1),e.join("");e[t]="0"}return e.unshift("0"),e.join("")},disconnectScope:function(e){if(e&&e.$root!==e&&!e.$$destroyed){var n=e.$parent;e.$$disconnected=!0,n.$$childHead===e&&(n.$$childHead=e.$$nextSibling),n.$$childTail===e&&(n.$$childTail=e.$$prevSibling),e.$$prevSibling&&(e.$$prevSibling.$$nextSibling=e.$$nextSibling),e.$$nextSibling&&(e.$$nextSibling.$$prevSibling=e.$$prevSibling),e.$$nextSibling=e.$$prevSibling=null}},reconnectScope:function(e){if(e&&e.$root!==e&&e.$$disconnected){var n=e,t=n.$parent;n.$$disconnected=!1,n.$$prevSibling=t.$$childTail,t.$$childHead?(t.$$childTail.$$nextSibling=n,t.$$childTail=n):t.$$childHead=t.$$childTail=n}}}}]),angular.element.prototype.focus=angular.element.prototype.focus||function(){return this.length&&this[0].focus(),this},angular.element.prototype.blur=angular.element.prototype.blur||function(){return this.length&&this[0].blur(),this}}(),function(){"use strict";function e(e,n){function t(e,t,r){var o=e[0];o.hasAttribute(t)||(r=angular.isString(r)&&r.trim()||"",r.length?e.attr(t,r):n.warn('ARIA: Attribute "',t,'", required for accessibility, is missing on node:',o))}function r(n,r,o){e(function(){t(n,r,o())})}function o(e,n){r(e,n,function(){return e.text().trim()})}return{expect:t,expectAsync:r,expectWithText:o}}angular.module("material.core").service("$mdAria",e),e.$inject=["$$rAF","$log"]}(),function(){"use strict";function e(e,n,t,r,o,i){this.compile=function(a){var u=a.templateUrl,c=a.template||"",l=a.controller,s=a.controllerAs,d=a.resolve||{},m=a.locals||{},f=a.transformTemplate||angular.identity,p=a.bindToController;return angular.forEach(d,function(e,n){d[n]=angular.isString(e)?t.get(e):t.invoke(e)}),angular.extend(d,m),d.$template=u?n.get(u,{cache:i}).then(function(e){return e.data}):e.when(c),e.all(d).then(function(e){var n=f(e.$template),t=angular.element("<div>").html(n).contents(),i=r(t);return{locals:e,element:t,link:function(n){if(e.$scope=n,l){var r=o(l,e);p&&angular.extend(r,e),t.data("$ngControllerController",r),t.children().data("$ngControllerController",r),s&&(n[s]=r)}return i(n)}}})}}angular.module("material.core").service("$mdCompiler",e),e.$inject=["$q","$http","$injector","$compile","$controller","$templateCache"]}(),function(){"use strict";function e(){function e(e){function n(e){return o.optionsFactory=e.options,o.methods=e.methods,i}function t(n,t){if(t=t||{},t.methods=t.methods||[],t.options=t.options||function(){return{}},/^cancel|hide|show$/.test(n))throw new Error("Preset '"+n+"' in "+e+" is reserved!");if(t.methods.indexOf("_options")>-1)throw new Error("Method '_options' in "+e+" is reserved!");return o.presets[n]={methods:t.methods,optionsFactory:t.options},i}function r(n,t,r){function i(e){return l.show(angular.extend({},c,(e||{})._options||e))}function a(n,t){var o={};return o[e]=s,r.invoke(n||function(){return t},{},o)}var u,c,l=n(),s={hide:l.hide,cancel:l.cancel,show:i};return u=o.methods||[],c=a(o.optionsFactory,{}),angular.forEach(o.presets,function(e,n){function t(e){this._options=angular.extend({},r,e)}var r=a(e.optionsFactory,{}),o=(e.methods||[]).concat(u);angular.extend(r,{$type:n}),angular.forEach(o,function(e){t.prototype[e]=function(n){return this._options[e]=n,this}}),s[n]=function(e){return new t(e)}}),s}var o={presets:{}},i={setDefaults:n,addPreset:t,$get:r};return i.addPreset("build",{methods:["controller","controllerAs","onRemove","onShow","resolve","template","templateUrl","themable","transformTemplate","parent"]}),r.$inject=["$$interimElement","$animate","$injector"],i}function n(e,n,t,r,o,i,a,u){return function(){function c(e){f.length&&m.cancel();var n=new d(e);return f.push(n),n.show().then(function(){return n.deferred.promise})}function l(e){var n=f.shift();n&&n.remove().then(function(){n.deferred.resolve(e)})}function s(e){var n=f.shift();n&&n.remove().then(function(){n.deferred.reject(e)})}function d(c){var l,s,d;return c=c||{},c=angular.extend({scope:c.scope||t.$new(c.isolateScope),onShow:function(e,n,t){return i.enter(n,t.parent)},onRemove:function(e,t){return t&&i.leave(t)||n.when()}},c),l={options:c,deferred:n.defer(),show:function(){return a.compile(c).then(function(t){function i(){c.hideDelay&&(s=r(m.cancel,c.hideDelay))}angular.extend(t.locals,l.options),angular.isString(c.parent)?c.parent=angular.element(e[0].querySelector(c.parent)):c.parent||(c.parent=o.find("body"),c.parent.length||(c.parent=o)),d=t.link(c.scope),c.themable&&u(d);var a=c.onShow(c.scope,d,c);return n.when(a).then(function(){(c.onComplete||angular.noop)(c.scope,d,c),i()})})},cancelTimeout:function(){s&&(r.cancel(s),s=void 0)},remove:function(){l.cancelTimeout();var e=c.onRemove(c.scope,d,c);return n.when(e).then(function(){c.scope.$destroy()})}}}var m,f=[];return m={show:c,hide:l,cancel:s}}}return e.$get=n,n.$inject=["$document","$q","$rootScope","$timeout","$rootElement","$animate","$mdCompiler","$mdTheming"],e}angular.module("material.core").provider("$$interimElement",e)}(),function(){"use strict";function e(e){return function(n,t,r){"checkbox"==r.mdInkRipple?e.attachCheckboxBehavior(t):e.attachButtonBehavior(t)}}function n(e,n){function t(e){return o(e,{center:e.hasClass("md-fab"),dimBackground:!0})}function r(e){return o(e,{center:!0,dimBackground:!1})}function o(t,r){function o(){var e;return!(t[0].hasAttribute("disabled")||(e=t[0].parentNode)&&e.hasAttribute("disabled"))}function i(e,t){n(function(){e.remove()},t,!1)}function a(o,a,u){var l=angular.element('<div class="md-ripple">');c||(c=angular.element('<div class="md-ripple-container">'),t.append(c)),c.append(l);var d=c.prop("offsetWidth"),f=c.prop("offsetHeight"),p=t.hasClass("md-fab")?1.1:.8,h=Math.max(d,f)*p;m&&(a+=m.$element.prop("scrollTop"));var $={backgroundColor:e.getComputedStyle(l[0]).color||e.getComputedStyle(s).color,width:h+"px",height:h+"px",marginLeft:h*-.5+"px",marginTop:h*-.5+"px"};if(r.center)$.left="50%",$.top="50%";else if(u){var v=s.getBoundingClientRect();o-=v.left,a-=v.top,$.left=Math.round(o/d*100)+"%",$.top=Math.round(a/f*100)+"%"}return l.css($),n(function(){r.dimBackground&&(c.addClass("md-ripple-full md-ripple-visible"),c.css({backgroundColor:$.backgroundColor.replace(")",", 0.1").replace("(","a(")})),l.addClass("md-ripple-placed md-ripple-visible md-ripple-scaled md-ripple-full"),l.css({left:"50%",top:"50%"}),n(function(){l&&(l.removeClass("md-ripple-full"),l.hasClass("md-ripple-visible")||(i(l,650),l=null)),l&&l.removeClass("md-ripple-full"),c&&r.dimBackground&&(c.removeClass("md-ripple-full"),c.hasClass("md-ripple-visible")||c.css({backgroundColor:""}))},225,!1)},0,!1),l}function u(e){e.eventType===Hammer.INPUT_START&&e.isFirst&&o()?l=a(e.center.x,e.center.y,!0):e.eventType===Hammer.INPUT_END&&e.isFinal&&(l&&(l.removeClass("md-ripple-visible"),i(l,650),l=null),c&&r.dimBackground&&(c.removeClass("md-ripple-visible"),c.hasClass("md-ripple-full")||c.css({backgroundColor:""})))}if(t.controller("mdNoInk"))return angular.noop;var c,l,s=t[0],d=new Hammer(s),m=t.controller("mdContent");return r=angular.extend({mousedown:!0,hover:!0,focus:!0,center:!1,mousedownPauseTime:150,dimBackground:!1},r||{}),r.mousedown&&d.on("hammer.input",u),function(){d.destroy(),c&&c.remove()}}return{attachButtonBehavior:t,attachCheckboxBehavior:r,attach:o}}function t(){return function(){return{controller:angular.noop}}}angular.module("material.core").factory("$mdInkRipple",n).directive("mdInkRipple",e).directive("mdNoInk",t()).directive("mdNoBar",t()).directive("mdNoStretch",t()),e.$inject=["$mdInkRipple"],n.$inject=["$window","$timeout"]}(),function(){"use strict";function e(){function e(e){function r(n,t){void 0===t&&(t=n,n=void 0),void 0===n&&(n=e),r.inherit(t,t)}return r.inherit=function(r,o){function i(e){var n=r.data("$mdThemeName");n&&r.removeClass("md-"+n+"-theme"),r.addClass("md-"+e+"-theme"),r.data("$mdThemeName",e)}var a=o.controller("mdTheme"),u=r.attr("md-theme-watch");if((t||angular.isDefined(u))&&"false"!=u){var c=e.$watch(function(){return a&&a.$mdTheme||n},i);r.on("$destroy",c)}else{var l=a&&a.$mdTheme||n;i(l)}},r}var n="default",t=!1;return{setDefaultTheme:function(e){n=e},alwaysWatchTheme:function(e){t=e},$get:["$rootScope",e]}}function n(e){return{priority:100,link:{pre:function(n,t,r){var o={$setTheme:function(e){o.$mdTheme=e}};t.data("$mdThemeController",o),o.$setTheme(e(r.mdTheme)(n)),r.$observe("mdTheme",o.$setTheme)}}}}function t(e){return e}angular.module("material.core").directive("mdTheme",n).directive("mdThemable",t).provider("$mdTheming",e),n.$inject=["$interpolate"],t.$inject=["$mdTheming"]}();