(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["AnalysisOrderContract"],{"32a6":function(e,t,r){var n=r("241e"),a=r("c3a1");r("ce7e")("keys",(function(){return function(e){return a(n(e))}}))},4127:function(e,t,r){"use strict";var n=r("d233"),a=r("b313"),i=Object.prototype.hasOwnProperty,o={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},s=Array.isArray,c=Array.prototype.push,l=function(e,t){c.apply(e,s(t)?t:[t])},u=Date.prototype.toISOString,f={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,formatter:a.formatters[a["default"]],indices:!1,serializeDate:function(e){return u.call(e)},skipNulls:!1,strictNullHandling:!1},d=function e(t,r,a,i,o,c,u,d,p,h,m,b,y){var g=t;if("function"===typeof u?g=u(r,g):g instanceof Date?g=h(g):"comma"===a&&s(g)&&(g=g.join(",")),null===g){if(i)return c&&!b?c(r,f.encoder,y):r;g=""}if("string"===typeof g||"number"===typeof g||"boolean"===typeof g||n.isBuffer(g)){if(c){var v=b?r:c(r,f.encoder,y);return[m(v)+"="+m(c(g,f.encoder,y))]}return[m(r)+"="+m(String(g))]}var w,O=[];if("undefined"===typeof g)return O;if(s(u))w=u;else{var x=Object.keys(g);w=d?x.sort(d):x}for(var j=0;j<w.length;++j){var C=w[j];o&&null===g[C]||(s(g)?l(O,e(g[C],"function"===typeof a?a(r,C):r,a,i,o,c,u,d,p,h,m,b,y)):l(O,e(g[C],r+(p?"."+C:"["+C+"]"),a,i,o,c,u,d,p,h,m,b,y)))}return O},p=function(e){if(!e)return f;if(null!==e.encoder&&void 0!==e.encoder&&"function"!==typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||f.charset;if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=a["default"];if("undefined"!==typeof e.format){if(!i.call(a.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=a.formatters[r],o=f.filter;return("function"===typeof e.filter||s(e.filter))&&(o=e.filter),{addQueryPrefix:"boolean"===typeof e.addQueryPrefix?e.addQueryPrefix:f.addQueryPrefix,allowDots:"undefined"===typeof e.allowDots?f.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:f.charsetSentinel,delimiter:"undefined"===typeof e.delimiter?f.delimiter:e.delimiter,encode:"boolean"===typeof e.encode?e.encode:f.encode,encoder:"function"===typeof e.encoder?e.encoder:f.encoder,encodeValuesOnly:"boolean"===typeof e.encodeValuesOnly?e.encodeValuesOnly:f.encodeValuesOnly,filter:o,formatter:n,serializeDate:"function"===typeof e.serializeDate?e.serializeDate:f.serializeDate,skipNulls:"boolean"===typeof e.skipNulls?e.skipNulls:f.skipNulls,sort:"function"===typeof e.sort?e.sort:null,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:f.strictNullHandling}};e.exports=function(e,t){var r,n,a=e,i=p(t);"function"===typeof i.filter?(n=i.filter,a=n("",a)):s(i.filter)&&(n=i.filter,r=n);var c,u=[];if("object"!==typeof a||null===a)return"";c=t&&t.arrayFormat in o?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var f=o[c];r||(r=Object.keys(a)),i.sort&&r.sort(i.sort);for(var h=0;h<r.length;++h){var m=r[h];i.skipNulls&&null===a[m]||l(u,d(a[m],m,f,i.strictNullHandling,i.skipNulls,i.encode?i.encoder:null,i.filter,i.sort,i.allowDots,i.serializeDate,i.formatter,i.encodeValuesOnly,i.charset))}var b=u.join(i.delimiter),y=!0===i.addQueryPrefix?"?":"";return i.charsetSentinel&&("iso-8859-1"===i.charset?y+="utf8=%26%2310003%3B&":y+="utf8=%E2%9C%93&"),b.length>0?y+b:""}},4328:function(e,t,r){"use strict";var n=r("4127"),a=r("9e6a"),i=r("b313");e.exports={formats:i,parse:a,stringify:n}},"5c7c":function(e,t,r){"use strict";r.d(t,"d",(function(){return a})),r.d(t,"c",(function(){return i})),r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return s}));var n=r("bc43");function a(e){return Object(n["a"])({url:"/statistics/wmsContractAnalysis/pageList",method:"post",data:e})}function i(e){return Object(n["a"])({url:"/statistics/wmsContractAnalysis/detail",method:"post",data:e})}function o(e){return Object(n["a"])({url:"/statistics/wmsContractAnalysis/chart",method:"post",data:e})}function s(e){return Object(n["a"])({url:"/statistics/excel/export/inventoryAnalysisByCustom",method:"post",responseType:"blob",timeout:5e5,data:e})}},6523:function(e,t,r){},"8aae":function(e,t,r){r("32a6"),e.exports=r("584a").Object.keys},"9b34":function(e,t,r){"use strict";var n=r("6523"),a=r.n(n);a.a},"9e6a":function(e,t,r){"use strict";var n=r("d233"),a=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},o=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},s="utf8=%26%2310003%3B",c="utf8=%E2%9C%93",l=function(e,t){var r,l={},u=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,f=t.parameterLimit===1/0?void 0:t.parameterLimit,d=u.split(t.delimiter,f),p=-1,h=t.charset;if(t.charsetSentinel)for(r=0;r<d.length;++r)0===d[r].indexOf("utf8=")&&(d[r]===c?h="utf-8":d[r]===s&&(h="iso-8859-1"),p=r,r=d.length);for(r=0;r<d.length;++r)if(r!==p){var m,b,y=d[r],g=y.indexOf("]="),v=-1===g?y.indexOf("="):g+1;-1===v?(m=t.decoder(y,i.decoder,h),b=t.strictNullHandling?null:""):(m=t.decoder(y.slice(0,v),i.decoder,h),b=t.decoder(y.slice(v+1),i.decoder,h)),b&&t.interpretNumericEntities&&"iso-8859-1"===h&&(b=o(b)),b&&t.comma&&b.indexOf(",")>-1&&(b=b.split(",")),a.call(l,m)?l[m]=n.combine(l[m],b):l[m]=b}return l},u=function(e,t,r){for(var n=t,a=e.length-1;a>=0;--a){var i,o=e[a];if("[]"===o&&r.parseArrays)i=[].concat(n);else{i=r.plainObjects?Object.create(null):{};var s="["===o.charAt(0)&&"]"===o.charAt(o.length-1)?o.slice(1,-1):o,c=parseInt(s,10);r.parseArrays||""!==s?!isNaN(c)&&o!==s&&String(c)===s&&c>=0&&r.parseArrays&&c<=r.arrayLimit?(i=[],i[c]=n):i[s]=n:i={0:n}}n=i}return n},f=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/,o=/(\[[^[\]]*])/g,s=i.exec(n),c=s?n.slice(0,s.index):n,l=[];if(c){if(!r.plainObjects&&a.call(Object.prototype,c)&&!r.allowPrototypes)return;l.push(c)}var f=0;while(null!==(s=o.exec(n))&&f<r.depth){if(f+=1,!r.plainObjects&&a.call(Object.prototype,s[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(s[1])}return s&&l.push("["+n.slice(s.index)+"]"),u(l,t,r)}},d=function(e){if(!e)return i;if(null!==e.decoder&&void 0!==e.decoder&&"function"!==typeof e.decoder)throw new TypeError("Decoder has to be a function.");if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t="undefined"===typeof e.charset?i.charset:e.charset;return{allowDots:"undefined"===typeof e.allowDots?i.allowDots:!!e.allowDots,allowPrototypes:"boolean"===typeof e.allowPrototypes?e.allowPrototypes:i.allowPrototypes,arrayLimit:"number"===typeof e.arrayLimit?e.arrayLimit:i.arrayLimit,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:i.charsetSentinel,comma:"boolean"===typeof e.comma?e.comma:i.comma,decoder:"function"===typeof e.decoder?e.decoder:i.decoder,delimiter:"string"===typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:i.delimiter,depth:"number"===typeof e.depth?e.depth:i.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"===typeof e.interpretNumericEntities?e.interpretNumericEntities:i.interpretNumericEntities,parameterLimit:"number"===typeof e.parameterLimit?e.parameterLimit:i.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"===typeof e.plainObjects?e.plainObjects:i.plainObjects,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:i.strictNullHandling}};e.exports=function(e,t){var r=d(t);if(""===e||null===e||"undefined"===typeof e)return r.plainObjects?Object.create(null):{};for(var a="string"===typeof e?l(e,r):e,i=r.plainObjects?Object.create(null):{},o=Object.keys(a),s=0;s<o.length;++s){var c=o[s],u=f(c,a[c],r);i=n.merge(i,u,r)}return n.compact(i)}},a4bb:function(e,t,r){e.exports=r("8aae")},a8db:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("e265"),a=r.n(n),i=r("a4bb"),o=r.n(i);function s(e,t){if(null==e)return{};var r,n,a={},i=o()(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function c(e,t){if(null==e)return{};var r,n,i=s(e,t);if(a.a){var o=a()(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}},b313:function(e,t,r){"use strict";var n=String.prototype.replace,a=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,a,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},c3cb:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("div",{staticClass:"clearfix top-filter"},[r("el-form",{ref:"filterItem",attrs:{model:e.query,inline:""}},[r("el-form-item",{staticClass:"fl",attrs:{prop:"date"}},[r("el-date-picker",{attrs:{type:"monthrange",clearable:"","value-format":"yyyy-MM","range-separator":"至","start-placeholder":"开始月份","end-placeholder":"结束月份"},model:{value:e.query.date,callback:function(t){e.$set(e.query,"date",t)},expression:"query.date"}})],1),r("el-form-item",{staticClass:"fl",attrs:{prop:"contractName"}},[r("el-input",{staticClass:"filter-item",staticStyle:{width:"178px"},attrs:{clearable:"",placeholder:"合同号"},model:{value:e.query.contractName,callback:function(t){e.$set(e.query,"contractName","string"===typeof t?t.trim():t)},expression:"query.contractName"}})],1),r("el-form-item",{staticClass:"fl",attrs:{prop:"supplierName"}},[r("el-input",{staticClass:"filter-item",staticStyle:{width:"178px"},attrs:{clearable:"",placeholder:"供应商名称"},model:{value:e.query.supplierName,callback:function(t){e.$set(e.query,"supplierName","string"===typeof t?t.trim():t)},expression:"query.supplierName"}})],1),r("el-button",{staticClass:"filter-item",attrs:{type:"success",icon:"el-icon-search"},on:{click:e.searchInit}},[e._v("搜索")]),r("el-button",{staticClass:"filter-item",attrs:{type:"warning",icon:"el-icon-refresh-left"},on:{click:function(t){return e.resetForm("filterItem")}}},[e._v("重置")])],1)],1),r("el-row",[r("el-button",{staticClass:"filter-item",attrs:{type:"info",icon:"el-icon-setting"},on:{click:e.setTable}},[e._v("设置")]),r("el-button",{staticClass:"filter-item",attrs:{type:"info",icon:"el-icon-setting",loading:e.dialogLoading},on:{click:e.openDialog}},[e._v("自定义统计")]),r("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.handleExport1}},[e._v("导出")])],1),r("el-collapse",{staticStyle:{margin:"0 0 20px 0"},attrs:{accordion:""},on:{change:e.collapseChange},model:{value:e.collapseValue,callback:function(t){e.collapseValue=t},expression:"collapseValue"}},[r("el-collapse-item",{attrs:{title:"图表展示",name:"1"}},[r("chart-com",{ref:"chartCom",staticStyle:{height:"310px"},attrs:{query:e.query}})],1)],1),r("el-row",[r("table-com",{key:e.baseTableKey,ref:e.refTableName,attrs:{"ref-name":e.refName,"table-height-type":e.collapseValue?220:570,loading:e.loading,index:!0,selection:!1,"table-column-sort":!0,"form-ident":e.formIdent,"table-data":e.tableData,"column-list":e.columnList,"show-operate":!0,"operation-width":120,"refresh-key":e.refreshKey,"expand-list":e.expandList},on:{rowClick:e.handleRowClick,refresh:e.searchInit},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"warning",icon:"el-icon-edit"},on:{click:function(r){return e.handleModify(t.row)}}},[e._v("详情")])]}}])})],1),r("pagination",{attrs:{page:e.pageInfo.current,limit:e.pageInfo.size,total:e.total,"page-sizes":[50,100,150,500]},on:{"update:page":function(t){return e.$set(e.pageInfo,"current",t)},"update:limit":function(t){return e.$set(e.pageInfo,"size",t)},pagination:e.init}}),r("edit-dialog",{attrs:{"form-ident":e.formIdent,"table-data":e.dialogTableData,"column-list":e.columnListInput,"expand-list":e.expandList},on:{"update:tableData":function(t){e.dialogTableData=t},"update:table-data":function(t){e.dialogTableData=t},dialogConfirm:e.onDialogConfirm},model:{value:e.dialogVisible,callback:function(t){e.dialogVisible=t},expression:"dialogVisible"}})],1)},a=[],i=(r("8e6e"),r("456d"),r("34ef"),r("28a5"),r("ac6a"),r("5df3"),r("a481"),r("7f7f"),r("96cf"),r("3b8d")),o=r("a8db"),s=r("bd86"),c=r("75fc"),l=r("e08f"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",[r("el-row",{staticStyle:{height:"100%"},attrs:{gutter:20}},[r("el-col",{staticStyle:{height:"100%"}},[r("chart-one",e._b({key:e.viewKey,ref:"ChartOne",staticStyle:{height:"100%"},attrs:{"chart-loading":e.loading,"chart-data":e.percentageChart}},"chart-one",e.$attrs,!1))],1)],1)],1)},f=[],d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("chart-card",{attrs:{title:e.title}},[[r("div",{staticStyle:{height:"100%"}},[r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:e.refName,staticStyle:{height:"230px"},attrs:{id:e.refName}})])]],2)},p=[],h=(r("cd1e"),r("9020")),m=r("ebb5"),b={name:"RatioCom",components:{ChartCard:h["a"]},mixins:[m["a"]],props:{title:{type:String,default:"合同到货分析"},chartLoading:{type:Boolean,default:!1},chartData:{type:Object,default:function(){}}},data:function(){return{refName:"Ratio",options:{},timer:null}},watch:{"chartData.xAxisData":function(e){e.length&&(this.resize(),this.init(),this.resize())}},beforeDestroy:function(){this.timer&&clearInterval(this.timer),this.chart&&this.chart.dispose()&&(this.chart=null)},mounted:function(){this.screenWidth=window.screen.width||document.documentElement.clientWidth,this.screenHeight=window.screen.height||document.documentElement.clientHeight,this.screenWidth&&(1024===this.screenWidth||this.screenWidth<1024)&&(this.zoom=.8)},methods:{init:function(){var e=this.chartData,t=e.data,r=e.xAxisData,n=[{data:r,bottom:200,axisTick:{length:480},axisLabel:{show:!0,interval:0}}],a=[],i=20,o=t.map((function(e,t){return a.push(e.name),n.push({data:e.data,position:"bottom",offset:20+20*t,axisTick:{show:!1}}),i+=20,{name:e.name,data:e.bar,stack:"ad",type:"bar",barWidth:50}}));n.push({position:"bottom",offset:i,axisTick:{show:!1}}),this.getCompleteOptions(a,o,n,i+1)},getCompleteOptions:function(e,t,r,n){var a=this;this.timer&&clearInterval(this.timer),this.chart&&this.chart.dispose()&&(this.chart=null),this.chart=this.$echarts.init(this.$refs[this.refName],"macarons"),this.chart&&r.length&&(this.options={grid:{bottom:n,left:120,top:10,right:10},legend:{data:e,bottom:0,left:0,orient:"vertical",itemGap:5},xAxis:r,yAxis:{},series:t,dataZoom:[{type:"inside",xAxisIndex:[0,1,2,3],startValue:0,endValue:3}]},this.chart.setOption(this.options),this.chart.resize(),this.timer=setInterval((function(){a.options.dataZoom[0].endValue===r[0].data.length-1?(a.options.dataZoom[0].startValue=0,a.options.dataZoom[0].endValue=3):(a.options.dataZoom[0].endValue=a.options.dataZoom[0].endValue+1,a.options.dataZoom[0].startValue=a.options.dataZoom[0].startValue+1),a.chart.setOption(a.options),a.chart.resize()}),2500))}}},y=b,g=r("2877"),v=Object(g["a"])(y,d,p,!1,null,"2a544fec",null),w=v.exports,O=r("5c7c"),x={name:"ChartsCom",components:{ChartOne:w},data:function(){return{viewKey:1,loading:!1,percentageChart:{}}},methods:{initCharts:function(e){var t=this;return this.loading=!0,new Promise((function(r,n){Object(O["b"])(e).then((function(e){var n=e.code,a=e.data;n||(t.percentageChart=a),t.loading=!1,r(e)})).catch((function(e){t.loading=!1,n(e)}))}))},reset:function(){this.viewKey++,this.$refs.ChartOne.resize()},handleUploadImg:function(){}}},j=x,C=Object(g["a"])(j,u,f,!1,null,"fa6eca62",null),D=C.exports,k=r("1790"),S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-drawer",{attrs:{center:!0,"append-to-body":!0,"close-on-press-escape":!1,"wrapper-closable":!1,title:e.title,visible:e.value,size:750,"destroy-on-close":!0,direction:"btt","before-close":e.beforeClose},on:{open:e.initSelect}},[r("el-scrollbar",{staticClass:"query-more-scroll-drawer"},[r("el-row",[r("table-com",{ref:e.refName,attrs:{loading:e.loading,index:!0,selection:!1,"table-column-sort":!0,"table-height-type":620,"form-ident":e.formIdent,"table-data":e.tableData,"column-list":e.columnList,"show-operate":!1,"refresh-key":e.refreshKey,"expand-list":e.expandList}})],1)],1),r("div",{staticClass:"drawer-footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.confirmDialog}},[e._v("确 定")]),r("el-button",{on:{click:e.beforeClose}},[e._v("取 消")])],1)],1)},N=[],L={name:"CustomEditCom",mixins:[k["a"]],props:{value:{type:Boolean,default:!1},title:{type:String,default:"自定义统计编辑"},formIdent:{type:String,default:""},tableData:{type:Array,default:function(){return[]}},columnList:{type:Array,default:function(){return[]}},expandList:{type:Array,default:function(){return[]}}},data:function(){return{refName:"CustomEditComTable",refreshKey:(new Date).getTime(),form:{},loading:!1,rules:{},query:{}}},methods:{confirmDialog:function(e){this.$emit("dialogConfirm")},initSelect:function(){},beforeClose:function(e){this.tableData=new Array(0),this.$emit("input",!1),"function"===typeof e&&e()}}},T=L,I=(r("9b34"),Object(g["a"])(T,S,N,!1,null,"e48adfe6",null)),R=I.exports,A=r("cddf"),P=r("fa7d"),$=r("1368"),E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"word";return e.map((function(e){return{module:t,prop:"".concat(e.prop),label:e.label,align:"center",width:"input"===t?280:"",minWidth:"input"===t?280:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"}}))},q=r("c1df"),V=r.n(q),_=r("ed08"),F=r("25ca"),z=r("21a6");function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){Object(s["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}V.a.locale("zh-cn");var U=function(){return{date:"",startDate:"",endDate:"",contractName:"",supplierName:""}},M={components:{ChartCom:D,EditDialog:R},mixins:[l["a"],k["a"]],data:function(){return{title:this.$route.meta.title,refTableName:"baseTableRef",refName:"table",loading:!1,query:U(),tableData:[],columnList:[],columnSets:[{prop:"supplierName",width:280}],columnSetsInput:[],columnListInput:[],tableColumnSortData:[],dialogForm:{},editType:"add",dialogVisible:!1,dialogLoading:!1,dialogTableData:[],exportLoading:!1,monthMap:{},baseTableKey:1,collapseValue:"1"}},computed:{dialogTitle:function(){return"add"===this.editType?"新增".concat(this.title,"信息"):"编辑".concat(this.title,"信息")}},watch:{collapseValue:{handler:function(){var e=this;this.$nextTick((function(){e.baseTableKey++}))}},"query.date":{handler:function(e){if(!e)return this.query.startDate="",void(this.query.endDate="");this.query.startDate=e[0],this.query.endDate=e[1]}}},mounted:function(){this.columnSets=Object(c["a"])(this.columnSets),this.columnSetsInput=[].concat(Object(c["a"])(this.columnSets),Object(c["a"])(E(this.columnSets,"input"))),this.columnListInput=this.columnList.map((function(e){return H({},e,{module:"input"})})),this.initQueryTime(),this.init()},methods:{initQueryTime:function(){var e=V()().format("yyyy-MM"),t=V()().subtract(1,"months").format("yyyy-MM");this.query.date=[t,e],this.query.startDate=t,this.query.endDate=e},init:function(){var e=this;this.loading=!0;var t=this.query,r=(t.date,Object(o["a"])(t,["date"])),n=H({},r,{page:H({},this.pageInfo)});return new $["Promise"]((function(t,r){Object(O["d"])(H({},n)).then((function(r){var a=r.code,i=r.data;if(!a){e.baseTableKey++;var s=i.formIdent,c=i.formHeadSets,l=i.pageData;e.formIdent=s,e.columnList=e.initTableHeadMixins(c),e.columnListInput=e.initTableHeadMixins(c,"input","columnSetsInput",180);var u=l.list,f=Object(o["a"])(l,["list"]);e.initPage(f),e.tableData=u,"1"===e.collapseValue&&e.$refs.chartCom.initCharts(n)}e.loading=!1,t(r)})).catch((function(t){e.loading=!1,r(t)}))}))},handleRowClick:function(e){e.row;var t=e.column;e.cell,e.event;if("操作"===t.label)return!1},onDialogConfirm:function(){this.tableData=this.dialogTableData,this.getChartData(),this.dialogVisible=!1},getChartData:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(P["c"])(Object(O["b"])({dataList:this.handleSubmitCustomData()}));case 2:if(t=e.sent,t.success){e.next=5;break}return e.abrupt("return");case 5:this.updateColumnChart("ChartOne",t.data);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),updateColumnChart:function(e,t){var r=t.data,n=t.xAxisData,a=this.$refs.chartCom,i=a.$refs[e],o=[{data:n,bottom:200,axisTick:{length:480},axisLabel:{show:!0,interval:0,formatter:function(e){var t="",r=e.length,n=4,a=Math.ceil(r/n);if(r>n)for(var i=0;i<a;i++){var o="",s=i*n,c=s+n;o=i===a-1?e.substring(s,r):e.substring(s,c)+"\n",t+=o}else t=e;return t}}}],s=[],c=20,l=r.map((function(e,t){return s.push(e.name),o.push({data:e.data,position:"bottom",offset:20+20*t,axisTick:{show:!1}}),c+=20,{name:e.name,data:e.bar,stack:"ad",type:"bar"}}));o.push({position:"bottom",offset:c,axisTick:{show:!1}}),i.getCompleteOptions(s,l,o,c+1),i.chart.setOption(i.options)},handleExport:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.exportLoading=!0,e.next=3,this.uploadAllChart();case 3:if(t=e.sent,!1!==t.success){e.next=8;break}return this.exportLoading=!1,this.$notify.error({title:"错误",message:"上传错误"}),e.abrupt("return");case 8:return e.prev=8,e.next=11,Object(O["a"])(H({},t.reduce((function(e,t){return e[t.key]=t.value,e}),{}),{wmsInventoryAnalysisDTOList:this.handleSubmitCustomData()}));case 11:r=e.sent,this.exportLoading=!1,this.download(r,"实时库存分析.xls"),e.next=20;break;case 16:e.prev=16,e.t0=e["catch"](8),this.$notify.error({title:"错误",message:"导出错误，请重试"});case 20:case"end":return e.stop()}}),e,this,[[8,16]])})));function t(){return e.apply(this,arguments)}return t}(),handleExport1:Object(_["a"])((function(){var e=this.$refs[this.refTableName].$refs[this.refName];e.$el.querySelector(".el-table__fixed")&&e.$el.removeChild(e.$el.querySelector(".el-table__fixed")),e.$el.querySelector(".el-table__fixed-right")&&e.$el.removeChild(e.$el.querySelector(".el-table__fixed-right"));var t=F["a"].table_to_book(e.$el),r=F["b"](t,{bookType:"xlsx",bookSST:!0,type:"array"});try{var n=(new Date).toLocaleString().replace(/\//g,"").replace(/:/g,"").replace(" ","");Object(z["saveAs"])(new Blob([r],{type:"application/octet-stream"}),"订单合同统计分析_".concat(n,".xlsx")),this.baseTableKey++}catch(a){}return r}),800,!1),download:function(e,t){var r=t,n=new Blob([e]),a=window.URL.createObjectURL(n);if(window.navigator.msSaveBlob)try{window.navigator.msSaveBlob(n,r)}catch(o){}else{var i=document.createElement("a");i.style.display="none",i.href=a,i.setAttribute("download",r),document.body.appendChild(i),i.click()}URL.revokeObjectURL(a)},uploadAllChart:function(){var e=this,t=this.$refs.chartCom,r=["InventoryCom","YearChartCom","Ratio","TurnoverRateCom","InventoryAccount","InventoryAccountRatio"],n=r.map((function(r){return e.uploadChart(t.$refs[r].chart,r)}));return new $["Promise"]((function(e){$["Promise"].all(n).then((function(t){e(t)})).catch((function(t){e({success:!1})}))}))},uploadChart:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,i,o,s,c,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n={InventoryCom:"inventoryRatioFileId",YearChartCom:"agingRatioFileId",Ratio:"inventoryMonthFileId",TurnoverRateCom:"inventoryRevolveRateFileId",InventoryAccount:"inventoryAgingImageFileId",InventoryAccountRatio:"inventoryAgingRateFileId"},e.prev=1,a=t.getDataURL({type:"base64",pixelRatio:1}),e.next=9;break;case 5:throw e.prev=5,e.t0=e["catch"](1),this.$notify.error({title:"错误",message:"导出前请先展开图表查看"}),e.t0;case 9:for(i=window.atob(a.split(",")[1]),o=[],s=0;s<i.length;s++)o.push(i.charCodeAt(s));return c=new Blob([new Uint8Array(o)],{type:"image/jpeg"}),l=new FormData,l.append("file",c,Date.now()+".jpg"),e.next=17,Object(P["b"])(Object(A["m"])("/wms/file/upload",l));case 17:if(u=e.sent,u.success){e.next=20;break}throw u;case 20:return e.abrupt("return",{key:n[r],value:u.data.data.id});case 21:case"end":return e.stop()}}),e,this,[[1,5]])})));function t(t,r){return e.apply(this,arguments)}return t}(),handleSubmitCustomData:function(){return this.tableData},setTable:function(){this.$refs[this.refTableName].sortDialogVisible=!0},resetForm:function(e){this.$refs[e].resetFields(),this.query=U(),this.searchInit()},handleModify:function(e){this.$router.push({name:"AnalysisOrderContractDetail",params:{id:e.id||0}})},openDialog:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.dialogLoading=!0,e.next=3,this.$nextTick();case 3:setTimeout(Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.dialogTableData=JSON.parse(JSON.stringify(t.tableData)),t.dialogVisible=!0,e.next=4,t.$nextTick();case 4:t.dialogLoading=!1;case 5:case"end":return e.stop()}}),e)}))),200);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),collapseChange:function(){var e=this.query,t=(e.date,Object(o["a"])(e,["date"])),r=H({},t,{page:H({},this.pageInfo)});this.$refs.chartCom.reset(),"1"===this.collapseValue&&this.$refs.chartCom.initCharts(r)}}},Q=M,K=Object(g["a"])(Q,n,a,!1,null,"94806742",null);t["default"]=K.exports},ce7e:function(e,t,r){var n=r("63b6"),a=r("584a"),i=r("294c");e.exports=function(e,t){var r=(a.Object||{})[e]||Object[e],o={};o[e]=t(r),n(n.S+n.F*i((function(){r(1)})),"Object",o)}},d233:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,a=Array.isArray,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),o=function(e){while(e.length>1){var t=e.pop(),r=t.obj[t.prop];if(a(r)){for(var n=[],i=0;i<r.length;++i)"undefined"!==typeof r[i]&&n.push(r[i]);t.obj[t.prop]=n}}},s=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)"undefined"!==typeof e[n]&&(r[n]=e[n]);return r},c=function e(t,r,i){if(!r)return t;if("object"!==typeof r){if(a(t))t.push(r);else{if(!t||"object"!==typeof t)return[t,r];(i&&(i.plainObjects||i.allowPrototypes)||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!==typeof t)return[t].concat(r);var o=t;return a(t)&&!a(r)&&(o=s(t,i)),a(t)&&a(r)?(r.forEach((function(r,a){if(n.call(t,a)){var o=t[a];o&&"object"===typeof o&&r&&"object"===typeof r?t[a]=e(o,r,i):t.push(r)}else t[a]=r})),t):Object.keys(r).reduce((function(t,a){var o=r[a];return n.call(t,a)?t[a]=e(t[a],o,i):t[a]=o,t}),o)},l=function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},u=function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(a){return n}},f=function(e,t,r){if(0===e.length)return e;var n="string"===typeof e?e:String(e);if("iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var a="",o=0;o<n.length;++o){var s=n.charCodeAt(o);45===s||46===s||95===s||126===s||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122?a+=n.charAt(o):s<128?a+=i[s]:s<2048?a+=i[192|s>>6]+i[128|63&s]:s<55296||s>=57344?a+=i[224|s>>12]+i[128|s>>6&63]+i[128|63&s]:(o+=1,s=65536+((1023&s)<<10|1023&n.charCodeAt(o)),a+=i[240|s>>18]+i[128|s>>12&63]+i[128|s>>6&63]+i[128|63&s])}return a},d=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var a=t[n],i=a.obj[a.prop],s=Object.keys(i),c=0;c<s.length;++c){var l=s[c],u=i[l];"object"===typeof u&&null!==u&&-1===r.indexOf(u)&&(t.push({obj:i,prop:l}),r.push(u))}return o(t),e},p=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},h=function(e){return!(!e||"object"!==typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},m=function(e,t){return[].concat(e,t)};e.exports={arrayToObject:s,assign:l,combine:m,compact:d,decode:u,encode:f,isBuffer:h,isRegExp:p,merge:c}},e265:function(e,t,r){e.exports=r("ed33")},ed33:function(e,t,r){r("014b"),e.exports=r("584a").Object.getOwnPropertySymbols},fa7d:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return s})),r.d(t,"a",(function(){return c}));r("8e6e"),r("ac6a"),r("456d"),r("7514"),r("2fdb");var n=r("bd86");r("4328"),r("4360");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e){return new Promise((function(t){e.then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.code,n=void 0===r?0:r;t({data:e,success:0===n})})).catch((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t({data:e,success:!1})}))}))}function s(e){return new Promise((function(t){e.then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(i({},e,{success:e.success||0===e.code}))})).catch((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t({data:e,success:!1})}))}))}function c(e,t){var r=new Blob([t]);if("download"in document.createElement("a")){var n=document.createElement("a");n.download=e,n.style.display="none",n.href=URL.createObjectURL(r),document.body.appendChild(n),n.click(),URL.revokeObjectURL(n.href)}else navigator.msSaveBlob(r,e)}}}]);
//# sourceMappingURL=AnalysisOrderContract.a331dec9.js.map