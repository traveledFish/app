(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78d6a30e"],{"09fe":function(t,i,e){},"0b9f":function(t,i,e){},"11e9":function(t,i,e){var s=e("52a7"),a=e("4630"),n=e("6821"),r=e("6a99"),o=e("69a8"),c=e("c69a"),l=Object.getOwnPropertyDescriptor;i.f=e("9e1e")?l:function(t,i){if(t=n(t),i=r(i,!0),c)try{return l(t,i)}catch(e){}if(o(t,i))return a(!s.f.call(t,i),t[i])}},1325:function(t,i,e){"use strict";e.d(i,"b",function(){return r}),e.d(i,"a",function(){return o}),e.d(i,"c",function(){return l});var s=e("a142"),a=!1;if(!s["d"])try{var n={};Object.defineProperty(n,"passive",{get:function(){a=!0}}),window.addEventListener("test-passive",null,n)}catch(u){}function r(t,i,e,n){void 0===n&&(n=!1),s["d"]||t.addEventListener(i,e,!!a&&{capture:!1,passive:n})}function o(t,i,e){s["d"]||t.removeEventListener(i,e)}function c(t){t.stopPropagation()}function l(t,i){("boolean"!==typeof t.cancelable||t.cancelable)&&t.preventDefault(),i&&c(t)}},"20a6":function(t,i,e){"use strict";var s=e("eac7"),a=e.n(s);a.a},"33c3":function(t,i,e){},3875:function(t,i,e){"use strict";e.d(i,"a",function(){return r});var s=e("2b0e"),a=10;function n(t,i){return t>i&&t>a?"horizontal":i>t&&i>a?"vertical":""}var r=s["a"].extend({data:function(){return{direction:""}},methods:{touchStart:function(t){this.resetTouchStatus(),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY},touchMove:function(t){var i=t.touches[0];this.deltaX=i.clientX-this.startX,this.deltaY=i.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||n(this.offsetX,this.offsetY)},resetTouchStatus:function(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0}}})},"3fcb":function(t,i,e){"use strict";var s=e("7d9a"),a=e.n(s);a.a},"44bf":function(t,i,e){"use strict";var s=e("2638"),a=e.n(s),n=e("d282"),r=e("a142"),o=e("ea8e"),c=e("ad06"),l=Object(n["a"])("image"),u=l[0],f=l[1];i["a"]=u({props:{src:String,fit:String,alt:String,lazyLoad:Boolean,width:[Number,String],height:[Number,String]},data:function(){return{loading:!0,error:!1}},watch:{src:function(){this.loading=!0,this.error=!1}},computed:{style:function(){var t={};return Object(r["b"])(this.width)&&(t.width=Object(o["a"])(this.width)),Object(r["b"])(this.height)&&(t.height=Object(o["a"])(this.height)),t}},created:function(){var t=this.$Lazyload;t&&(t.$on("loaded",this.onLazyLoaded),t.$on("error",this.onLazyLoadError))},beforeDestroy:function(){var t=this.$Lazyload;t&&(t.$off("loaded",this.onLazyLoaded),t.$off("error",this.onLazyLoadError))},methods:{onLoad:function(t){this.loading=!1,this.$emit("load",t)},onLazyLoaded:function(t){var i=t.el;i===this.$refs.image&&this.loading&&this.onLoad()},onLazyLoadError:function(t){var i=t.el;i!==this.$refs.image||this.error||this.onError()},onError:function(t){this.error=!0,this.loading=!1,this.$emit("error",t)},onClick:function(t){this.$emit("click",t)},renderPlaceholder:function(){var t=this.$createElement;return this.loading?t("div",{class:f("loading")},[this.slots("loading")||t(c["a"],{attrs:{name:"photo-o",size:"22"}})]):this.error?t("div",{class:f("error")},[this.slots("error")||t(c["a"],{attrs:{name:"warning-o",size:"22"}})]):void 0},renderImage:function(){var t=this.$createElement,i={class:f("img"),attrs:{alt:this.alt},style:{objectFit:this.fit}};if(!this.error)return this.lazyLoad?t("img",a()([{ref:"image",directives:[{name:"lazy",value:this.src}]},i])):t("img",a()([{attrs:{src:this.src},on:{load:this.onLoad,error:this.onError}},i]))}},render:function(t){return t("div",{class:f(),style:this.style,on:{click:this.onClick}},[this.renderImage(),this.renderPlaceholder()])}})},4598:function(t,i,e){"use strict";(function(t){e.d(i,"a",function(){return l});var s=e("a142"),a=Date.now();function n(t){var i=Date.now(),e=Math.max(0,16-(i-a)),s=setTimeout(t,e);return a=i+e,s}var r=s["d"]?t:window,o=r.requestAnimationFrame||n;r.cancelAnimationFrame||r.clearTimeout;function c(t){return o.call(r,t)}function l(t){c(function(){c(t)})}}).call(this,e("c8ba"))},"5a84":function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("header",{staticClass:"header"},[e("div",{staticClass:"header-left",on:{click:t.onClickLeft}},[e("span",{staticClass:"iconfont icon-leftarrow"}),t._t("header-left")],2),e("div",{staticClass:"header-center"},[t._t("header-center")],2),e("div",{staticClass:"header-right"},[t._t("header-right")],2)])},a=[],n={methods:{onClickLeft:function(){this.$router.back()},onClickRight:function(){this.$router.push("/home")}}},r=n,o=(e("3fcb"),e("2877")),c=Object(o["a"])(r,s,a,!1,null,null,null);i["a"]=c.exports},"5c08":function(t,i,e){"use strict";var s=e("67e7"),a=e.n(s);a.a},"5dbc":function(t,i,e){var s=e("d3f4"),a=e("8b97").set;t.exports=function(t,i,e){var n,r=i.constructor;return r!==e&&"function"==typeof r&&(n=r.prototype)!==e.prototype&&s(n)&&a&&a(t,n),t}},"5f1a":function(t,i,e){"use strict";e("68ef"),e("9b7e")},"5fbe":function(t,i,e){"use strict";e.d(i,"a",function(){return a});var s=e("1325");function a(t){function i(){this.binded||(t.call(this,s["b"],!0),this.binded=!0)}function e(){this.binded&&(t.call(this,s["a"],!1),this.binded=!1)}return{mounted:i,activated:i,deactivated:e,beforeDestroy:e}}},"67e7":function(t,i,e){},"786d":function(t,i,e){},"7d9a":function(t,i,e){},8248:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"container"},[e("header-def",[e("div",{attrs:{slot:"header-left"},slot:"header-left"}),e("div",{attrs:{slot:"header-center"},slot:"header-center"},[t._v("商品详情")]),e("div",{attrs:{slot:"header-right"},slot:"header-right"},[t._v("分享")])]),e("div",{staticClass:"content"},[e("van-swipe",{attrs:{autoplay:2e3,"indicator-color":"white"}},[e("van-swipe-item",[e("img",{attrs:{src:t.prodetail.prourl1,alt:""}})]),e("van-swipe-item",[e("img",{attrs:{src:t.prodetail.prourl2,alt:""}})]),e("van-swipe-item",[e("img",{attrs:{src:t.prodetail.prourl3,alt:""}})]),e("van-swipe-item",[e("img",{attrs:{src:t.prodetail.prourl4,alt:""}})])],1),e("price",{attrs:{pricenum:1*t.prodetail.price}}),e("div",{staticClass:"prom"},[e("div",{staticClass:"prom1"},[e("span",[t._v("领券：")]),e("div",{staticClass:"tip"},[e("van-tag",{attrs:{color:"#f2826a",plain:""}},[t._v("新人立减15元")])],1),e("span",{staticClass:"iconfont icon-Downarrow"})]),e("div",{staticClass:"prom2"},[e("span",[t._v("购物返: ")]),e("div",{staticClass:"tip"},[e("van-tag",{attrs:{color:"#f2826a",plain:""}},[t._v("新用户最多可返￥6.6元")])],1),e("span",{staticClass:"iconfont icon-Downarrow"})])]),e("div",{staticClass:"optioninfo"},[t._m(0),e("div",{staticClass:"option2"},[e("span",[t._v("配送：")]),e("div",{staticClass:"tip"},[e("van-tag",{attrs:{color:"#f2826a",plain:""}},[t._v("请选择配送地址")])],1),e("span",{staticClass:"iconfont icon-Downarrow"})]),t._m(1)]),e("rating-box"),e("pro-display",{attrs:{displaylist:t.imglist}}),t._m(2),e("pro-list",{attrs:{prolist:t.recomlist}}),e("div",{staticClass:"aaa"})],1)],1)},a=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"option1"},[e("span",[t._v("请选择规格数量")]),e("div",{staticClass:"tip"}),e("span",{staticClass:"iconfont icon-Downarrow"})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"option3"},[e("span",[t._v("服务:")]),e("div",{staticClass:"tip"},[e("span",{staticClass:"dot"}),e("span",[t._v("支持30天无忧退换货")]),e("span",{staticClass:"dot"}),e("span",[t._v("48小时快速退款")]),e("span",{staticClass:"dot"}),e("span",[t._v("满88元免费邮")])]),e("span",{staticClass:"iconfont icon-Downarrow"})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"recom-title prolist-title"},[e("span",[t._v("猜您喜欢")])])}],n=(e("68ef"),e("09fe"),e("ad06")),r=(e("8270"),e("d282")),o=e("1325"),c=e("3875"),l=e("5fbe"),u=e("4598");function f(t,i,e){return Math.min(Math.max(t,i),e)}var h=Object(r["a"])("swipe"),d=h[0],p=h[1],v=d({mixins:[c["a"],Object(l["a"])(function(t,i){t(window,"resize",this.onResize,!0),i?this.initialize():this.clear()})],props:{width:Number,height:Number,autoplay:Number,vertical:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:Number,default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:Number,default:0},showIndicators:{type:Boolean,default:!0}},data:function(){return{computedWidth:0,computedHeight:0,offset:0,active:0,deltaX:0,deltaY:0,swipes:[],swiping:!1}},watch:{swipes:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t?this.autoPlay():this.clear()}},computed:{count:function(){return this.swipes.length},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t,i=this.vertical?"height":"width",e=this.vertical?"width":"height";return t={},t[i]=this.trackSize+"px",t[e]=this[e]?this[e]+"px":"",t.transitionDuration=(this.swiping?0:this.duration)+"ms",t.transform="translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)",t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){var t=this.$el.getBoundingClientRect();return(this.vertical?t.height:t.width)-this.size*this.count}},methods:{initialize:function(t){if(void 0===t&&(t=this.initialSwipe),clearTimeout(this.timer),this.$el){var i=this.$el.getBoundingClientRect();this.computedWidth=this.width||i.width,this.computedHeight=this.height||i.height}this.swiping=!0,this.active=t,this.offset=this.count>1?-this.size*this.active:0,this.swipes.forEach(function(t){t.offset=0}),this.autoPlay()},onResize:function(){this.initialize(this.activeIndicator)},onTouchStart:function(t){this.touchable&&(this.clear(),this.swiping=!0,this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(Object(o["c"])(t,!0),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){if(this.delta&&this.isCorrectDirection){var t=this.vertical?this.offsetY:this.offsetX;this.move({pace:t>0?this.delta>0?-1:1:0,emitChange:!0})}this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var i=this.active,e=this.count;return t?this.loop?f(i+t,-1,e):f(i+t,0,e-1):i},getTargetOffset:function(t,i){var e=t*this.size;this.loop||(e=Math.min(e,-this.minOffset));var s=Math.round(i-e);return this.loop||(s=f(s,this.minOffset,0)),s},move:function(t){var i=t.pace,e=void 0===i?0:i,s=t.offset,a=void 0===s?0:s,n=t.emitChange,r=this.loop,o=this.count,c=this.active,l=this.swipes,u=this.trackSize,f=this.minOffset;if(!(o<=1)){var h=this.getTargetActive(e),d=this.getTargetOffset(h,a);if(r){if(l[0]){var p=d<f;l[0].offset=p?u:0}if(l[o-1]){var v=d>0;l[o-1].offset=v?-u:0}}this.active=h,this.offset=d,n&&h!==c&&this.$emit("change",this.activeIndicator)}},swipeTo:function(t,i){var e=this;void 0===i&&(i={}),this.swiping=!0,this.resetTouchStatus(),this.correctPosition(),Object(u["a"])(function(){e.move({pace:t%e.count-e.active,emitChange:!0}),i.immediate?Object(u["a"])(function(){e.swiping=!1}):e.swiping=!1})},correctPosition:function(){this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,i=this.autoplay;i&&this.count>1&&(this.clear(),this.timer=setTimeout(function(){t.swiping=!0,t.resetTouchStatus(),t.correctPosition(),Object(u["a"])(function(){t.swiping=!1,t.move({pace:1,emitChange:!0}),t.autoPlay()})},i))},renderIndicator:function(){var t=this,i=this.$createElement,e=this.count,s=this.activeIndicator,a=this.slots("indicator");return a||(this.showIndicators&&e>1?i("div",{class:p("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(e)).map(function(e,a){return i("i",{class:p("indicator",{active:a===s}),style:a===s?t.indicatorStyle:null})})]):void 0)}},render:function(t){return t("div",{class:p()},[t("div",{ref:"track",style:this.trackStyle,class:p("track"),on:{touchstart:this.onTouchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}},[this.slots()]),this.renderIndicator()])}}),m=(e("786d"),e("1988")),g=Object(r["a"])("swipe-item"),b=g[0],C=g[1],w=b({data:function(){return{offset:0}},beforeCreate:function(){this.$parent.swipes.push(this)},destroyed:function(){this.$parent.swipes.splice(this.$parent.swipes.indexOf(this),1)},render:function(t){var i=this.$parent,e=i.vertical,s=i.computedWidth,a=i.computedHeight,n={width:s+"px",height:e?a+"px":"100%",transform:"translate"+(e?"Y":"X")+"("+this.offset+"px)"};return t("div",{class:C(),style:n,on:Object(m["a"])({},this.$listeners)},[this.slots()])}}),_=(e("5f1a"),e("a3e2")),y=e("2b0e"),j=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"ratebox"},[t._m(0),e("div",{staticClass:"rating"},[e("div",{staticClass:"rating-header"},[t._m(1),e("div",{staticClass:"name"},[t._v("zl****")]),e("rating-star",{attrs:{grade:t.getgrade}}),e("span",{staticClass:"arrow iconfont icon-Downarrow"})],1),t._m(2)])])},O=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"title"},[e("span",[t._v("用户评价")]),e("div",{staticClass:"tip"}),e("span",{staticClass:"iconfont icon-Downarrow"})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"pic"},[e("img",{attrs:{src:"//img14.360buyimg.com/n1/jfs/t14995/299/502330120/306901/f02cd9ff/5a2f8bd8Ne73378de.jpg",alt:"头像"}})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"rating-cont"},[e("div",{staticClass:"time"}),e("div",{staticClass:"text"},[e("span",[t._v("adfjsdjlfdsjlfjsadfasfasfdasfagfdfjfdlfjasd")])]),e("ul",{staticClass:"piclist"},[e("li",[e("img",{attrs:{src:"//img14.360buyimg.com/n1/jfs/t14995/299/502330120/306901/f02cd9ff/5a2f8bd8Ne73378de.jpg",alt:""}})]),e("li",[e("img",{attrs:{src:"//img14.360buyimg.com/n1/jfs/t14995/299/502330120/306901/f02cd9ff/5a2f8bd8Ne73378de.jpg",alt:""}})]),e("li",[e("img",{attrs:{src:"//img14.360buyimg.com/n1/jfs/t14995/299/502330120/306901/f02cd9ff/5a2f8bd8Ne73378de.jpg",alt:""}})]),e("li",[e("img",{attrs:{src:"//img14.360buyimg.com/n1/jfs/t14995/299/502330120/306901/f02cd9ff/5a2f8bd8Ne73378de.jpg",alt:""}})])])])}],E=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("ul",{staticClass:"rating-star"},[e("li",{staticClass:"iconfont icon-sc",class:t.grade>.5?"show":""}),e("li",{staticClass:"iconfont icon-sc",class:t.grade>1.5?"show":""}),e("li",{staticClass:"iconfont icon-sc",class:t.grade>2.5?"show":""}),e("li",{staticClass:"iconfont icon-sc",class:t.grade>3.5?"show":""}),e("li",{staticClass:"iconfont icon-sc",class:t.grade>4.5?"show":""})])},S=[],$=(e("c5f6"),{props:{grade:Number},mounted:function(){}}),x=$,z=(e("5c08"),e("2877")),N=Object(z["a"])(x,E,S,!1,null,null,null),k=N.exports,I={data:function(){return{getgrade:2}},components:{"rating-star":k}},T=I,L=(e("20a6"),Object(z["a"])(T,j,O,!1,null,null,null)),P=L.exports,A=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"price"},[e("div",{staticClass:"pricenum"},[e("span",{staticClass:"s1"},[t._v("￥")]),e("span",{staticClass:"s2"},[t._v(t._s(t.pricenum))]),e("span",{staticClass:"s3"},[t._v("￥"+t._s(t.pricenum+20))])]),e("div",{staticClass:"tip"},[t._v("\n    好货一口价 >\n  ")])])},D=[],X={props:{pricenum:Number}},Y=X,M=(e("996f"),Object(z["a"])(Y,A,D,!1,null,null,null)),F=M.exports,B=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"display"},[e("div",{staticClass:"display-header"},[t._v("商品详情")]),e("ul",{staticClass:"display-list"},t._l(t.displaylist,function(t,i){return e("li",{key:i},[e("img",{attrs:{src:t,alt:"商品图片"}})])}),0)])},R=[],H={props:{displaylist:Array}},V=H,W=(e("9e55"),Object(z["a"])(V,B,R,!1,null,null,null)),G=W.exports,J=e("bc20"),U=e("5a84");y["a"].use(_["a"]),y["a"].use(v).use(w),y["a"].use(n["a"]);var q={data:function(){return{prodetail:{},recomlist:[],imglist:[]}},components:{"rating-box":P,price:F,"pro-display":G,"pro-list":J["a"],"header-def":U["a"]},mounted:function(){var t=this;console.log(this.$route);var i=this.$route.params.id;fetch("http://localhost:3000/api/prolist?id=".concat(i)).then(function(t){return t.json()}).then(function(i){console.log(i),t.prodetail=i[0].data[0],t.imglist=[t.prodetail.prourl1,t.prodetail.prourl2,t.prodetail.prourl3,t.prodetail.prourl4,t.prodetail.prourl5],console.log(t.prodetail),t.$store.commit({type:"reset",prodetail:t.prodetail})}),fetch("http://localhost:3000/api/prolist/all").then(function(t){return t.json()}).then(function(i){console.log(i),t.recomlist=i[0].data})}},K=q,Q=(e("b46b"),Object(z["a"])(K,s,a,!1,null,null,null));i["default"]=Q.exports},8270:function(t,i,e){},"88cf":function(t,i,e){},"8b97":function(t,i,e){var s=e("d3f4"),a=e("cb7c"),n=function(t,i){if(a(t),!s(i)&&null!==i)throw TypeError(i+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,i,s){try{s=e("9b43")(Function.call,e("11e9").f(Object.prototype,"__proto__").set,2),s(t,[]),i=!(t instanceof Array)}catch(a){i=!0}return function(t,e){return n(t,e),i?t.__proto__=e:s(t,e),t}}({},!1):void 0),check:n}},9093:function(t,i,e){var s=e("ce10"),a=e("e11e").concat("length","prototype");i.f=Object.getOwnPropertyNames||function(t){return s(t,a)}},"996f":function(t,i,e){"use strict";var s=e("33c3"),a=e.n(s);a.a},"9b7e":function(t,i,e){},"9e55":function(t,i,e){"use strict";var s=e("dc8a"),a=e.n(s);a.a},a3e2:function(t,i,e){"use strict";var s=e("2638"),a=e.n(s),n=e("d282"),r=e("ba31"),o=Object(n["a"])("tag"),c=o[0],l=o[1];function u(t,i,e,s){var n,o=i.type,c=i.mark,u=i.plain,f=i.color,h=i.round,d=i.size,p=u?"color":"backgroundColor",v=(n={},n[p]=f,n);i.textColor&&(v.color=i.textColor);var m={mark:c,plain:u,round:h};return d&&(m[d]=d),t("span",a()([{style:v,class:[l([m,o]),{"van-hairline--surround":u}]},Object(r["b"])(s,!0)]),[e.default&&e.default()])}u.props={size:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String,type:{type:String,default:"default"}},i["a"]=c(u)},aa77:function(t,i,e){var s=e("5ca1"),a=e("be13"),n=e("79e5"),r=e("fdef"),o="["+r+"]",c="​",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),f=function(t,i,e){var a={},o=n(function(){return!!r[t]()||c[t]()!=c}),l=a[t]=o?i(h):r[t];e&&(a[e]=l),s(s.P+s.F*o,"String",a)},h=f.trim=function(t,i){return t=String(a(t)),1&i&&(t=t.replace(l,"")),2&i&&(t=t.replace(u,"")),t};t.exports=f},ab7a:function(t,i,e){"use strict";var s=e("88cf"),a=e.n(s);a.a},ad06:function(t,i,e){"use strict";var s=e("2638"),a=e.n(s),n=e("d282"),r=e("ea8e"),o=e("ba31"),c=e("6f2f"),l=e("44bf"),u=Object(n["a"])("icon"),f=u[0],h=u[1];function d(t){return!!t&&-1!==t.indexOf("/")}function p(t,i,e,s){var n=d(i.name);return t(i.tag,a()([{class:[i.classPrefix,n?"":i.classPrefix+"-"+i.name],style:{color:i.color,fontSize:Object(r["a"])(i.size)}},Object(o["b"])(s,!0)]),[e.default&&e.default(),n&&t(l["a"],{class:h("image"),attrs:{fit:"contain",src:i.name}}),t(c["a"],{attrs:{info:i.info}})])}p.props={name:String,size:[Number,String],info:[Number,String],color:String,tag:{type:String,default:"i"},classPrefix:{type:String,default:h()}},i["a"]=f(p)},b46b:function(t,i,e){"use strict";var s=e("0b9f"),a=e.n(s);a.a},bc20:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"recom prolist"},[e("ul",{staticClass:"recom-list prolist-ls"},t._l(t.prolist,function(i,s){return e("router-link",{key:s,staticClass:"proitem",attrs:{tag:"li",to:{name:"detail",params:{id:i.proid}}}},[e("div",{staticClass:"pro-img"},[e("img",{attrs:{src:i.prourl,alt:""}})]),e("div",{staticClass:"pro-brief"},[e("span",[t._v(t._s(i.brief))])]),e("div",{staticClass:"pro-info"},[e("div",{staticClass:"info-title"},[e("span",[t._v(t._s(i.title))])]),e("div",{staticClass:"info-price"},[t._v("\n          ￥\n          "),e("span",[t._v(t._s(i.price))])])])])}),1)])},a=[],n={props:{prolist:Array}},r=n,o=(e("ab7a"),e("2877")),c=Object(o["a"])(r,s,a,!1,null,null,null);i["a"]=c.exports},c5f6:function(t,i,e){"use strict";var s=e("7726"),a=e("69a8"),n=e("2d95"),r=e("5dbc"),o=e("6a99"),c=e("79e5"),l=e("9093").f,u=e("11e9").f,f=e("86cc").f,h=e("aa77").trim,d="Number",p=s[d],v=p,m=p.prototype,g=n(e("2aeb")(m))==d,b="trim"in String.prototype,C=function(t){var i=o(t,!1);if("string"==typeof i&&i.length>2){i=b?i.trim():h(i,3);var e,s,a,n=i.charCodeAt(0);if(43===n||45===n){if(e=i.charCodeAt(2),88===e||120===e)return NaN}else if(48===n){switch(i.charCodeAt(1)){case 66:case 98:s=2,a=49;break;case 79:case 111:s=8,a=55;break;default:return+i}for(var r,c=i.slice(2),l=0,u=c.length;l<u;l++)if(r=c.charCodeAt(l),r<48||r>a)return NaN;return parseInt(c,s)}}return+i};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var i=arguments.length<1?0:t,e=this;return e instanceof p&&(g?c(function(){m.valueOf.call(e)}):n(e)!=d)?r(new v(C(i)),e,p):C(i)};for(var w,_=e("9e1e")?l(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;_.length>y;y++)a(v,w=_[y])&&!a(p,w)&&f(p,w,u(v,w));p.prototype=m,m.constructor=p,e("2aba")(s,d,p)}},dc8a:function(t,i,e){},ea8e:function(t,i,e){"use strict";var s=e("a142");function a(t){return/^\d+(\.\d+)?$/.test(t)}function n(t){if(Object(s["b"])(t))return t=String(t),a(t)?t+"px":t}e.d(i,"a",function(){return n})},eac7:function(t,i,e){},fdef:function(t,i){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-78d6a30e.9dc66156.js.map