(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DashboardTaskList"],{"32a6":function(e,t,r){var n=r("241e"),i=r("c3a1");r("ce7e")("keys",(function(){return function(e){return i(n(e))}}))},"8aae":function(e,t,r){r("32a6"),e.exports=r("584a").Object.keys},a4bb:function(e,t,r){e.exports=r("8aae")},a8db:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("e265"),i=r.n(n),a=r("a4bb"),o=r.n(a);function l(e,t){if(null==e)return{};var r,n,i={},a=o()(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}function c(e,t){if(null==e)return{};var r,n,a=l(e,t);if(i.a){var o=i()(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}},bc0e:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("div",{staticClass:"clearfix top-filter"},[r("el-form",{ref:"filterItem",attrs:{model:e.query,inline:""}},[r("el-form-item",{attrs:{prop:"time"}},[r("el-date-picker",{staticStyle:{width:"260px"},attrs:{type:"daterange",align:"right","unlink-panels":"","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"任务发起日期","end-placeholder":"任务审批日期","picker-options":e.pickerOptions},model:{value:e.query.time,callback:function(t){e.$set(e.query,"time",t)},expression:"query.time"}})],1),r("el-form-item",{attrs:{prop:"formName"}},[r("el-input",{staticClass:"filter-item",staticStyle:{width:"178px"},attrs:{placeholder:"处理业务名称搜索"},model:{value:e.query.formName,callback:function(t){e.$set(e.query,"formName",t)},expression:"query.formName"}})],1),r("el-button",{staticClass:"filter-item",attrs:{type:"success",icon:"el-icon-search"},on:{click:e.init}},[e._v("搜索")]),r("el-button",{staticClass:"filter-item",attrs:{type:"warning",icon:"el-icon-refresh-left"},on:{click:function(t){return e.resetForm("filterItem")}}},[e._v("重置")])],1)],1),r("el-row",[r("table-com",{ref:"baseTableRef",attrs:{loading:e.loading,index:"",selection:!1,"table-data":e.tableData,"column-list":e.columnList,"operation-width":120,"table-column-sort":!1},on:{rowClick:e.handleRowClick,refresh:e.searchInit},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",icon:"el-icon-view"},on:{click:function(r){return e.handleModify(t.row)}}})]}}])})],1),r("pagination",{attrs:{page:e.pageInfo.current,limit:e.pageInfo.size,total:e.total},on:{"update:page":function(t){return e.$set(e.pageInfo,"current",t)},"update:limit":function(t){return e.$set(e.pageInfo,"size",t)},pagination:e.init}})],1)},i=[],a=(r("8e6e"),r("ac6a"),r("456d"),r("28a5"),r("a8db")),o=r("bd86"),l=r("768b"),c=r("1790"),s=r("412e"),u=r("c1df"),f=r.n(u);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}f.a.locale("zh-cn");var p={name:"SaleDashboardMessage",components:{},mixins:[c["a"]],data:function(){return{loading:!1,pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,r=new Date;r.setTime(r.getTime()-6048e5),e.$emit("pick",[r,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,r=new Date;r.setTime(r.getTime()-2592e6),e.$emit("pick",[r,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,r=new Date;r.setTime(r.getTime()-7776e6),e.$emit("pick",[r,t])}}]},query:{time:["",""],formName:""},tableData:[],columnList:[{module:"word",prop:"formName",label:"处理业务",align:"center",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"taskName",label:"任务名称",align:"center",minWidth:"200",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"starter",label:"发起人",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"officeName",label:"发起人部门",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"startTime",label:"发起时间",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:function(e){return f()(e.startTime).format("YYYY-MM-DD HH:mm:ss")},headerAlign:"center"},{module:"word",prop:"approver",label:"待办",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"endTime",label:"处理时间",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:function(e){return f()(e.endTime).format("YYYY-MM-DD HH:mm:ss")},headerAlign:"center"},{module:"word",prop:"duration_show",label:"累计用时",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"}]}},mounted:function(){this.init()},methods:{init:function(){var e=this;return this.loading=!0,new Promise((function(t,r){var n=e.query,i=Object(l["a"])(n.time,2),o=i[0],c=i[1],u=n.formName;Object(s["a"])({page:d({},e.pageInfo),startTime:o,endTime:c,formName:u}).then((function(r){var n=r.code,i=r.data;if(!n){var o=i.list,l=Object(a["a"])(i,["list"]);e.initPage(l),e.tableData=o.map((function(e){var t=e.duration,r=e.startTime,n=e.endTime,i=Object(a["a"])(e,["duration","startTime","endTime"]),o="";return r&&n&&(o=f()(r).from(n,!0)),d({duration_show:o,duration:t,startTime:r,endTime:n},i)}))}e.loading=!1,t(r)})).catch((function(t){e.loading=!1,r(t)}))}))},handleRowClick:function(e){e.row;var t=e.column;e.cell,e.event;if("操作"===t.label)return!1},handleModify:function(e){var t=e.businessKey,r=e.taskId,n=e.processInstanceId,i=e.taskKey,a=t.split(":")[1],o=t.split(":")[0];a&&this.$router.push({name:i,params:{id:a},query:{billNumber:o,taskId:r,processInstanceId:n,type:"auditHistory"}})},resetForm:function(e){this.$refs[e].resetFields(),this.init()}}},b=p,h=r("2877"),g=Object(h["a"])(b,n,i,!1,null,null,null);t["default"]=g.exports},ce7e:function(e,t,r){var n=r("63b6"),i=r("584a"),a=r("294c");e.exports=function(e,t){var r=(i.Object||{})[e]||Object[e],o={};o[e]=t(r),n(n.S+n.F*a((function(){r(1)})),"Object",o)}},e265:function(e,t,r){e.exports=r("ed33")},ed33:function(e,t,r){r("014b"),e.exports=r("584a").Object.getOwnPropertySymbols}}]);
//# sourceMappingURL=DashboardTaskList.e2ef188d.js.map