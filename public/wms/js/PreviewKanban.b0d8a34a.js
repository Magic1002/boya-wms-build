(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["PreviewKanban"],{"0454":function(t,e,r){},"95f9":function(t,e,r){"use strict";var a=r("0454"),s=r.n(a);s.a},d212:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"clearfix top-filter"},[r("el-button",{staticClass:"filter-item fr",on:{click:t.returnPrev}},[t._v("返回")])],1),r("el-row",{staticStyle:{height:"calc(33.3vh - 20px)"},attrs:{gutter:20}},[t.chartIds.includes(1)?r("el-col",{staticStyle:{height:"100%"},attrs:{span:8}},[r("chart-com-1",t._b({key:t.viewKey,ref:"ChartCom1",staticStyle:{height:"100%"},attrs:{title:"库存占比"}},"chart-com-1",t.$attrs,!1))],1):t._e(),t.chartIds.includes(2)?r("el-col",{staticStyle:{height:"100%"},attrs:{span:8}},[r("chart-com-2",t._b({key:t.viewKey,ref:"ChartCom2",staticStyle:{height:"100%"},attrs:{title:"账龄占比"}},"chart-com-2",t.$attrs,!1))],1):t._e(),t.chartIds.includes(3)?r("el-col",{staticStyle:{height:"100%"},attrs:{span:8}},[r("chart-com-3",t._b({key:t.viewKey,ref:"ChartCom3",staticStyle:{height:"100%"},attrs:{title:"月度库存"}},"chart-com-3",t.$attrs,!1))],1):t._e(),t.chartIds.includes(4)?r("el-col",{staticStyle:{height:"100%"},attrs:{span:8}},[r("chart-com-4",t._b({key:t.viewKey,ref:"ChartCom4",staticStyle:{height:"100%"},attrs:{title:"库存周转率"}},"chart-com-4",t.$attrs,!1))],1):t._e(),t.chartIds.includes(5)?r("el-col",{staticStyle:{height:"100%"},attrs:{span:8}},[r("chart-com-5",t._b({key:t.viewKey,ref:"ChartCom5",staticStyle:{height:"100%"},attrs:{title:"库存账龄"}},"chart-com-5",t.$attrs,!1))],1):t._e(),t.chartIds.includes(6)?r("el-col",{staticStyle:{height:"100%"},attrs:{span:8}},[r("chart-com-6",t._b({key:t.viewKey,ref:"ChartCom6",staticStyle:{height:"100%"},attrs:{title:"库存账龄占比"}},"chart-com-6",t.$attrs,!1))],1):t._e(),t.chartIds.includes(7)?r("el-col",{staticStyle:{height:"100%"},attrs:{span:8}},[r("chart-com-7",t._b({key:t.viewKey,ref:"ChartCom7",staticStyle:{height:"100%"},attrs:{title:"在途物资分析"}},"chart-com-7",t.$attrs,!1))],1):t._e(),t.chartIds.includes(8)?r("el-col",{staticStyle:{height:"100%"},attrs:{span:8}},[r("chart-com-8",t._b({key:t.viewKey,ref:"ChartCom8",staticStyle:{height:"100%"},attrs:{title:"物料价格分析"}},"chart-com-8",t.$attrs,!1))],1):t._e(),t.chartIds.includes(9)?r("el-col",{staticStyle:{height:"100%"},attrs:{span:8}},[r("chart-com-9",t._b({key:t.viewKey,ref:"ChartCom9",staticStyle:{height:"100%"},attrs:{title:"合同到货分析"}},"chart-com-9",t.$attrs,!1))],1):t._e(),t.chartIds.includes(10)?r("el-col",{staticStyle:{height:"100%"},attrs:{span:8}},[r("chart-com-10",t._b({key:t.viewKey,ref:"ChartCom10",staticStyle:{height:"100%"},attrs:{title:"供应商综合分析"}},"chart-com-10",t.$attrs,!1))],1):t._e(),t.chartIds.includes(11)?r("el-col",{staticStyle:{height:"100%"},attrs:{span:8}},[r("chart-com-11",t._b({key:t.viewKey,ref:"ChartCom11",staticStyle:{height:"100%"},attrs:{title:"供应商价格趋势"}},"chart-com-11",t.$attrs,!1))],1):t._e(),r("el-col",{staticStyle:{height:"100%"},attrs:{span:8}})],1)],1)},s=[],c=(r("8e6e"),r("ac6a"),r("456d"),r("c5f6"),r("28a5"),r("bd86")),i=r("5d67");function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l={components:o({},i["a"]),props:{ids:{type:String,default:""}},data:function(){return{viewKey:1}},computed:{chartIds:function(){return this.ids.split(",").map((function(t){return Number(t)}))}},methods:{reset:function(){this.viewKey++,this.$refs.ChartCom1.resize(),this.$refs.ChartCom2.resize(),this.$refs.ChartCom3.resize(),this.$refs.ChartCom4.resize(),this.$refs.ChartCom5.resize(),this.$refs.ChartCom6.resize()},returnPrev:function(){this.$store.dispatch("tagsView/delView",this.$route);var t=this.$route.query.extraInfo;this.$router.push({name:t&&t.id?"EditKanban":"AddKanban",params:t&&t.id?o({},t):{}})}}},n=l,y=(r("95f9"),r("2877")),u=Object(y["a"])(n,a,s,!1,null,"5487dde3",null);e["default"]=u.exports}}]);
//# sourceMappingURL=PreviewKanban.b0d8a34a.js.map