(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77638066"],{"00b4":function(t,e,r){"use strict";r("ac1f");var i=r("23e7"),a=r("da84"),n=r("c65b"),s=r("e330"),o=r("1626"),c=r("861d"),l=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),u=a.Error,d=s(/./.test);i({target:"RegExp",proto:!0,forced:!l},{test:function(t){var e=this.exec;if(!o(e))return d(this,t);var r=n(e,this,t);if(null!==r&&!c(r))throw new u("RegExp exec method returned something other than an Object or null");return!!r}})},1276:function(t,e,r){"use strict";var i=r("2ba4"),a=r("c65b"),n=r("e330"),s=r("d784"),o=r("44e7"),c=r("825a"),l=r("1d80"),u=r("4840"),d=r("8aa5"),f=r("50c4"),v=r("577e"),p=r("dc4a"),h=r("f36a"),g=r("14c3"),m=r("9263"),y=r("9f7f"),b=r("d039"),_=y.UNSUPPORTED_Y,k=4294967295,C=Math.min,x=[].push,w=n(/./.exec),I=n(x),$=n("".slice),A=!b((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));s("split",(function(t,e,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var n=v(l(this)),s=void 0===r?k:r>>>0;if(0===s)return[];if(void 0===t)return[n];if(!o(t))return a(e,n,t,s);var c,u,d,f=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,y=new RegExp(t.source,p+"g");while(c=a(m,y,n)){if(u=y.lastIndex,u>g&&(I(f,$(n,g,c.index)),c.length>1&&c.index<n.length&&i(x,f,h(c,1)),d=c[0].length,g=u,f.length>=s))break;y.lastIndex===c.index&&y.lastIndex++}return g===n.length?!d&&w(y,"")||I(f,""):I(f,$(n,g)),f.length>s?h(f,0,s):f}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:a(e,this,t,r)}:e,[function(e,r){var i=l(this),s=void 0==e?void 0:p(e,t);return s?a(s,e,i,r):a(n,v(i),e,r)},function(t,i){var a=c(this),s=v(t),o=r(n,a,s,i,n!==e);if(o.done)return o.value;var l=u(a,RegExp),p=a.unicode,h=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(_?"g":"y"),m=new l(_?"^(?:"+a.source+")":a,h),y=void 0===i?k:i>>>0;if(0===y)return[];if(0===s.length)return null===g(m,s)?[s]:[];var b=0,x=0,w=[];while(x<s.length){m.lastIndex=_?0:x;var A,L=g(m,_?$(s,x):s);if(null===L||(A=C(f(m.lastIndex+(_?x:0)),s.length))===b)x=d(s,x,p);else{if(I(w,$(s,b,x)),w.length===y)return w;for(var S=1;S<=L.length-1;S++)if(I(w,L[S]),w.length===y)return w;x=b=A}}return I(w,$(s,b)),w}]}),!A,_)},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"36bd":function(t,e,r){},"48f5":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("TypeNav"),r("div",{staticClass:"main"},[r("div",{staticClass:"py-container"},[r("div",{staticClass:"bread"},[t._m(0),r("ul",{staticClass:"fl sui-tag"},[t.options.categoryName?r("li",{staticClass:"with-x",on:{click:t.delCateName}},[t._v(" "+t._s(t.options.categoryName)),r("i",[t._v("×")])]):t._e(),t.options.keyword?r("li",{staticClass:"with-x",on:{click:t.delKeyWord}},[t._v(" "+t._s(t.options.keyword)),r("i",[t._v("×")])]):t._e(),t.options.trademark?r("li",{staticClass:"with-x",on:{click:t.delTradeMark}},[t._v(" "+t._s(t.options.trademark)),r("i",[t._v("×")])]):t._e(),t._l(t.options.props,(function(e){return r("li",{key:e,staticClass:"with-x",on:{click:function(r){return t.delAttr(e)}}},[t._v(" "+t._s(e)),r("i",[t._v("×")])])}))],2)]),r("SearchSelector",{on:{updateTradeMark:t.updateTradeMark,setAttr:t.setAttr}}),r("div",{staticClass:"details clearfix"},[r("div",{staticClass:"sui-navbar"},[r("div",{staticClass:"navbar-inner filter"},[r("ul",{staticClass:"sui-nav"},[r("li",{class:{active:t.isActive("1")}},[r("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.setOrder("1")}}},[t._v("综合 "),t.isActive("1")?r("i",{staticClass:"iconfont",class:t.iconClass}):t._e()])]),t._m(1),t._m(2),t._m(3),r("li",{class:{active:t.isActive("2")}},[r("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.setOrder("2")}}},[t._v("价格 "),t.isActive("2")?r("i",{staticClass:"iconfont",class:t.iconClass}):t._e()])])])])]),r("div",{staticClass:"goods-list"},[r("ul",{staticClass:"yui3-g"},t._l(t.goodsList,(function(e){return r("li",{key:e.id,staticClass:"yui3-u-1-5"},[r("div",{staticClass:"list-wrap"},[r("div",{staticClass:"p-img"},[r("a",{on:{click:function(r){return r.preventDefault(),t.toDetail(e.id)}}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.defaultImg,expression:"item.defaultImg"}]})])]),r("div",{staticClass:"price"},[r("strong",[r("em",[t._v("¥")]),r("i",[t._v(" "+t._s(e.price))])])]),r("div",{staticClass:"attr"},[r("a",{attrs:{title:e.title},on:{click:function(r){return r.preventDefault(),t.toDetail(e.id)}}},[t._v(t._s(e.title)+"}")])]),t._m(4,!0)])])})),0)]),r("Pagination",{attrs:{currentNo:t.options.pageNo,pageSize:t.options.pageSize,total:t.total,showPageNo:5},on:{setPageNo:t.getProductList}})],1)],1)])],1)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"fl sui-breadcrumb"},[r("li",[r("a",{attrs:{href:"#"}},[t._v("全部结果")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"#"}},[t._v("销量")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"#"}},[t._v("新品")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"#"}},[t._v("评价")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"commit"},[r("i",{staticClass:"command"},[t._v("已有"),r("span",[t._v("2000")]),t._v("人评价")])])}];function n(t){if(Array.isArray(t))return t}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0");function s(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var i,a,n=[],s=!0,o=!1;try{for(r=r.call(t);!(s=(i=r.next()).done);s=!0)if(n.push(i.value),e&&n.length===e)break}catch(c){o=!0,a=c}finally{try{s||null==r["return"]||r["return"]()}finally{if(o)throw a}}return n}}r("fb6a"),r("b0c0"),r("a630"),r("ac1f"),r("00b4");function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function c(t,e){if(t){if("string"===typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,e){return n(t)||s(t,e)||c(t,e)||l()}var d=r("5530"),f=(r("841c"),r("1276"),r("99af"),r("2ca0"),r("4de4"),r("5319"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"clearfix selector"},[r("div",{staticClass:"type-wrap logo"},[r("div",{staticClass:"fl key brand"},[t._v("品牌")]),r("div",{staticClass:"value logos"},[r("ul",{staticClass:"logo-list"},t._l(t.trademarkList,(function(e){return r("li",{key:e.tmId,on:{click:function(r){return t.$emit("updateTradeMark",e.tmId+":"+e.tmName)}}},[t._v(t._s(e.tmName))])})),0)]),t._m(0)]),t._l(t.arrtsList,(function(e){return r("div",{key:e.attrId,staticClass:"type-wrap"},[r("div",{staticClass:"fl key"},[t._v(t._s(e.attrName))]),r("div",{staticClass:"fl value"},[r("ul",{staticClass:"type-list"},t._l(e.attrValueList,(function(i){return r("li",{key:i,on:{click:function(r){return t.$emit("setAttr",e.attrId+":"+i+":"+e.attrName)}}},[r("a",{attrs:{href:"javascript:;"}},[t._v(t._s(i))])])})),0)]),r("div",{staticClass:"fl ext"})])}))],2)}),v=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ext"},[r("a",{staticClass:"sui-btn",attrs:{href:"javascript:void(0);"}},[t._v("多选")]),r("a",{attrs:{href:"javascript:void(0);"}},[t._v("更多")])])}],p=r("2f62"),h={name:"SearchSelector",computed:Object(d["a"])({},Object(p["c"])({trademarkList:function(t){return t.search.productList.trademarkList},arrtsList:function(t){return t.search.productList.attrsList}}))},g=h,m=(r("c802"),r("2877")),y=Object(m["a"])(g,f,v,!1,null,"6af0dca4",null),b=y.exports,_={name:"Search",created:function(){this.updateByParams(this.$route)},data:function(){return{options:{category1Id:"",category2Id:"",category3Id:"",categoryName:"",keyword:"",pageNo:3,pageSize:2,trademark:"",props:[],order:"1:desc"}}},watch:{$route:function(t,e){this.updateByParams(t)}},components:{SearchSelector:b},computed:Object(d["a"])(Object(d["a"])({},Object(p["c"])({goodsList:function(t){return t.search.productList.goodsList},total:function(t){return t.search.productList.total}})),{},{iconClass:function(){return"desc"===this.options.order.split(":")[1]?"icondown":"iconup"}}),methods:{toDetail:function(t){var e={name:"detail",params:{skuId:t}};this.$router.push(e)},setOrder:function(t){var e,r=this.options.order.split(":"),i=u(r,2),a=i[0],n=i[1];e=t===a&&"desc"===n?"asc":"desc",this.options.order="".concat(t,":").concat(e),this.getProductList()},isActive:function(t){return this.options.order.startsWith(t)},delAttr:function(t){this.options.props=this.options.props.filter((function(e){return!(e===t)})),this.getProductList()},setAttr:function(t){-1===this.options.props.indexOf(t)&&(this.options.props.push(t),this.getProductList())},updateTradeMark:function(t){this.options.trademark!==t&&(this.options.trademark=t,this.getProductList())},delCateName:function(){this.options.categoryName="",this.options.category1Id="",this.options.category2Id="",this.options.category3Id="";var t={name:"search",params:this.$route.params};this.$router.replace(t)},delKeyWord:function(){this.options.keyword="";var t={name:"search",query:this.$route.query};this.$router.replace(t),this.$bus.$emit("clearKeyword")},delTradeMark:function(){this.options.trademark="",this.getProductList()},updateByParams:function(t){var e=t.params.keyword,r=this.$route.query,i=r.categoryName,a=r.category1Id,n=r.category2Id,s=r.category3Id;this.options=Object(d["a"])(Object(d["a"])({},this.options),{},{keyword:e,categoryName:i,category1Id:a,category2Id:n,category3Id:s}),this.getProductList()},getProductList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.options.pageNo=t,this.$store.dispatch("getProductInfo",this.options)}}},k=_,C=(r("6360"),Object(m["a"])(k,i,a,!1,null,"28200f1f",null));e["default"]=C.exports},"4df4e":function(t,e,r){"use strict";var i=r("da84"),a=r("0366"),n=r("c65b"),s=r("7b0b"),o=r("9bdd"),c=r("e95a"),l=r("68ee"),u=r("07fa"),d=r("8418"),f=r("9a1f"),v=r("35a1"),p=i.Array;t.exports=function(t){var e=s(t),r=l(this),i=arguments.length,h=i>1?arguments[1]:void 0,g=void 0!==h;g&&(h=a(h,i>2?arguments[2]:void 0));var m,y,b,_,k,C,x=v(e),w=0;if(!x||this==p&&c(x))for(m=u(e),y=r?new this(m):p(m);m>w;w++)C=g?h(e[w],w):e[w],d(y,w,C);else for(_=f(e,x),k=_.next,y=r?new this:[];!(b=n(k,_)).done;w++)C=g?o(_,h,[b.value,w],!0):b.value,d(y,w,C);return y.length=w,y}},6360:function(t,e,r){"use strict";r("36bd")},7998:function(t,e,r){},"841c":function(t,e,r){"use strict";var i=r("c65b"),a=r("d784"),n=r("825a"),s=r("1d80"),o=r("129f"),c=r("577e"),l=r("dc4a"),u=r("14c3");a("search",(function(t,e,r){return[function(e){var r=s(this),a=void 0==e?void 0:l(e,t);return a?i(a,e,r):new RegExp(e)[t](c(r))},function(t){var i=n(this),a=c(t),s=r(e,i,a);if(s.done)return s.value;var l=i.lastIndex;o(l,0)||(i.lastIndex=0);var d=u(i,a);return o(i.lastIndex,l)||(i.lastIndex=l),null===d?-1:d.index}]}))},"9bdd":function(t,e,r){var i=r("825a"),a=r("2a62");t.exports=function(t,e,r,n){try{return n?e(i(r)[0],r[1]):e(r)}catch(s){a(t,"throw",s)}}},a630:function(t,e,r){var i=r("23e7"),a=r("4df4e"),n=r("1c7e"),s=!n((function(t){Array.from(t)}));i({target:"Array",stat:!0,forced:s},{from:a})},c802:function(t,e,r){"use strict";r("7998")},d28b:function(t,e,r){var i=r("746f");i("iterator")},e01a:function(t,e,r){"use strict";var i=r("23e7"),a=r("83ab"),n=r("da84"),s=r("e330"),o=r("1a2d"),c=r("1626"),l=r("3a9b"),u=r("577e"),d=r("9bf2").f,f=r("e893"),v=n.Symbol,p=v&&v.prototype;if(a&&c(v)&&(!("description"in p)||void 0!==v().description)){var h={},g=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:u(arguments[0]),e=l(p,this)?new v(t):void 0===t?v():v(t);return""===t&&(h[e]=!0),e};f(g,v),g.prototype=p,p.constructor=g;var m="Symbol(test)"==String(v("test")),y=s(p.toString),b=s(p.valueOf),_=/^Symbol\((.*)\)[^)]+$/,k=s("".replace),C=s("".slice);d(p,"description",{configurable:!0,get:function(){var t=b(this),e=y(t);if(o(h,t))return"";var r=m?C(e,7,-1):k(e,_,"$1");return""===r?void 0:r}}),i({global:!0,forced:!0},{Symbol:g})}},fb6a:function(t,e,r){"use strict";var i=r("23e7"),a=r("da84"),n=r("e8b5"),s=r("68ee"),o=r("861d"),c=r("23cb"),l=r("07fa"),u=r("fc6a"),d=r("8418"),f=r("b622"),v=r("1dde"),p=r("f36a"),h=v("slice"),g=f("species"),m=a.Array,y=Math.max;i({target:"Array",proto:!0,forced:!h},{slice:function(t,e){var r,i,a,f=u(this),v=l(f),h=c(t,v),b=c(void 0===e?v:e,v);if(n(f)&&(r=f.constructor,s(r)&&(r===m||n(r.prototype))?r=void 0:o(r)&&(r=r[g],null===r&&(r=void 0)),r===m||void 0===r))return p(f,h,b);for(i=new(void 0===r?m:r)(y(b-h,0)),a=0;h<b;h++,a++)h in f&&d(i,a,f[h]);return i.length=a,i}})}}]);
//# sourceMappingURL=chunk-77638066.2bf6ad1f.js.map