(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"6fPx":function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var n=i("fXoL");let r=(()=>{class e{constructor(){this.color="#fff"}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.zb({type:e,selectors:[["app-preloader"]],inputs:{color:"color"},decls:16,vars:1,consts:[["width","135","height","140","viewBox","0 0 135 140","xmlns","http://www.w3.org/2000/svg"],["y","10","width","15","height","120","rx","6"],["attributeName","height","begin","0.5s","dur","1s","values","120;110;100;90;80;70;60;50;40;140;120","calcMode","linear","repeatCount","indefinite"],["attributeName","y","begin","0.5s","dur","1s","values","10;15;20;25;30;35;40;45;50;0;10","calcMode","linear","repeatCount","indefinite"],["x","30","y","10","width","15","height","120","rx","6"],["attributeName","height","begin","0.25s","dur","1s","values","120;110;100;90;80;70;60;50;40;140;120","calcMode","linear","repeatCount","indefinite"],["attributeName","y","begin","0.25s","dur","1s","values","10;15;20;25;30;35;40;45;50;0;10","calcMode","linear","repeatCount","indefinite"],["x","60","width","15","height","140","rx","6"],["attributeName","height","begin","0s","dur","1s","values","120;110;100;90;80;70;60;50;40;140;120","calcMode","linear","repeatCount","indefinite"],["attributeName","y","begin","0s","dur","1s","values","10;15;20;25;30;35;40;45;50;0;10","calcMode","linear","repeatCount","indefinite"],["x","90","y","10","width","15","height","120","rx","6"],["x","120","y","10","width","15","height","120","rx","6"]],template:function(e,t){1&e&&(n.Tb(),n.Kb(0,"svg",0),n.Kb(1,"rect",1),n.Gb(2,"animate",2),n.Gb(3,"animate",3),n.Jb(),n.Kb(4,"rect",4),n.Gb(5,"animate",5),n.Gb(6,"animate",6),n.Jb(),n.Kb(7,"rect",7),n.Gb(8,"animate",8),n.Gb(9,"animate",9),n.Jb(),n.Kb(10,"rect",10),n.Gb(11,"animate",5),n.Gb(12,"animate",6),n.Jb(),n.Kb(13,"rect",11),n.Gb(14,"animate",2),n.Gb(15,"animate",3),n.Jb(),n.Jb()),2&e&&n.xb("fill",t.color)},styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;height:40px;width:100%;box-sizing:border-box;overflow:hidden}svg[_ngcontent-%COMP%]{height:100%}"]}),e})()},"9rBi":function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var n=i("AytR"),r=i("fXoL"),s=i("tk/3");let a=(()=>{class e{constructor(e){this._http=e}getPlanets(e){return this._http.get(n.a.apiHost+"/planets",{params:e})}getSinglePlanet(e){return this._http.get(n.a.apiHost+"/planets/"+e)}getSingleResident(e){return this._http.get(n.a.apiHost+"/people/"+e)}}return e.\u0275fac=function(t){return new(t||e)(r.Nb(s.a))},e.\u0275prov=r.Bb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},PCNd:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var n=i("ofXK"),r=i("tyNb"),s=i("fXoL");let a=(()=>{class e{}return e.\u0275mod=s.Db({type:e}),e.\u0275inj=s.Cb({factory:function(t){return new(t||e)},imports:[[n.c,r.e]]}),e})()},tUhB:function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var n=i("2Vo4"),r=i("LRne"),s=i("lJxs"),a=i("eIep"),d=i("JIr8"),o=i("vkgz"),c=i("fXoL"),u=i("9rBi");let l=(()=>{class e{constructor(e){this._swapi=e,this._residents$=new n.a([]),this.residents$=this._residents$.asObservable(),this._alreadyLoadedResidents=[]}get residents(){return this._residents$.getValue()}getResidentById(e){return this._isResidentAlreadyLoaded(e)?this._residents$.pipe(Object(s.a)(t=>t.find(t=>t.id===e))):this.loadById(e).pipe(Object(a.a)(()=>this._residents$),Object(s.a)(t=>t.find(t=>t.id===e)))}loadById(e){return this._swapi.getSingleResident(e).pipe(Object(d.a)(()=>Object(r.a)(null)),Object(s.a)(this._mapSingleResident.bind(this)),Object(o.a)(e=>{if(!e)return;const t=[...this.residents];t.map(e=>e.id).includes(e.id)||t.push(e),this._residents$.next(t),this._alreadyLoadedResidents=t.map(e=>e.id)}))}_isResidentAlreadyLoaded(e){return this._alreadyLoadedResidents.includes(e)}_mapSingleResident(e){return e?{id:+/[^/]*$/.exec(e.url.substring(0,e.url.length-1))[0],name:e.name,height:e.height,mass:e.mass,gender:e.gender}:null}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(u.a))},e.\u0275prov=c.Bb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);