(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["OutBoundOutsourcing"],{"16ff":function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return a})),n.d(e,"a",(function(){return u})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return c}));var r=n("bc43");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/basic/supplier/pageList",method:"post",data:t})}function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/basic/supplier/listItem",method:"post",data:t})}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/basic/supplier/add",method:"post",data:t})}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/basic/supplier/edit",method:"post",data:t})}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/basic/supplier/delete",method:"post",data:t})}},"32a6":function(t,e,n){var r=n("241e"),i=n("c3a1");n("ce7e")("keys",(function(){return function(t){return i(r(t))}}))},3508:function(t,e,n){"use strict";n.d(e,"f",(function(){return i})),n.d(e,"a",(function(){return a})),n.d(e,"d",(function(){return u})),n.d(e,"c",(function(){return o})),n.d(e,"e",(function(){return c})),n.d(e,"g",(function(){return s})),n.d(e,"h",(function(){return l})),n.d(e,"i",(function(){return d})),n.d(e,"b",(function(){return f}));var r=n("bc43");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillOutsourceOut/pageList",method:"post",data:t})}function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillOutsourceOut/add",method:"post",data:t})}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillOutsourceOut/edit",method:"post",data:t})}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillOutsourceOut/delete",method:"post",data:t})}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillOutsourceOut/detail",method:"post",data:t})}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillOutsourceOutDetail/pageList",method:"post",data:t})}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillOutsourceOut/submit",method:"post",data:t})}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillOutsourceOut/withdraw",method:"post",data:t})}function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillOutsourceOut/audit",method:"post",data:t})}},"8aae":function(t,e,n){n("32a6"),t.exports=n("584a").Object.keys},a4bb:function(t,e,n){t.exports=n("8aae")},a8db:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("e265"),i=n.n(r),a=n("a4bb"),u=n.n(a);function o(t,e){if(null==t)return{};var n,r,i={},a=u()(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}function c(t,e){if(null==t)return{};var n,r,a=o(t,e);if(i.a){var u=i()(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}},ce7e:function(t,e,n){var r=n("63b6"),i=n("584a"),a=n("294c");t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*a((function(){n(1)})),"Object",u)}},dc8f:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"g",(function(){return i})),n.d(e,"e",(function(){return a})),n.d(e,"h",(function(){return u})),n.d(e,"f",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return s})),n.d(e,"k",(function(){return l})),n.d(e,"i",(function(){return d})),n.d(e,"j",(function(){return f})),n.d(e,"d",(function(){return p}));var r=[{id:1,name:"待检验"},{id:2,name:"检验中"},{id:3,name:"已完成"},{id:6,name:"待更新"},{id:7,name:"档案未上传"}],i={0:"danger",1:"info",2:"warning",3:"success",4:"success",5:"success",6:"danger",7:"danger"},a={0:"草稿",1:"待检验",2:"检验中",3:"已完成",4:"已完成",5:"已完成",6:"待更新",7:"档案未上传"},u={0:"",1:"info",2:"warning",3:"success",4:"success"},o={0:"",1:"待检验",2:"检验中",3:"已完成",4:"已完成"},c={0:"danger",1:"success"},s={0:"不合格",1:"合格"},l=[{id:1,name:"全检"},{id:2,name:"抽检"}],d=[{id:1,name:"待检验"},{id:2,name:"检验中"},{id:3,name:"已完成"}],f={0:"未处理",1:"待完成",2:"已完成"},p={0:"未提交",1:"审核中",2:"未通过",3:"已完成",4:"驳回"}},e08f:function(t,e,n){"use strict";n("8e6e"),n("ac6a"),n("456d"),n("7514");var r=n("bd86");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e["a"]={data:function(){return{formIdent:"",tableData:[],columnList:[],expandList:[],tableColumnSortData:[],labels:{},refreshKey:1}},methods:{initTableHeadMixins:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"word",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"columnSets",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100,u=e.map((function(t){return a({isParam:!1},t,{width:"input"!==n||t.width?t.width:i,module:n})})).map((function(e){var n=t[r].find((function(t){return t.prop===e.prop}));return n?a({},e,{},n):a({},e)}));return this.$nextTick((function(){"word"===n&&(t.expandList=u.filter((function(t){return t.extend&&t.show})))})),this.$nextTick((function(){t.refreshKey+=1})),u.filter((function(t){return t.show&&!t.extend}))}}}},e265:function(t,e,n){t.exports=n("ed33")},ed33:function(t,e,n){n("014b"),t.exports=n("584a").Object.getOwnPropertySymbols},eddf:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"clearfix top-filter"},[n("el-form",{ref:"filterItem",attrs:{model:t.query,inline:""}},[n("el-form-item",{attrs:{prop:"billNumber"}},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"178px"},attrs:{filterable:"",clearable:"",placeholder:"单号"},model:{value:t.query.billNumber,callback:function(e){t.$set(t.query,"billNumber",e)},expression:"query.billNumber"}})],1),n("el-form-item",{attrs:{prop:"supplierId"}},[n("el-select",{staticClass:"filter-item",staticStyle:{width:"178px"},attrs:{filterable:"",clearable:"",placeholder:"去向(委托工厂)"},model:{value:t.query.supplierId,callback:function(e){t.$set(t.query,"supplierId",e)},expression:"query.supplierId"}},t._l(t.supplierPullList,(function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),n("el-form-item",{attrs:{prop:"startTime"}},[n("el-date-picker",{staticClass:"filter-item",staticStyle:{width:"178px"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"开始日期"},on:{change:function(e){t.query.endTime=""}},model:{value:t.query.startTime,callback:function(e){t.$set(t.query,"startTime",e)},expression:"query.startTime"}})],1),n("el-form-item",{attrs:{prop:"endTime"}},[n("el-date-picker",{staticClass:"filter-item",staticStyle:{width:"178px"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"结束日期","picker-options":{disabledDate:function(e){return e.getTime()<new Date(t.query.startTime).getTime()}}},model:{value:t.query.endTime,callback:function(e){t.$set(t.query,"endTime",e)},expression:"query.endTime"}})],1),n("el-button",{staticClass:"filter-item",attrs:{type:"success",icon:"el-icon-search"},on:{click:t.searchInit}},[t._v("搜索")]),n("el-button",{staticClass:"filter-item",attrs:{type:"warning",icon:"el-icon-refresh-left"},on:{click:function(e){return t.resetForm("filterItem")}}},[t._v("重置")]),n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.handleAdd}},[t._v("新增")])],1)],1),n("el-row",[n("table-com",{ref:"baseTableRef",attrs:{loading:t.loading,selection:!1,"table-column-sort":!0,"form-ident":t.formIdent,"table-data":t.tableData,"column-list":t.columnList,"operation-width":280,"refresh-key":t.refreshKey,"expand-list":t.expandList},on:{refresh:t.searchInit},scopedSlots:t._u([{key:"default",fn:function(e){return[[1,5].includes(e.row.status)?[n("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.handle(e.row,"Submit")}}},[t._v("提交")]),n("el-button",{attrs:{type:"warning"},on:{click:function(n){return t.handleModify(e.row)}}},[t._v("修改")]),n("el-button",{attrs:{type:"danger"},on:{click:function(n){return t.handle(e.row,"Delete")}}},[t._v("删除")])]:t._e(),2===e.row.status?[n("el-button",{attrs:{type:"warning"},on:{click:function(n){return t.handle(e.row,"Withdraw")}}},[t._v("撤回")])]:t._e(),n("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.handleDetail(e.row)}}},[t._v("详情")])]}}])})],1),n("pagination",{attrs:{page:t.pageInfo.current,limit:t.pageInfo.size,total:t.total},on:{"update:page":function(e){return t.$set(t.pageInfo,"current",e)},"update:limit":function(e){return t.$set(t.pageInfo,"size",e)},pagination:t.init}})],1)},i=[],a=(n("8e6e"),n("456d"),n("6762"),n("2fdb"),n("7f7f"),n("ac6a"),n("5df3"),n("a8db")),u=n("bd86"),o=n("3508"),c=n("16ff"),s=n("1790"),l=n("e08f"),d=n("333d"),f=n("dc8f"),p=n("2f62");function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){Object(u["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var h={components:{Pagination:d["a"]},mixins:[s["a"],l["a"]],data:function(){return{query:{billNumber:"",supplierId:"",startTime:"",endTime:""},title:this.$route.meta.title,loading:!1,tableData:[],dialogVisible:!1,returnOfGoodsMap:f["d"],columnSets:[{module:"status",prop:"status",formatter:function(t){return f["d"][t-1]},statusFormatter:function(t){var e={1:"info",2:"primary",3:"warning",4:"warning",5:"info"};return t.status?e[t.status]:""}}],pullListConfig:[{api:Object(c["e"])(),dataKey:"supplierPullList",name:"供应商"}],supplierPullList:[]}},computed:b({},Object(p["c"])("app",{navbarWarehouseCheckedList:"navbarWarehouseCheckedList"})),watch:{navbarWarehouseCheckedList:{handler:function(){this.init()},deep:!0}},mounted:function(){this.init(),this.getPullList()},methods:{init:function(){var t=this;return this.loading=!0,new Promise((function(e,n){Object(o["f"])(b({page:b({},t.pageInfo)},t.query,{warehouseIds:t.navbarWarehouseCheckedList.map((function(t){return t.id}))})).then((function(n){var r=n.code,i=n.data;if(!r){var u=i.formIdent,o=i.formHeadSets,c=i.pageData;t.formIdent=u,t.columnList=t.initTableHeadMixins(o);var s=c.list,l=Object(a["a"])(c,["list"]);t.initPage(l),t.tableData=s}t.loading=!1,e(n)})).catch((function(e){t.loading=!1,n(e)}))}))},getPullList:function(){var t=this,e=this.pullListConfig.map((function(t){return t.api}));Promise.all(e).then((function(e){e.length&&e.forEach((function(e,n){var r=t.pullListConfig[n].dataKey;t[r]=e.code?[]:e.data}))})).catch((function(t){}))},handleAdd:function(){this.$router.push({name:"BillOutsourceOutAdd"})},handleModify:function(t){this.$router.push({name:"BillOutsourceOutEdit",query:{billNumber:t.billNumber}})},handle:function(t,e){var n=this,r={Submit:{api:o["h"],tip:"该工单即将提交"},Delete:{api:o["c"],tip:"该工单即将删除"},Withdraw:{api:o["i"],tip:"该工单即将撤回"}};this.$confirm("".concat(r[e]["tip"],"，是否继续？"),"提示",{confirmButtonText:"确 定",cancelButtonText:"取 消",cancelButtonClass:"btn-custom-cancel",type:"warning",lockScroll:!1}).then((function(){r[e]["api"](b({},"Delete"===e&&{id:t.id,dataSources:t.dataSources},{},["Submit","Withdraw"].includes(e)&&{billNumber:t.billNumber})).then((function(t){var e=t.code;e||(n.$notify.success({title:"成功",message:"操作成功"}),n.init())}))})).catch((function(t){n.$notify.info({title:"消息",message:"操作已取消"})}))},handleDetail:function(t){this.$router.push({name:"BillOutsourceOutDetail",query:{billNumber:t.billNumber}})},resetForm:function(t){this.$refs[t].resetFields(),this.searchInit()}}},O=h,v=n("2877"),y=Object(v["a"])(O,r,i,!1,null,null,null);e["default"]=y.exports}}]);
//# sourceMappingURL=OutBoundOutsourcing.f9cfaecf.js.map