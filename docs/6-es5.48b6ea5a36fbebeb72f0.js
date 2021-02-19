function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function _get(e,t,n){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=_superPropBase(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,i=_getPrototypeOf(e);if(t){var r=_getPrototypeOf(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{t9QY:function(e,t,n){"use strict";n.r(t);var i,r,a,s,c=n("ofXK"),o=n("tyNb"),l=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,i){var r;return _classCallCheck(this,n),(r=t.call(this,e,i)).scheduler=e,r.work=i,r.pending=!1,r}return _createClass(n,[{key:"schedule",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(this.closed)return this;this.state=e;var n=this.id,i=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(i,n,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(i,this.id,t),this}},{key:"requestAsyncId",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return setInterval(e.flush.bind(e,this),n)}},{key:"recycleAsyncId",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(null!==n&&this.delay===n&&!1===this.pending)return t;clearInterval(t)}},{key:"execute",value:function(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(e,t);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}},{key:"_execute",value:function(e,t){var n=!1,i=void 0;try{this.work(e)}catch(r){n=!0,i=!!r&&r||new Error(r)}if(n)return this.unsubscribe(),i}},{key:"_unsubscribe",value:function(){var e=this.id,t=this.scheduler,n=t.actions,i=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==i&&n.splice(i,1),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null}}]),n}(function(e){_inherits(n,e);var t=_createSuper(n);function n(e,i){return _classCallCheck(this,n),t.call(this)}return _createClass(n,[{key:"schedule",value:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this}}]),n}(n("quSY").a)),u=function(){var e=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.now;_classCallCheck(this,e),this.SchedulerAction=t,this.now=n}return _createClass(e,[{key:"schedule",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2?arguments[2]:void 0;return new this.SchedulerAction(this,e).schedule(n,t)}}]),e}();return e.now=function(){return Date.now()},e}(),d=new(function(e){_inherits(n,e);var t=_createSuper(n);function n(e){var i,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.now;return _classCallCheck(this,n),(i=t.call(this,e,(function(){return n.delegate&&n.delegate!==_assertThisInitialized(i)?n.delegate.now():r()}))).actions=[],i.active=!1,i.scheduled=void 0,i}return _createClass(n,[{key:"schedule",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0;return n.delegate&&n.delegate!==this?n.delegate.schedule(e,t,i):_get(_getPrototypeOf(n.prototype),"schedule",this).call(this,e,t,i)}},{key:"flush",value:function(e){var t=this.actions;if(this.active)t.push(e);else{var n;this.active=!0;do{if(n=e.execute(e.state,e.delay))break}while(e=t.shift());if(this.active=!1,n){for(;e=t.shift();)e.unsubscribe();throw n}}}}]),n}(u))(l),p=n("7o/Q"),f=n("EY2u"),b=n("LRne"),h=n("HDdC"),g=((i=function(){function e(t,n,i){_classCallCheck(this,e),this.kind=t,this.value=n,this.error=i,this.hasValue="N"===t}return _createClass(e,[{key:"observe",value:function(e){switch(this.kind){case"N":return e.next&&e.next(this.value);case"E":return e.error&&e.error(this.error);case"C":return e.complete&&e.complete()}}},{key:"do",value:function(e,t,n){switch(this.kind){case"N":return e&&e(this.value);case"E":return t&&t(this.error);case"C":return n&&n()}}},{key:"accept",value:function(e,t,n){return e&&"function"==typeof e.next?this.observe(e):this.do(e,t,n)}},{key:"toObservable",value:function(){switch(this.kind){case"N":return Object(b.a)(this.value);case"E":return e=this.error,new h.a((function(t){return t.error(e)}));case"C":return Object(f.b)()}var e;throw new Error("unexpected notification kind value")}}],[{key:"createNext",value:function(t){return void 0!==t?new e("N",t):e.undefinedValueNotification}},{key:"createError",value:function(t){return new e("E",void 0,t)}},{key:"createComplete",value:function(){return e.completeNotification}}]),e}()).completeNotification=new i("C"),i.undefinedValueNotification=new i("N",void 0),i),v=function(){function e(t,n){_classCallCheck(this,e),this.delay=t,this.scheduler=n}return _createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new y(e,this.delay,this.scheduler))}}]),e}(),y=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,i,r){var a;return _classCallCheck(this,n),(a=t.call(this,e)).delay=i,a.scheduler=r,a.queue=[],a.active=!1,a.errored=!1,a}return _createClass(n,[{key:"_schedule",value:function(e){this.active=!0,this.destination.add(e.schedule(n.dispatch,this.delay,{source:this,destination:this.destination,scheduler:e}))}},{key:"scheduleNotification",value:function(e){if(!0!==this.errored){var t=this.scheduler,n=new _(t.now()+this.delay,e);this.queue.push(n),!1===this.active&&this._schedule(t)}}},{key:"_next",value:function(e){this.scheduleNotification(g.createNext(e))}},{key:"_error",value:function(e){this.errored=!0,this.queue=[],this.destination.error(e),this.unsubscribe()}},{key:"_complete",value:function(){this.scheduleNotification(g.createComplete()),this.unsubscribe()}}],[{key:"dispatch",value:function(e){for(var t=e.source,n=t.queue,i=e.scheduler,r=e.destination;n.length>0&&n[0].time-i.now()<=0;)n.shift().notification.observe(r);if(n.length>0){var a=Math.max(0,n[0].time-i.now());this.schedule(e,a)}else this.unsubscribe(),t.active=!1}}]),n}(p.a),_=function e(t,n){_classCallCheck(this,e),this.time=t,this.notification=n},m=n("vkgz"),w=n("fXoL"),C=n("2Vo4"),k=n("lJxs"),O=n("eIep"),P=n("JIr8"),x=n("9rBi"),j=((r=function(){function e(t){_classCallCheck(this,e),this._swapi=t,this._planets$=new C.a([]),this.planets$=this._planets$.asObservable(),this.planetsByPage=10,this._alreadyLoadedPages=[],this._alreadyLoadedPlanets=[]}return _createClass(e,[{key:"planets",get:function(){return this._planets$.getValue()}},{key:"getPlanets",value:function(e){var t=this;return this._isPageAlreadyLoaded(e)?this._planets$.pipe(Object(k.a)((function(n){return n.filter((function(n){return n.idx>=(e-1)*t.planetsByPage&&n.idx<e*t.planetsByPage}))}))):this.loadByPage(e).pipe(Object(O.a)((function(){return t._planets$})),Object(k.a)((function(n){return n.filter((function(n){return n.idx>=(e-1)*t.planetsByPage&&n.idx<e*t.planetsByPage}))})))}},{key:"getPlanetById",value:function(e){var t=this;return this._isPlanetAlreadyLoaded(e)?this._planets$.pipe(Object(k.a)((function(t){return t.find((function(t){return t.id===e}))}))):this.loadById(e).pipe(Object(O.a)((function(){return t._planets$})),Object(k.a)((function(t){return t.find((function(t){return t.id===e}))})))}},{key:"_isPageAlreadyLoaded",value:function(e){return this._alreadyLoadedPages.includes(e)}},{key:"_isPlanetAlreadyLoaded",value:function(e){return this._alreadyLoadedPlanets.includes(e)}},{key:"loadByPage",value:function(e){var t=this;return this._swapi.getPlanets({page:e}).pipe(Object(P.a)((function(){return Object(b.a)(null)})),Object(m.a)((function(e){t.planetsByPage=e.results.length,t.totalPages=e.count/t.planetsByPage})),Object(k.a)(this._mapPlanets.bind(this)),Object(m.a)((function(n){var i=[].concat(_toConsumableArray(t.planets.filter((function(e){return!n.map((function(e){return e.id})).includes(e.id)}))),_toConsumableArray(n));t._planets$.next(i),t._alreadyLoadedPlanets=i.map((function(e){return e.id})),t._alreadyLoadedPages.push(e)})))}},{key:"loadById",value:function(e){var t=this;return this._swapi.getSinglePlanet(e).pipe(Object(P.a)((function(){return Object(b.a)(null)})),Object(k.a)(this._mapSinglePlanet.bind(this)),Object(m.a)((function(e){if(e){var n=_toConsumableArray(t.planets);n.map((function(e){return e.id})).includes(e.id)||n.push(e),t._planets$.next(n),t._alreadyLoadedPlanets=n.map((function(e){return e.id}))}})))}},{key:"_mapPlanets",value:function(e){return e?e.results.map(this._mapSinglePlanet.bind(this)):[]}},{key:"_mapSinglePlanet",value:function(e){return e?{id:+/[^/]*$/.exec(e.url.substring(0,e.url.length-1))[0],idx:+/[^/]*$/.exec(e.url.substring(0,e.url.length-1))[0]-1,name:e.name,rotation_period:e.rotation_period,diameter:e.diameter,climate:e.climate,gravity:e.gravity,terrain:e.terrain,population:e.population,residents:e.residents.map((function(e){return+/[^/]*$/.exec(e.substring(0,e.length-1))[0]}))}:null}}]),e}()).\u0275fac=function(e){return new(e||r)(w.Nb(x.a))},r.\u0275prov=w.Bb({token:r,factory:r.\u0275fac,providedIn:"root"}),r),J=["*"],I=((a=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=w.zb({type:a,selectors:[["app-planets-header"]],inputs:{page:"page"},ngContentSelectors:J,decls:3,vars:0,consts:[[1,"header"],[1,"container"]],template:function(e,t){1&e&&(w.Yb(),w.Kb(0,"header",0),w.Kb(1,"div",1),w.Xb(2),w.Jb(),w.Jb())},styles:[".header[_ngcontent-%COMP%]{padding:25px 0;background-color:#272b30;font-size:22px;text-align:center;color:#fff}"]}),a),K=function(e){return["/","planets",e]},A=((s=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||s)},s.\u0275cmp=w.zb({type:s,selectors:[["app-planet-preview"]],inputs:{planet:"planet"},decls:15,vars:6,consts:[[1,"planet"],[1,"planet__name"],[1,"row"],[1,"planet__climate"],[1,"planet__population"],[1,"actions"],[1,"btn","btn--sm",3,"routerLink"]],template:function(e,t){1&e&&(w.Kb(0,"div",0),w.Kb(1,"div",1),w.ic(2),w.Jb(),w.Kb(3,"div",2),w.Kb(4,"div",3),w.ic(5,"Climate: "),w.Kb(6,"b"),w.ic(7),w.Jb(),w.Jb(),w.Kb(8,"div",4),w.ic(9,"Population: "),w.Kb(10,"b"),w.ic(11),w.Jb(),w.Jb(),w.Jb(),w.Kb(12,"div",5),w.Kb(13,"a",6),w.ic(14,"More"),w.Jb(),w.Jb(),w.Jb()),2&e&&(w.wb(2),w.jc(t.planet.name),w.wb(5),w.jc(t.planet.climate),w.wb(4),w.jc(t.planet.population),w.wb(2),w.Zb("routerLink",w.ac(4,K,t.planet.id)))},directives:[o.d],styles:[".planet[_ngcontent-%COMP%]{padding:20px;border-radius:10px;background-color:#fff;margin-bottom:20px}.planet__name[_ngcontent-%COMP%]{font-size:22px;margin-bottom:10px;font-weight:700;text-align:center}.row[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.actions[_ngcontent-%COMP%]{margin-top:20px;text-align:center}"]}),s),M=n("6fPx");function L(e,t){1&e&&w.Gb(0,"app-planet-preview",7),2&e&&w.Zb("planet",t.$implicit)}function N(e,t){if(1&e&&(w.Ib(0),w.gc(1,L,1,1,"app-planet-preview",6),w.Hb()),2&e){var n=t.ngIf;w.wb(1),w.Zb("ngForOf",n)}}function S(e,t){1&e&&w.Gb(0,"app-preloader")}function $(e,t){if(1&e&&(w.Kb(0,"div",3),w.gc(1,N,2,1,"ng-container",4),w.Vb(2,"async"),w.gc(3,S,1,0,"ng-template",null,5,w.hc),w.Jb()),2&e){var n=t.$implicit,i=w.cc(4);w.wb(1),w.Zb("ngIf",w.Wb(2,2,n))("ngIfElse",i)}}function B(e,t){if(1&e){var n=w.Lb();w.Kb(0,"button",10),w.Rb("click",(function(){return w.dc(n),w.Ub(2).loadNext()})),w.ic(1,"Load more"),w.Jb()}}function E(e,t){if(1&e&&(w.Kb(0,"div",8),w.gc(1,B,2,0,"button",9),w.Jb()),2&e){var n=w.Ub();w.wb(1),w.Zb("ngIf",n.planets.totalPages>n.currentPage)}}var R,T,F=((R=function(){function e(t){_classCallCheck(this,e),this.planets=t,this.currentPage=0,this.list$=[]}return _createClass(e,[{key:"ngOnInit",value:function(){this.loadNext()}},{key:"loadNext",value:function(){var e=this;this.isLoadingMore=!0,this.currentPage++,this.list$.push(this.planets.getPlanets(this.currentPage).pipe(function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,i=(t=e)instanceof Date&&!isNaN(+t)?+e-n.now():Math.abs(e);return function(e){return e.lift(new v(i,n))}}(0),Object(m.a)((function(){return e.isLoadingMore=!1}))))}}]),e}()).\u0275fac=function(e){return new(e||R)(w.Fb(j))},R.\u0275cmp=w.zb({type:R,selectors:[["app-planets-page"]],decls:7,vars:3,consts:[[1,"container"],["class","row",4,"ngFor","ngForOf"],["class","actions",4,"ngIf"],[1,"row"],[4,"ngIf","ngIfElse"],["loading",""],[3,"planet",4,"ngFor","ngForOf"],[3,"planet"],[1,"actions"],["type","button","class","btn",3,"click",4,"ngIf"],["type","button",1,"btn",3,"click"]],template:function(e,t){1&e&&(w.Kb(0,"app-planets-header"),w.ic(1," Current page: "),w.Kb(2,"b"),w.ic(3),w.Jb(),w.Jb(),w.Kb(4,"div",0),w.gc(5,$,5,4,"div",1),w.gc(6,E,2,1,"div",2),w.Jb()),2&e&&(w.wb(3),w.jc(t.currentPage),w.wb(2),w.Zb("ngForOf",t.list$),w.wb(1),w.Zb("ngIf",!t.isLoadingMore))},directives:[I,c.i,c.j,A,M.a],pipes:[c.b],styles:["[_nghost-%COMP%]{display:block;padding-top:100px;padding-bottom:50px}.row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;margin:0 -15px}.row[_ngcontent-%COMP%]   app-planet-preview[_ngcontent-%COMP%]{display:block;flex:1 0 25%;padding:0 15px}.actions[_ngcontent-%COMP%]{text-align:center}app-planets-header[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%}"]}),R),z=n("PCNd"),Z=n("itXk"),D=n("tUhB"),V=function(e){return["/","residents",e]},q=((T=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||T)},T.\u0275cmp=w.zb({type:T,selectors:[["app-resident-preview"]],inputs:{resident:"resident"},decls:19,vars:7,consts:[[1,"resident"],[1,"resident__name"],[1,"row"],[1,"resident__param"],[1,"actions"],[1,"btn","btn--sm",3,"routerLink"]],template:function(e,t){1&e&&(w.Kb(0,"div",0),w.Kb(1,"div",1),w.ic(2),w.Jb(),w.Kb(3,"div",2),w.Kb(4,"div",3),w.ic(5,"Height: "),w.Kb(6,"b"),w.ic(7),w.Jb(),w.Jb(),w.Kb(8,"div",3),w.ic(9,"Mass: "),w.Kb(10,"b"),w.ic(11),w.Jb(),w.Jb(),w.Kb(12,"div",3),w.ic(13,"Gender: "),w.Kb(14,"b"),w.ic(15),w.Jb(),w.Jb(),w.Jb(),w.Kb(16,"div",4),w.Kb(17,"a",5),w.ic(18,"More"),w.Jb(),w.Jb(),w.Jb()),2&e&&(w.wb(2),w.jc(t.resident.name),w.wb(5),w.jc(t.resident.height),w.wb(4),w.jc(t.resident.mass),w.wb(4),w.jc(t.resident.gender),w.wb(2),w.Zb("routerLink",w.ac(5,V,t.resident.id)))},directives:[o.d],styles:[".resident[_ngcontent-%COMP%]{padding:20px;border-radius:0;color:#fff;margin-bottom:20px;background-color:#272b30;min-width:200px}.resident__name[_ngcontent-%COMP%]{font-size:22px;margin-bottom:10px;font-weight:700;text-align:center}.actions[_ngcontent-%COMP%]{margin-top:20px;text-align:center}.resident__param[_ngcontent-%COMP%]{margin-bottom:10px;text-align:center}"]}),T);function G(e,t){1&e&&w.Gb(0,"app-resident-preview",10),2&e&&w.Zb("resident",t.$implicit)}function H(e,t){if(1&e&&(w.Ib(0),w.gc(1,G,1,1,"app-resident-preview",9),w.Hb()),2&e){var n=t.ngIf;w.wb(1),w.Zb("ngForOf",n)}}function W(e,t){1&e&&w.Gb(0,"app-preloader")}function U(e,t){if(1&e&&(w.Ib(0),w.Kb(1,"div",3),w.ic(2),w.Jb(),w.Kb(3,"div",4),w.Kb(4,"div",5),w.ic(5,"Rotation period:"),w.Jb(),w.Kb(6,"div",6),w.ic(7),w.Jb(),w.Jb(),w.Kb(8,"div",4),w.Kb(9,"div",5),w.ic(10,"Diameter:"),w.Jb(),w.Kb(11,"div",6),w.ic(12),w.Jb(),w.Jb(),w.Kb(13,"div",4),w.Kb(14,"div",5),w.ic(15,"Climate:"),w.Jb(),w.Kb(16,"div",6),w.ic(17),w.Jb(),w.Jb(),w.Kb(18,"div",4),w.Kb(19,"div",5),w.ic(20,"Gravity:"),w.Jb(),w.Kb(21,"div",6),w.ic(22),w.Jb(),w.Jb(),w.Kb(23,"div",4),w.Kb(24,"div",5),w.ic(25,"Terrain:"),w.Jb(),w.Kb(26,"div",6),w.ic(27),w.Jb(),w.Jb(),w.Kb(28,"div",4),w.Kb(29,"div",5),w.ic(30,"Population:"),w.Jb(),w.Kb(31,"div",6),w.ic(32),w.Jb(),w.Jb(),w.Kb(33,"div",7),w.gc(34,H,2,1,"ng-container",1),w.Vb(35,"async"),w.gc(36,W,1,0,"ng-template",null,8,w.hc),w.Jb(),w.Hb()),2&e){var n=t.ngIf,i=w.cc(37);w.wb(2),w.jc(n.name),w.wb(5),w.jc(n.rotation_period),w.wb(5),w.jc(n.diameter),w.wb(5),w.jc(n.climate),w.wb(5),w.jc(n.gravity),w.wb(5),w.jc(n.terrain),w.wb(5),w.jc(n.population),w.wb(2),w.Zb("ngIf",w.Wb(35,9,n.residents))("ngIfElse",i)}}function X(e,t){1&e&&w.Gb(0,"app-preloader",11)}var Y,Q=((Y=function(){function e(t,n,i,r){var a=this;_classCallCheck(this,e),this._route=t,this._planets=n,this._residents=i,this._router=r,this.planet$=this._route.params.pipe(Object(O.a)((function(e){return a._planets.getPlanetById(+e.id)})),Object(k.a)((function(e){return e?Object.assign(Object.assign({},e),{residents:e.residents.length?Object(Z.a)(e.residents.map((function(e){return a._residents.getResidentById(e)}))):Object(b.a)([])}):(a._router.navigate(["/","404"]),Object(b.a)(null))})))}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||Y)(w.Fb(o.a),w.Fb(j),w.Fb(D.a),w.Fb(o.c))},Y.\u0275cmp=w.zb({type:Y,selectors:[["app-planet-single-page"]],decls:5,vars:4,consts:[[1,"container"],[4,"ngIf","ngIfElse"],["loading",""],[1,"page-title"],[1,"param"],[1,"param__title"],[1,"param__value"],[1,"residents"],["resLoading",""],[3,"resident",4,"ngFor","ngForOf"],[3,"resident"],[1,"main-preloader"]],template:function(e,t){if(1&e&&(w.Kb(0,"div",0),w.gc(1,U,38,11,"ng-container",1),w.Vb(2,"async"),w.gc(3,X,1,0,"ng-template",null,2,w.hc),w.Jb()),2&e){var n=w.cc(4);w.wb(1),w.Zb("ngIf",w.Wb(2,2,t.planet$))("ngIfElse",n)}},directives:[c.j,c.i,q,M.a],pipes:[c.b],styles:[".param[_ngcontent-%COMP%]{display:flex;width:300px;justify-content:space-between;margin-bottom:20px;color:#fff}.param__value[_ngcontent-%COMP%]{font-size:16px;font-weight:700}.residents[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-top:40px}app-resident-preview[_ngcontent-%COMP%]{display:block;margin-right:10px}.main-preloader[_ngcontent-%COMP%]{margin:50px 0}"]}),Y);n.d(t,"PlanetsModule",(function(){return te}));var ee,te=((ee=function e(){_classCallCheck(this,e)}).\u0275mod=w.Db({type:ee}),ee.\u0275inj=w.Cb({factory:function(e){return new(e||ee)},imports:[[c.c,z.a,o.e.forChild([{path:"",component:F},{path:":id",component:Q}])],o.e]}),ee)}}]);