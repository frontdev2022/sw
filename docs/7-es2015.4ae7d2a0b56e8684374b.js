(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"56Xv":function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),a=n("PCNd"),c=n("tyNb"),r=n("eIep"),s=n("vkgz"),b=n("LRne"),o=n("fXoL"),p=n("tUhB"),d=n("6fPx");function l(e,t){if(1&e&&(o.Ib(0),o.Kb(1,"div",3),o.ic(2),o.Jb(),o.Kb(3,"div",4),o.Kb(4,"div",5),o.ic(5,"Height:"),o.Jb(),o.Kb(6,"div",6),o.ic(7),o.Jb(),o.Jb(),o.Kb(8,"div",4),o.Kb(9,"div",5),o.ic(10,"Mass:"),o.Jb(),o.Kb(11,"div",6),o.ic(12),o.Jb(),o.Jb(),o.Kb(13,"div",4),o.Kb(14,"div",5),o.ic(15,"Gender:"),o.Jb(),o.Kb(16,"div",6),o.ic(17),o.Jb(),o.Jb(),o.Hb()),2&e){const e=t.ngIf;o.wb(2),o.jc(e.name),o.wb(5),o.jc(e.height),o.wb(5),o.jc(e.mass),o.wb(5),o.jc(e.gender)}}function f(e,t){1&e&&o.Gb(0,"app-preloader",7)}let u=(()=>{class e{constructor(e,t,n){this._route=e,this._residents=t,this._router=n,this.resident$=this._route.params.pipe(Object(r.a)(e=>this._residents.getResidentById(+e.id)),Object(s.a)(e=>{if(!e)return this._router.navigate(["/","404"]),Object(b.a)(null)}))}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(o.Fb(c.a),o.Fb(p.a),o.Fb(c.c))},e.\u0275cmp=o.zb({type:e,selectors:[["app-resident-single-page"]],decls:5,vars:4,consts:[[1,"container"],[4,"ngIf","ngIfElse"],["loading",""],[1,"page-title"],[1,"param"],[1,"param__title"],[1,"param__value"],[1,"main-preloader"]],template:function(e,t){if(1&e&&(o.Kb(0,"div",0),o.gc(1,l,18,4,"ng-container",1),o.Vb(2,"async"),o.gc(3,f,1,0,"ng-template",null,2,o.hc),o.Jb()),2&e){const e=o.cc(4);o.wb(1),o.Zb("ngIf",o.Wb(2,2,t.resident$))("ngIfElse",e)}},directives:[i.j,d.a],pipes:[i.b],styles:[".param[_ngcontent-%COMP%]{display:flex;width:300px;justify-content:space-between;margin-bottom:20px;color:#fff}.param__value[_ngcontent-%COMP%]{font-size:16px;font-weight:700}.main-preloader[_ngcontent-%COMP%]{margin:50px 0}"]}),e})();n.d(t,"ResidentsModule",(function(){return g}));let g=(()=>{class e{}return e.\u0275mod=o.Db({type:e}),e.\u0275inj=o.Cb({factory:function(t){return new(t||e)},imports:[[i.c,a.a,c.e.forChild([{path:"",pathMatch:"full",redirectTo:"/404"},{path:":id",component:u}])],c.e]}),e})()}}]);