(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e40a292"],{6847:function(t,i,e){"use strict";var s=e("6d47"),a=e.n(s);a.a},"6d47":function(t,i,e){},eabd:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"box-init integral-details"},[e("div",{staticClass:"integral-details-top"},[e("v-head",{attrs:{title:"积分明细"}}),t._m(0)],1),e("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],attrs:{"infinite-scroll-distance":"10","infinite-scroll-immediate-check":"false"}},t._l(t.list,function(i,s){return e("div",{key:s,staticClass:"integral-details-item"},[e("div",{staticClass:"integral-details-left"},[e("span",[t._v(t._s(t._f("dateFormat")(i.time,"yyyy-MM-dd hh:mm:ss")))])]),e("div",[e("span",[t._v(t._s(i.event_name))])]),e("div",{class:i.event_point>0?"color35a":"color73f"},[t._v(t._s(i.event_point))])])}),0)])},a=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"integral-details-classes"},[e("div",{staticClass:"border-right1"},[t._v("时间")]),e("div",{staticClass:"border-right1"},[t._v("事件类型")]),e("div",[t._v("积分变动")])])}],n=e("a763"),l=e("485a"),r={name:"IntegralDetails",data:function(){return{list:[],loading:!1}},methods:{loadMore:function(){this.getIntegralList()},getIntegralList:function(){var t=this;this.loading||(this.loading=!0,l["a"].show(),n["a"].get("/UserIntegral/getUserIntegralList",{offset:this.list.length,limit:15}).then(function(i){i&&i.list&&i.list.length?(t.loading=i.list.length<15,t.list=JSON.parse(JSON.stringify(t.list)).concat(i.list)):t.loading=!0,l["a"].hide()}))}},created:function(){this.getIntegralList()}},o=r,c=(e("6847"),e("2877")),d=Object(c["a"])(o,s,a,!1,null,"034c15f9",null);i["default"]=d.exports}}]);
//# sourceMappingURL=chunk-3e40a292.04cc59bf.js.map