function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"6fPx":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("fXoL"),i=function(){var e=function(){function e(){_classCallCheck(this,e),this.color="#fff"}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.zb({type:e,selectors:[["app-preloader"]],inputs:{color:"color"},decls:16,vars:1,consts:[["width","135","height","140","viewBox","0 0 135 140","xmlns","http://www.w3.org/2000/svg"],["y","10","width","15","height","120","rx","6"],["attributeName","height","begin","0.5s","dur","1s","values","120;110;100;90;80;70;60;50;40;140;120","calcMode","linear","repeatCount","indefinite"],["attributeName","y","begin","0.5s","dur","1s","values","10;15;20;25;30;35;40;45;50;0;10","calcMode","linear","repeatCount","indefinite"],["x","30","y","10","width","15","height","120","rx","6"],["attributeName","height","begin","0.25s","dur","1s","values","120;110;100;90;80;70;60;50;40;140;120","calcMode","linear","repeatCount","indefinite"],["attributeName","y","begin","0.25s","dur","1s","values","10;15;20;25;30;35;40;45;50;0;10","calcMode","linear","repeatCount","indefinite"],["x","60","width","15","height","140","rx","6"],["attributeName","height","begin","0s","dur","1s","values","120;110;100;90;80;70;60;50;40;140;120","calcMode","linear","repeatCount","indefinite"],["attributeName","y","begin","0s","dur","1s","values","10;15;20;25;30;35;40;45;50;0;10","calcMode","linear","repeatCount","indefinite"],["x","90","y","10","width","15","height","120","rx","6"],["x","120","y","10","width","15","height","120","rx","6"]],template:function(e,t){1&e&&(r.Tb(),r.Kb(0,"svg",0),r.Kb(1,"rect",1),r.Gb(2,"animate",2),r.Gb(3,"animate",3),r.Jb(),r.Kb(4,"rect",4),r.Gb(5,"animate",5),r.Gb(6,"animate",6),r.Jb(),r.Kb(7,"rect",7),r.Gb(8,"animate",8),r.Gb(9,"animate",9),r.Jb(),r.Kb(10,"rect",10),r.Gb(11,"animate",5),r.Gb(12,"animate",6),r.Jb(),r.Kb(13,"rect",11),r.Gb(14,"animate",2),r.Gb(15,"animate",3),r.Jb(),r.Jb()),2&e&&r.xb("fill",t.color)},styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;height:40px;width:100%;box-sizing:border-box;overflow:hidden}svg[_ngcontent-%COMP%]{height:100%}"]}),e}()},"9rBi":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("AytR"),i=n("fXoL"),a=n("tk/3"),o=function(){var e=function(){function e(t){_classCallCheck(this,e),this._http=t}return _createClass(e,[{key:"getPlanets",value:function(e){return this._http.get(r.a.apiHost+"/planets",{params:e})}},{key:"getSinglePlanet",value:function(e){return this._http.get(r.a.apiHost+"/planets/"+e)}},{key:"getSingleResident",value:function(e){return this._http.get(r.a.apiHost+"/people/"+e)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(i.Nb(a.a))},e.\u0275prov=i.Bb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},PCNd:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("ofXK"),i=n("tyNb"),a=n("fXoL"),o=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=a.Db({type:e}),e.\u0275inj=a.Cb({factory:function(t){return new(t||e)},imports:[[r.c,i.e]]}),e}()},tUhB:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("2Vo4"),i=n("LRne"),a=n("lJxs"),o=n("eIep"),s=n("JIr8"),u=n("vkgz"),c=n("fXoL"),l=n("9rBi"),d=function(){var e=function(){function e(t){_classCallCheck(this,e),this._swapi=t,this._residents$=new r.a([]),this.residents$=this._residents$.asObservable(),this._alreadyLoadedResidents=[]}return _createClass(e,[{key:"residents",get:function(){return this._residents$.getValue()}},{key:"getResidentById",value:function(e){var t=this;return this._isResidentAlreadyLoaded(e)?this._residents$.pipe(Object(a.a)((function(t){return t.find((function(t){return t.id===e}))}))):this.loadById(e).pipe(Object(o.a)((function(){return t._residents$})),Object(a.a)((function(t){return t.find((function(t){return t.id===e}))})))}},{key:"loadById",value:function(e){var t=this;return this._swapi.getSingleResident(e).pipe(Object(s.a)((function(){return Object(i.a)(null)})),Object(a.a)(this._mapSingleResident.bind(this)),Object(u.a)((function(e){if(e){var n=_toConsumableArray(t.residents);n.map((function(e){return e.id})).includes(e.id)||n.push(e),t._residents$.next(n),t._alreadyLoadedResidents=n.map((function(e){return e.id}))}})))}},{key:"_isResidentAlreadyLoaded",value:function(e){return this._alreadyLoadedResidents.includes(e)}},{key:"_mapSingleResident",value:function(e){return e?{id:+/[^/]*$/.exec(e.url.substring(0,e.url.length-1))[0],name:e.name,height:e.height,mass:e.mass,gender:e.gender}:null}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.Nb(l.a))},e.\u0275prov=c.Bb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}]);