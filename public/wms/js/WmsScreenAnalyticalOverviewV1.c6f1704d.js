(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["WmsScreenAnalyticalOverviewV1"],{"0009":function(t,e,i){},"02d7":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"scroll-bar"},[i("el-row",{staticStyle:{margin:"0"},attrs:{gutter:20}},[i("el-col",{attrs:{span:16}},[i("el-row",[i("statistic")],1),i("el-row",[i("statistic-line")],1)],1),i("el-col",{attrs:{span:8}},[i("el-row",[i("dynamics")],1),i("el-row",[i("inventory")],1)],1)],1),i("el-row",{staticStyle:{margin:"0"},attrs:{gutter:20}},[i("el-col",{attrs:{span:8}},[i("monthly")],1),i("el-col",{attrs:{span:16}},[i("ratio")],1)],1)],1)},s=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-row",{staticStyle:{height:"100%"},attrs:{gutter:20}},[i("el-col",{attrs:{span:6}},[i("div",[i("el-statistic",{attrs:{"group-separator":",",value:193524755.173}},[i("template",{slot:"prefix"},[i("i",{staticClass:"el-icon-s-order",staticStyle:{color:"rgb(241, 158, 15)","font-size":"20px"}})]),i("template",{slot:"title"},[i("span",{staticClass:"statistic-title"},[t._v("一年以内帐龄")])])],2)],1)]),i("el-col",{attrs:{span:6}},[i("div",[i("el-statistic",{attrs:{"group-separator":",",value:41549057.1814}},[i("template",{slot:"prefix"},[i("i",{staticClass:"el-icon-s-order",staticStyle:{color:"rgb(0, 203, 181)","font-size":"20px"}})]),i("template",{slot:"title"},[i("span",{staticClass:"statistic-title"},[t._v("一年到两年帐龄")])])],2)],1)]),i("el-col",{attrs:{span:6}},[i("div",[i("el-statistic",{attrs:{"group-separator":",","decimal-separator":".",value:9642620.0224}},[i("template",{slot:"prefix"},[i("i",{staticClass:"el-icon-s-order",staticStyle:{color:"rgb(2, 105, 247)","font-size":"20px"}})]),i("template",{slot:"title"},[i("span",{staticClass:"statistic-title"},[t._v("两年到三年帐龄")])])],2)],1)]),i("el-col",{attrs:{span:6}},[i("div",[i("el-statistic",{attrs:{"group-separator":",",value:2174515.483}},[i("template",{slot:"prefix"},[i("i",{staticClass:"el-icon-s-order",staticStyle:{color:"rgb(161, 0, 255)","font-size":"20px"}})]),i("template",{slot:"title"},[i("span",{staticClass:"statistic-title"},[t._v("三年以上帐龄")])])],2)],1)])],1)},r=[],o={data:function(){return{value1:4154.564,value2:2222,title:"今年的增长"}}},l=o,c=(i("601f"),i("2877")),h=Object(c["a"])(l,n,r,!1,null,"80498ea2",null),d=h.exports,m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("chart-card",[[i("div",{staticStyle:{height:"100%"}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:t.refName,staticStyle:{height:"340px"},attrs:{id:t.refName}})])]],2)},u=[],p=(i("cd1e"),i("ebb5")),f=i("9020"),g={components:{ChartCard:f["a"]},mixins:[p["a"]],data:function(){return{refName:"StatisticLine",options:{}}},mounted:function(){this.screenWidth=window.screen.width||document.documentElement.clientWidth,this.screenHeight=window.screen.height||document.documentElement.clientHeight,this.screenWidth&&(1024===this.screenWidth||this.screenWidth<1024)&&(this.zoom=.8),this.resize(),this.init(),this.resize()},methods:{init:function(){var t=this;this.loading=!0,setTimeout((function(){var e=["一年以内帐龄","一年到两年帐龄","两年到三年帐龄","三年以上帐龄"],i=[{name:"一年以内帐龄",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[195431554.0453,210437003.4116,212940257.2786,161825765.2332,220518681.0481,208976608.8696,187504217.1748,169204792.3145,183001601.3027,195085282.9888,193524755.173,0]},{name:"一年到两年帐龄",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[80201235.3522,85039423.3841,82176774.6227,117773137.8176,36010362.8976,18323737.7707,41526747.2184,44612484.1945,43347092.9568,42342677.3498,41549057.1814,0]},{name:"两年到三年帐龄",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[22205393.9469,22768471.8873,24689756.5537,23557246.3975,12923498.0515,11427585.0463,11619042.1679,15475322.1399,11692615.5237,10143014.0596,9642620.0224,0]},{name:"三年以上帐龄",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[114669.1362,126733.8275,152675.9339,681913.3908,938403.4528,1438312.104,1973027.779,2336598.111,1922458.4677,2326632.0027,2174515.483,0]}],a=["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];t.getCompleteOptions(e,i,a)}),1e3)},getCompleteOptions:function(t,e,i){this.options={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:t,left:0},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},yAxis:[{type:"value",axisLabel:{formatter:"{value}"}}],xAxis:{type:"category",boundaryGap:!1,data:i},series:e};var a=this.$refs[this.refName];this.chart=a&&this.$echarts.init(a,"macarons"),a&&this.chart.setOption(this.options),this.chart&&this.chart.resize(),this.loading=!1}}},v=g,y=Object(c["a"])(v,m,u,!1,null,"73c752d9",null),x=y.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("chart-card",[[i("div",{staticStyle:{height:"100%"}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:t.refName,staticStyle:{height:"190px"},attrs:{id:t.refName}})])]],2)},w=[],C={components:{ChartCard:f["a"]},mixins:[p["a"]],data:function(){return{refName:"Dynamics",options:{}}},mounted:function(){this.screenWidth=window.screen.width||document.documentElement.clientWidth,this.screenHeight=window.screen.height||document.documentElement.clientHeight,this.screenWidth&&(1024===this.screenWidth||this.screenWidth<1024)&&(this.zoom=.8),this.resize(),this.init(),this.resize()},methods:{init:function(){var t=this;this.loading=!0,setTimeout((function(){var e=[],i=[{type:"bar",barWidth:16,data:[153169144.1,36682811.03,31981466.44]}],a=["无动态","出库数","入库数"];t.getCompleteOptions(e,i,a)}),1e3)},getCompleteOptions:function(t,e,i){this.options={title:{text:"月度动态",left:0,top:0,textStyle:{fontSize:"18px",fontWeight:800}},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{top:25,left:"3%",right:"4%",bottom:"3%",containLabel:!0},yAxis:{type:"category",axisLabel:{show:!0,interval:0},data:i},xAxis:{type:"value",axisLabel:{formatter:function(t,e){return t>=1e3&&(t=t/1e3+"k"),t}}},series:e};var a=this.$refs[this.refName];this.chart=a&&this.$echarts.init(a,"macarons"),a&&this.chart.setOption(this.options),this.chart&&this.chart.resize(),this.loading=!1}}},S=C,W=Object(c["a"])(S,b,w,!1,null,"0f66393b",null),z=W.exports,N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("chart-card",[[i("div",{staticStyle:{height:"100%"}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:t.refName,staticStyle:{height:"190px"},attrs:{id:t.refName}})])]],2)},O=[],E={name:"AccountsCom",components:{ChartCard:f["a"]},mixins:[p["a"]],data:function(){return{refName:"Accounts",options:{}}},mounted:function(){this.screenWidth=window.screen.width||document.documentElement.clientWidth,this.screenHeight=window.screen.height||document.documentElement.clientHeight,this.screenWidth&&(1024===this.screenWidth||this.screenWidth<1024)&&(this.zoom=.8),this.resize(),this.init(),this.resize()},methods:{init:function(){var t=this;this.loading=!0,setTimeout((function(){var e=[{type:"pie",center:["53%","55%"],radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:3},data:[{value:1048,name:"电缆常规配件"},{value:735,name:"随钻常规配件"},{value:580,name:"射孔"},{value:484,name:"射孔成品"},{value:300,name:"电缆随钻成品"}],emphasis:{label:{show:!0,fontSize:12}}}];t.getCompleteOptions(null,e,null)}),1e3)},getCompleteOptions:function(t,e,i){this.options={title:{text:"帐龄占比",left:0,top:0,textStyle:{fontSize:"18px",fontWeight:800}},tooltip:{trigger:"item"},series:e};var a=this.$refs[this.refName];this.chart=a&&this.$echarts.init(a,"macarons"),a&&this.chart.setOption(this.options),this.chart&&this.chart.resize(),this.loading=!1}}},$=E,_=Object(c["a"])($,N,O,!1,null,"55da55ca",null),L=_.exports,A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("chart-card",{attrs:{title:"月度库存"}},[[i("div",{staticStyle:{height:"100%"}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:t.refName,staticStyle:{height:"230px"},attrs:{id:t.refName}})])]],2)},H=[],T={name:"YearChartCom",components:{ChartCard:f["a"]},mixins:[p["a"]],data:function(){return{refName:"YearChart",options:{}}},mounted:function(){this.screenWidth=window.screen.width||document.documentElement.clientWidth,this.screenHeight=window.screen.height||document.documentElement.clientHeight,this.screenWidth&&(1024===this.screenWidth||this.screenWidth<1024)&&(this.zoom=.8),this.resize(),this.init(),this.resize()},methods:{init:function(){var t=this;this.loading=!0,setTimeout((function(){var e=["库存","入库","出库","增减"],i=[{name:"库存",type:"bar",data:[30073.62,32207.71,32248.3,30608.13,27233.58,24205.08,24909.5,23319.82,24120.14,25762.86,25912.14,0]},{name:"入库",type:"bar",data:[2349.89,4779.52,8188.43,5700.05,5418.89,9404.83,6297.58,2361.13,9770.89,11244.36,3198.15,0]},{name:"出库",type:"bar",data:[911.94,3156.33,8621.62,7369.72,8790.09,12905.41,6264.23,3925.84,9490.68,10415.15,3179.91,0]}],a=["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];t.getCompleteOptions(e,i,a)}),1e3)},getCompleteOptions:function(t,e,i){this.options={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:t,left:0},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},yAxis:[{type:"value",axisLabel:{formatter:"{value}"}},{type:"value",axisLabel:{formatter:"{value}"}}],xAxis:{type:"category",axisLabel:{show:!0,interval:0},data:i},series:e};var a=this.$refs[this.refName];this.chart=a&&this.$echarts.init(a,"macarons"),a&&this.chart.setOption(this.options),this.chart&&this.chart.resize(),this.loading=!1}}},j=T,k=Object(c["a"])(j,A,H,!1,null,"bb6f7d42",null),R=k.exports,I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("chart-card",[[i("div",{staticStyle:{height:"100%"}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:t.refName,staticStyle:{height:"190px"},attrs:{id:t.refName}})])]],2)},P=[],D={name:"InventoryCom",components:{ChartCard:f["a"]},mixins:[p["a"]],data:function(){return{refName:"Inventory",options:{}}},mounted:function(){this.screenWidth=window.screen.width||document.documentElement.clientWidth,this.screenHeight=window.screen.height||document.documentElement.clientHeight,this.screenWidth&&(1024===this.screenWidth||this.screenWidth<1024)&&(this.zoom=.8),this.resize(),this.init(),this.resize()},methods:{init:function(){var t=this;this.loading=!0,setTimeout((function(){var e=[{type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:3},data:[{value:10060814.44,name:"0001"},{value:28048402.67,name:"0002"},{value:42259327.08,name:"0003"},{value:914107.25,name:"0004"},{value:50585.18,name:"0005"},{value:50115552.86,name:"0006"},{value:5103762.6,name:"0007"},{value:6851188.87,name:"0008"},{value:946745.99,name:"0009"},{value:0,name:"0010"},{value:77896969.93,name:"0011"},{value:6506243.94,name:"0012"},{value:4766609.52,name:"0013"},{value:25590236.98,name:"0014"}],emphasis:{label:{show:!0,fontSize:12}}}];t.getCompleteOptions(null,e,null)}),1e3)},getCompleteOptions:function(t,e,i){this.options={title:{text:"库存占比",left:0,top:0,textStyle:{fontSize:"18px",fontWeight:800}},tooltip:{trigger:"item",formatter:"{b} : {c} ({d}%)"},series:e};var a=this.$refs[this.refName];this.chart=a&&this.$echarts.init(a,"macarons"),a&&this.chart.setOption(this.options),this.chart&&this.chart.resize(),this.loading=!1}}},J=D,M=Object(c["a"])(J,I,P,!1,null,"0fd7a220",null),Y=M.exports,G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("chart-card",{attrs:{title:"库存周转率"}},[[i("div",{staticStyle:{height:"100%"}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:t.refName,staticStyle:{height:"230px"},attrs:{id:t.refName}})])]],2)},V=[],q={name:"RatioCom",components:{ChartCard:f["a"]},mixins:[p["a"]],data:function(){return{refName:"Ratio",options:{}}},mounted:function(){this.screenWidth=window.screen.width||document.documentElement.clientWidth,this.screenHeight=window.screen.height||document.documentElement.clientHeight,this.screenWidth&&(1024===this.screenWidth||this.screenWidth<1024)&&(this.zoom=.8),this.resize(),this.init(),this.resize()},methods:{init:function(){var t=this;this.loading=!0,setTimeout((function(){var e=["期初库存","期末库存","出库","周转率"],i=[{name:"期初库存",type:"bar",data:[9044082.86,27321671.82,88884474.52,0,49104.44,18937842.2,4620511.67,5647255.31,2767837.84,0,126999466.53,0,0,1990433.32]},{name:"期末库存",type:"bar",data:[10029920.85,27983393.29,42365133.46,914107.25,50585.18,50126225.57,5103762.6,6851188.83,946745.92,0,77956308.64,6437223.09,4766609.52,25590236.98]},{name:"出库",type:"bar",data:[87466101.48,40209546.03,40438539.92,76398129.54,50570741.89,105314652.06,26468033.01,23424337.15,1778826.93,20556970.72,77370460.51,14895.77,15009289.79,190229741.96]},{name:"周转率",type:"line",yAxisIndex:1,data:[9.171236706,1.454099944,.616208163,167.153536,1014.563841,3.049766846,5.443703515,3.748360498,.957753032,0,.754996637,.004628011,6.297679609,13.79442486]}],a=["0001","0002","0003","0004","0005","0006","0007","0008","0009","0010","0011","0012","0013","0014"];t.getCompleteOptions(e,i,a)}),1e3)},getCompleteOptions:function(t,e,i){this.options={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:t,left:0},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},yAxis:[{type:"value",axisLabel:{formatter:"{value}"}},{type:"value",axisLabel:{formatter:"{value}"}}],xAxis:{type:"category",axisLabel:{show:!0,interval:0,formatter:function(t){var e="",i=t.length,a=4,s=Math.ceil(i/a);if(i>a)for(var n=0;n<s;n++){var r="",o=n*a,l=o+a;r=n===s-1?t.substring(o,i):t.substring(o,l)+"\n",e+=r}else e=t;return e}},data:i},series:e};var a=this.$refs[this.refName];this.chart=a&&this.$echarts.init(a,"macarons"),a&&this.chart.setOption(this.options),this.chart&&this.chart.resize(),this.loading=!1}}},B=q,F=Object(c["a"])(B,G,V,!1,null,"10e046d1",null),K=F.exports,Q={name:"AnalysisOverall",components:{Statistic:d,StatisticLine:x,Dynamics:z,Accounts:L,Monthly:R,Inventory:Y,Ratio:K}},U=Q,X=(i("1bd6"),Object(c["a"])(U,a,s,!1,null,"490fbe06",null));e["default"]=X.exports},"1bd6":function(t,e,i){"use strict";var a=i("aaed"),s=i.n(a);s.a},"601f":function(t,e,i){"use strict";var a=i("0009"),s=i.n(a);s.a},aaed:function(t,e,i){}}]);
//# sourceMappingURL=WmsScreenAnalyticalOverviewV1.c6f1704d.js.map