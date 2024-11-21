(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["OutBoundMaterialRequisitionSubOrderEdit"],{1761:function(e,t,n){},"27e1":function(e,t,n){"use strict";var r=n("1761"),i=n.n(r);i.a},"4a50":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-form",{ref:"form",attrs:{model:e.form,inline:"",rules:e.rules}},[n("el-form-item",{attrs:{label:"需求日期",prop:"needDate"}},[n("el-date-picker",{staticStyle:{width:"178px"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"请选择交货日期",disabled:"detail"===e.pageType},model:{value:e.form.needDate,callback:function(t){e.$set(e.form,"needDate",t)},expression:"form.needDate"}})],1)],1),n("table-com",{ref:"baseTableRef",attrs:{loading:e.loading,index:!0,selection:!1,"table-data":e.form.detailList,"column-list":e.columnList,"operation-width":190,"expand-list":e.expandList,"table-column-sort":!1,"table-height-type":680,"show-operate":!1},on:{rowClick:e.handleRowClick,refresh:e.searchInit},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"danger"},on:{click:function(n){return e.handleDelete(t.$index)}}},[e._v("删除")])]}}])}),n("div",{staticClass:"btn-context"},["edit"===e.pageType?[n("el-button",{attrs:{type:"primary",loading:e.loading1},on:{click:function(t){return e.handleSave("form")}}},[e._v("保 存")])]:e._e(),n("el-button",{attrs:{loading:e.loading1},on:{click:e.handleGoBack}},[e._v("取消")])],2)],1)},i=[],a=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),o=(n("7f7f"),n("a481"),n("2ef0")),l=n.n(o),u=n("1790"),s=n("6fe3");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(){return{needDate:"",detailList:[]}},h={components:{},mixins:[u["a"]],props:{},data:function(){var e=this;return{loading:!1,columnList:[{module:"word",prop:"materialGroupCode",label:"物料组",align:"center",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"materialGroupDesc",label:"物料组描述",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"materialCode",label:"物料编码",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"materialName",label:"物料名称",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"assessType_dictText",label:"评估类型",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,headerAlign:"center"},{module:"word",prop:"unitName",label:"单位",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"needDate",label:"需求日期",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"number",prop:"needNum",label:"需求数量",align:"center",minWidth:160,fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center",setMin:function(e){return 0},disabled:function(t){return"detail"===e.pageType},setMax:function(e){return e.allowMaxNum},handleChange:l.a.throttle((function(e){}),1e3),setPrecision:function(e){return 3},showOverflowTooltip:!1}],expandList:[],form:f(),rules:{needDate:[{required:!0,message:"请选择需求日期",trigger:"change"}]},loading1:!1,extraInfo:null}},computed:{pageType:function(){return this.$route.name.replace("OutBoundMaterialRequisitionSubOrder","").toLowerCase()}},mounted:function(){this.getDetail()},methods:{handleRowClick:function(e){e.row;var t=e.column;e.cell,e.event;if("操作"===t.label)return!1},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除该物料, 是否继续?","提示",{confirmButtonText:"确 定",cancelButtonText:"取 消",cancelButtonClass:"btn-custom-cancel",type:"warning",lockScroll:!1}).then((function(){t.form.detailList.splice(e,1),t.$message({type:"success",message:"操作成功"})})).catch((function(){t.$message({message:"已取消删除",type:"info"})}))},getDetail:function(){var e=this,t={subNumber:this.$route.query.billNumber};return this.loading=!0,new Promise((function(n,r){Object(s["j"])(t).then((function(t){var r=t.code,i=t.data;r||(e.form=i||{},e.extraInfo=t.data,n(t)),e.loading=!1})).catch((function(t){e.loading=!1,r(t)}))}))},handleSave:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;if(t.form.detailList.length){var n=t.form.detailList.some((function(e){return!e.needNum}));n?t.$message({message:"需求数量存在为0的情况，请重新编辑！",type:"warning"}):(t.loading1=!0,Object(s["f"])(c({},t.form)).then((function(e){var n=e.code;n||(t.$message({message:"操作成功",type:"success"}),t.handleGoBack()),t.loading1=!1})).catch((function(e){t.loading1=!1})))}else t.$message({message:"至少新增一条物料",type:"warning"})}))},handleGoBack:function(){var e=Object.assign({},this.$route);this.$store.dispatch("tagsView/delView",e),this.$router.go(-1)}}},m=h,p=(n("27e1"),n("2877")),b=Object(p["a"])(m,r,i,!1,null,"57f88cee",null);t["default"]=b.exports},"6fe3":function(e,t,n){"use strict";n.d(t,"q",(function(){return i})),n.d(t,"r",(function(){return a})),n.d(t,"g",(function(){return o})),n.d(t,"m",(function(){return l})),n.d(t,"h",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"k",(function(){return d})),n.d(t,"v",(function(){return c})),n.d(t,"t",(function(){return f})),n.d(t,"n",(function(){return h})),n.d(t,"o",(function(){return m})),n.d(t,"i",(function(){return p})),n.d(t,"d",(function(){return b})),n.d(t,"l",(function(){return g})),n.d(t,"a",(function(){return v})),n.d(t,"w",(function(){return w})),n.d(t,"b",(function(){return O})),n.d(t,"p",(function(){return j})),n.d(t,"e",(function(){return y})),n.d(t,"x",(function(){return B})),n.d(t,"u",(function(){return M})),n.d(t,"s",(function(){return W})),n.d(t,"f",(function(){return q})),n.d(t,"j",(function(){return R}));var r=n("bc43");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillMaterialRequisition/pageList",method:"post",data:e})}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillMaterialRequisition/listItem",method:"post",data:e})}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillMaterialRequisition/add",method:"post",data:e})}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillMaterialRequisition/edit",method:"post",data:e})}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillMaterialRequisition/delete",method:"post",data:e})}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillMaterialRequisitionDetail/batchDelete",method:"post",data:e})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillMaterialRequisition/detail",method:"post",data:e})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillMaterialRequisition/print",method:"post",data:e})}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillMaterialRequisitionSub/oneKeySplit",method:"post",data:e})}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillMaterialRequisitionDetail/pageList",method:"post",data:e})}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillMaterialRequisitionDetail/pageList",method:"post",data:e})}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillMaterialRequisition/detail",method:"post",data:e})}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillMaterialRequisitionDetail/delete",method:"post",data:e})}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillMaterialRequisitionDetail/edit",method:"post",data:e})}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillMaterialRequisitionSub/add",method:"post",data:e})}function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/basic/wmsMaterial/getListByCode",method:"post",data:e})}function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillMaterialRequisitionDetail/batchAdd",method:"post",data:e})}function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillMaterialRequisitionSub/pageList",method:"post",data:e})}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillMaterialRequisitionSub/delete",method:"post",data:e})}function B(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillMaterialRequisitionSub/submit",method:"post",data:e})}function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillMaterialRequisitionSub/print",method:"post",data:e})}function W(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillMaterialRequisitionSub/listItem",method:"post",data:e})}function q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillMaterialRequisitionSub/edit",method:"post",data:e})}function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/outWarehouse/wmsBillMaterialRequisitionSub/detail",method:"post",data:e})}}}]);
//# sourceMappingURL=OutBoundMaterialRequisitionSubOrderEdit.f304c2fd.js.map