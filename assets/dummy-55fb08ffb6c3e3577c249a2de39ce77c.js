"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,n,t,r,a){var o=void 0;n.default.MODEL_FACTORY_INJECTIONS=!0,o=n.default.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:t.default}),(0,r.default)(o,a.default.modulePrefix),e.default=o}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,n,t){var r=t.default.APP.name,a=t.default.APP.version;e.default=n.default.extend({version:a,name:r})}),define("dummy/components/markdown-bold",["exports","markdown-buttons/components/markdown-bold"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/markdown-code",["exports","markdown-buttons/components/markdown-code"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/markdown-h1",["exports","markdown-buttons/components/markdown-h1"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/markdown-h2",["exports","markdown-buttons/components/markdown-h2"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/markdown-h3",["exports","markdown-buttons/components/markdown-h3"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/markdown-h4",["exports","markdown-buttons/components/markdown-h4"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/markdown-h5",["exports","markdown-buttons/components/markdown-h5"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/markdown-h6",["exports","markdown-buttons/components/markdown-h6"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/markdown-italic",["exports","markdown-buttons/components/markdown-italic"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/markdown-link",["exports","markdown-buttons/components/markdown-link"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/markdown-quote",["exports","markdown-buttons/components/markdown-quote"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/controllers/index",["exports","ember-controller"],function(e,n){e.default=n.default.extend({actions:{foo:function(e){this.set("value",e)}}})}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,n){e.default=n.default}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,n){e.default=n.default}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,n,t){e.default={name:"App Version",initialize:(0,n.default)(t.default.APP.name,t.default.APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,n){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",n.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,n){e.default={name:"data-adapter",before:"store",initialize:n.default.K}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,n,t){e.default={name:"ember-data",initialize:n.default}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,n,t){function r(){var e=arguments[1]||arguments[0];if(t.default.exportApplicationGlobal!==!1){var r,a=t.default.exportApplicationGlobal;r="string"==typeof a?a:n.default.String.classify(t.default.modulePrefix),window[r]||(window[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[r]}}))}}e.initialize=r,e.default={name:"export-application-global",initialize:r}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,n){e.default={name:"injectStore",before:"store",initialize:n.default.K}}),define("dummy/initializers/store",["exports","ember"],function(e,n){e.default={name:"store",after:"ember-data",initialize:n.default.K}}),define("dummy/initializers/transforms",["exports","ember"],function(e,n){e.default={name:"transforms",before:"store",initialize:n.default.K}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,n){e.default={name:"ember-data",initialize:n.default}}),define("dummy/resolver",["exports","ember-resolver"],function(e,n){e.default=n.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,n,t){var r=n.default.Router.extend({location:t.default.locationType});r.map(function(){}),e.default=r}),define("dummy/routes/index",["exports","ember-route"],function(e,n){e.default=n.default.extend({setupController:function(e){this._super.apply(this,arguments),e.set("value","a b c d e f g h i j k l m n o p q r s t u v w x y z\n1 2 3 4 5 6 7 8 9 0")}})}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/templates/index",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.6.2",loc:{source:null,start:{line:1,column:0},end:{line:1,column:62}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createTextNode("Bold");return e.appendChild(n,t),n},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),n=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.2",loc:{source:null,start:{line:2,column:0},end:{line:2,column:66}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createTextNode("Italic");return e.appendChild(n,t),n},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.2",loc:{source:null,start:{line:3,column:0},end:{line:3,column:62}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createTextNode("Link");return e.appendChild(n,t),n},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),r=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.2",loc:{source:null,start:{line:4,column:0},end:{line:4,column:64}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createTextNode("Quote");return e.appendChild(n,t),n},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),a=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.2",loc:{source:null,start:{line:5,column:0},end:{line:5,column:62}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createTextNode("Code");return e.appendChild(n,t),n},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),o=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.2",loc:{source:null,start:{line:6,column:0},end:{line:6,column:58}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createTextNode("H1");return e.appendChild(n,t),n},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),l=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.2",loc:{source:null,start:{line:7,column:0},end:{line:7,column:58}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createTextNode("H2");return e.appendChild(n,t),n},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),u=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.2",loc:{source:null,start:{line:8,column:0},end:{line:8,column:58}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createTextNode("H3");return e.appendChild(n,t),n},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),i=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.2",loc:{source:null,start:{line:9,column:0},end:{line:9,column:58}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createTextNode("H4");return e.appendChild(n,t),n},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),d=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.2",loc:{source:null,start:{line:10,column:0},end:{line:10,column:58}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createTextNode("H5");return e.appendChild(n,t),n},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),m=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.2",loc:{source:null,start:{line:11,column:0},end:{line:11,column:58}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createTextNode("H6");return e.appendChild(n,t),n},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type","multiple-nodes"]},revision:"Ember@2.6.2",loc:{source:null,start:{line:1,column:0},end:{line:14,column:0}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n");e.appendChild(n,t);var t=e.createElement("br");e.appendChild(n,t);var t=e.createTextNode("\n");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var r=new Array(12);return r[0]=e.createMorphAt(n,0,0,t),r[1]=e.createMorphAt(n,2,2,t),r[2]=e.createMorphAt(n,4,4,t),r[3]=e.createMorphAt(n,6,6,t),r[4]=e.createMorphAt(n,8,8,t),r[5]=e.createMorphAt(n,10,10,t),r[6]=e.createMorphAt(n,12,12,t),r[7]=e.createMorphAt(n,14,14,t),r[8]=e.createMorphAt(n,16,16,t),r[9]=e.createMorphAt(n,18,18,t),r[10]=e.createMorphAt(n,20,20,t),r[11]=e.createMorphAt(n,24,24,t),e.insertBoundary(n,0),r},statements:[["block","markdown-bold",[],["action",["subexpr","action",[["subexpr","mut",[["get","value",["loc",[null,[1,37],[1,42]]]]],[],["loc",[null,[1,32],[1,43]]]]],[],["loc",[null,[1,24],[1,44]]]],"for","input"],0,null,["loc",[null,[1,0],[1,80]]]],["block","markdown-italic",[],["action",["subexpr","action",[["subexpr","mut",[["get","value",["loc",[null,[2,39],[2,44]]]]],[],["loc",[null,[2,34],[2,45]]]]],[],["loc",[null,[2,26],[2,46]]]],"for","input"],1,null,["loc",[null,[2,0],[2,86]]]],["block","markdown-link",[],["action",["subexpr","action",[["subexpr","mut",[["get","value",["loc",[null,[3,37],[3,42]]]]],[],["loc",[null,[3,32],[3,43]]]]],[],["loc",[null,[3,24],[3,44]]]],"for","input"],2,null,["loc",[null,[3,0],[3,80]]]],["block","markdown-quote",[],["action",["subexpr","action",[["subexpr","mut",[["get","value",["loc",[null,[4,38],[4,43]]]]],[],["loc",[null,[4,33],[4,44]]]]],[],["loc",[null,[4,25],[4,45]]]],"for","input"],3,null,["loc",[null,[4,0],[4,83]]]],["block","markdown-code",[],["action",["subexpr","action",[["subexpr","mut",[["get","value",["loc",[null,[5,37],[5,42]]]]],[],["loc",[null,[5,32],[5,43]]]]],[],["loc",[null,[5,24],[5,44]]]],"for","input"],4,null,["loc",[null,[5,0],[5,80]]]],["block","markdown-h1",[],["action",["subexpr","action",[["subexpr","mut",[["get","value",["loc",[null,[6,35],[6,40]]]]],[],["loc",[null,[6,30],[6,41]]]]],[],["loc",[null,[6,22],[6,42]]]],"for","input"],5,null,["loc",[null,[6,0],[6,74]]]],["block","markdown-h2",[],["action",["subexpr","action",[["subexpr","mut",[["get","value",["loc",[null,[7,35],[7,40]]]]],[],["loc",[null,[7,30],[7,41]]]]],[],["loc",[null,[7,22],[7,42]]]],"for","input"],6,null,["loc",[null,[7,0],[7,74]]]],["block","markdown-h3",[],["action",["subexpr","action",[["subexpr","mut",[["get","value",["loc",[null,[8,35],[8,40]]]]],[],["loc",[null,[8,30],[8,41]]]]],[],["loc",[null,[8,22],[8,42]]]],"for","input"],7,null,["loc",[null,[8,0],[8,74]]]],["block","markdown-h4",[],["action",["subexpr","action",[["subexpr","mut",[["get","value",["loc",[null,[9,35],[9,40]]]]],[],["loc",[null,[9,30],[9,41]]]]],[],["loc",[null,[9,22],[9,42]]]],"for","input"],8,null,["loc",[null,[9,0],[9,74]]]],["block","markdown-h5",[],["action",["subexpr","action",[["subexpr","mut",[["get","value",["loc",[null,[10,35],[10,40]]]]],[],["loc",[null,[10,30],[10,41]]]]],[],["loc",[null,[10,22],[10,42]]]],"for","input"],9,null,["loc",[null,[10,0],[10,74]]]],["block","markdown-h6",[],["action",["subexpr","action",[["subexpr","mut",[["get","value",["loc",[null,[11,35],[11,40]]]]],[],["loc",[null,[11,30],[11,41]]]]],[],["loc",[null,[11,22],[11,42]]]],"for","input"],10,null,["loc",[null,[11,0],[11,74]]]],["inline","textarea",[],["cols","50","id","input","rows","10","value",["subexpr","readonly",[["get","value",["loc",[null,[13,58],[13,63]]]]],[],["loc",[null,[13,48],[13,64]]]]],["loc",[null,[13,0],[13,66]]]]],locals:[],templates:[e,n,t,r,a,o,l,u,i,d,m]}}())}),define("dummy/config/environment",["ember"],function(e){var n="dummy";try{var t=n+"/config/environment",r=e.default.$('meta[name="'+t+'"]').attr("content"),a=JSON.parse(unescape(r));return{default:a}}catch(e){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("dummy/app").default.create({name:"markdown-buttons",version:"0.0.0+c839f5ab"});