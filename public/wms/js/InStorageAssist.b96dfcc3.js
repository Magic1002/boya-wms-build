(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["InStorageAssist"],{"0bfd":function(e,t,r){"use strict";r.d(t,"n",(function(){return a})),r.d(t,"i",(function(){return o})),r.d(t,"b",(function(){return l})),r.d(t,"g",(function(){return c})),r.d(t,"e",(function(){return s})),r.d(t,"o",(function(){return d})),r.d(t,"j",(function(){return u})),r.d(t,"k",(function(){return f})),r.d(t,"a",(function(){return p})),r.d(t,"f",(function(){return m})),r.d(t,"l",(function(){return b})),r.d(t,"p",(function(){return h})),r.d(t,"m",(function(){return g})),r.d(t,"h",(function(){return y})),r.d(t,"q",(function(){return v})),r.d(t,"c",(function(){return O})),r.d(t,"d",(function(){return w}));var i=r("bc43"),n=r("ee8a");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["a"])({url:"/enterWarehouse/wmsContract/treeList",method:"post",data:e})}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["a"])({url:"/enterWarehouse/wmsContract/detail",method:"post",data:e})}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["a"])({url:"/enterWarehouse/wmsContract/add",method:"post",data:e})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["a"])({url:"/enterWarehouse/wmsContract/edit",method:"post",data:e})}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["a"])({url:"/enterWarehouse/wmsContract/delete",method:"post",data:e})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["a"])({url:"/enterWarehouse/WmsOrder/detail",method:"post",data:e,timeout:1/0})}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["a"])({url:"/enterWarehouse/WmsOrder/listMaterial",method:"post",data:e})}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["a"])({url:"/enterWarehouse/WmsOrder/orderMaterialTabInfo",method:"post",data:e})}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["a"])({url:"/enterWarehouse/WmsOrder/add",method:"post",data:e})}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["a"])({url:"/enterWarehouse/WmsOrder/edit",method:"post",data:e})}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["a"])({url:"/enterWarehouse/WmsOrder/del",method:"post",data:e})}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["a"])({url:"/enterWarehouse/WmsOrder/editRemarks",method:"post",data:e})}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["a"])({url:"/enterWarehouse/WmsOrder/listDeliveryReceiptHistory",method:"post",data:e})}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["a"])({url:"/enterWarehouse/WmsOrder/export",method:"post",data:e})}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["a"])({url:"/enterWarehouse/WmsOrder/print",method:"post",data:e})}function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["a"])({url:"/enterWarehouse/WmsOrder/allMaterialList",method:"post",data:e})}function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["a"])({url:"/enterWarehouse/WmsOrder/delOrderMaterial",method:"post",data:e})}},"2ee9":function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:e.title,top:"5vh",visible:e.value,"show-close":!0,width:"920px","lock-scroll":!1,"destroy-on-close":!0,"append-to-body":!0,"close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":e.beforeClose},on:{open:e.initSelect}},[r("el-scrollbar",{staticClass:"scroll-dialog"},[r("div",{staticClass:"clearfix top-filter"},[r("el-form",{ref:"filterItem",attrs:{model:e.query,inline:""},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-form-item",{staticClass:"fl",attrs:{prop:"materialCodeOrName"}},[r("el-input",{staticClass:"filter-item",staticStyle:{width:"178px"},attrs:{filterable:"",clearable:"",placeholder:"物料编码或名称"},model:{value:e.query.materialCodeOrName,callback:function(t){e.$set(e.query,"materialCodeOrName",t)},expression:"query.materialCodeOrName"}})],1),r("el-button",{staticClass:"filter-item",attrs:{type:"success",icon:"el-icon-search"},on:{click:e.searchInit}},[e._v("搜索")])],1)],1),r("el-row",[r("table-com",{ref:e.refName,attrs:{"table-height-type":490,loading:e.loading,index:!1,"index-fixed":!1,selection:!0,multiple:e.multiple,"selection-fixed":!1,"table-column-sort":!1,"table-data":e.tableData,"column-list":e.columnList,"show-operate":!1,"operate-fixed":!1,"table-selection":e.tableSelection},on:{selectionChange:e.selectionChange}})],1),r("pagination",{attrs:{page:e.pageInfo.current,limit:e.pageInfo.size,total:e.total},on:{"update:page":function(t){return e.$set(e.pageInfo,"current",t)},"update:limit":function(t){return e.$set(e.pageInfo,"size",t)},pagination:e.init}})],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.confirmDialog}},[e._v("确 定")]),r("el-button",{on:{click:e.beforeClose}},[e._v("取 消")])],1)],1)},n=[],a=(r("8e6e"),r("ac6a"),r("456d"),r("7f7f"),r("75fc")),o=(r("6762"),r("2fdb"),r("a8db")),l=r("bd86"),c=(r("c5f6"),r("ec26")),s=r("1790"),d=r("037c");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){Object(l["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p={name:"MaterialSelect",mixins:[s["a"]],props:{value:{required:!0,type:Boolean},title:{type:String,default:"物料选择"},multiple:{type:Boolean,default:!0},selection:{type:Array,default:function(){return[]}},max:{type:Number,default:0},ids:{type:Array,default:function(){return[]}},extraInfo:{type:Object,default:function(){}}},dicts:[],data:function(){return{loading:!1,refName:"modelSelectMaterialSelect",query:{materialCodeOrName:""},tableData:[],columnList:[{module:"word",prop:"code",label:"物料编号",align:"center",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"name",label:"物料名称",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"spec",label:"规格型号",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"assessType_dictText",label:"评估类型",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,headerAlign:"center"},{module:"word",prop:"description",label:"物料描述",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"unitName",label:"计量单位",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"type_dictText",label:"物料类型",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"minOutboundUnitName",label:"最小单位SKU",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,headerAlign:"center"},{module:"word",prop:"isExpirationDate",label:"是否有保质期",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,headerAlign:"center",formatter:function(e){return 0===e.isExpirationDate?"否":"是"}},{module:"word",prop:"materialGroupCode",label:"物料组编号",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,headerAlign:"center"},{module:"word",prop:"materialGroupDescription",label:"物料组描述",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,headerAlign:"center"},{module:"word",prop:"dataSources_dictText",label:"数据来源",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,headerAlign:"center"},{module:"number",prop:"deliveryNumber",label:"本次到货数量",align:"center",minWidth:160,fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center",setMin:function(e){return 0},setPrecision:function(e){return 3}}],columnSets:[],tableSelection:[],deptSelectedInfo:{list:[],visible:!1,radio:""}}},methods:{confirmDialog:function(){this.$emit("confirm",this.tableSelection),this.beforeClose()},init:function(){var e=this,t=f({},this.query,{materialIdList:this.ids},this.extraInfo,{page:f({},this.pageInfo)});return new Promise((function(r,i){Object(d["d"])(f({},t)).then((function(t){var i=t.code,n=t.data;if(!i){var a=n.list,l=Object(o["a"])(n,["list"]);e.initPage(l),e.tableData=a.map((function(e){return f({uuid:Object(c["a"])(),deliveryNumber:0},e)})),e.tableSelection=e.tableData.filter((function(t){return e.selection.includes(t.id)}))}e.loading=!1,r(t)})).catch((function(t){e.loading=!1,i(t)}))}))},initSelect:function(){this.init()},selectionChange:function(e){this.tableSelection=Object(a["a"])(e)},handleUpdateTableSelected:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]},handleDefault:function(){this.tableSelection=new Array(0)},beforeClose:function(e){this.$emit("input",!1),this.handleDefault(),"function"===typeof e&&e()},onDeptSelectConfirm:function(e){e.length&&(this.query.usedOffice=e[0].name)},resetForm:function(e){this.$refs[e].resetFields(),this.searchInit()}}},m=p,b=(r("fc19"),r("2877")),h=Object(b["a"])(m,i,n,!1,null,"d25cbdd0",null);t["a"]=h.exports},"32a6":function(e,t,r){var i=r("241e"),n=r("c3a1");r("ce7e")("keys",(function(){return function(e){return n(i(e))}}))},"43b6":function(e,t,r){},"8aae":function(e,t,r){r("32a6"),e.exports=r("584a").Object.keys},a4bb:function(e,t,r){e.exports=r("8aae")},a8db:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var i=r("e265"),n=r.n(i),a=r("a4bb"),o=r.n(a);function l(e,t){if(null==e)return{};var r,i,n={},a=o()(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}function c(e,t){if(null==e)return{};var r,i,a=l(e,t);if(n.a){var o=n()(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}},aeb6:function(e,t,r){"use strict";var i=r("c665"),n=r.n(i);n.a},c45c:function(e,t,r){},c665:function(e,t,r){},ce7e:function(e,t,r){var i=r("63b6"),n=r("584a"),a=r("294c");e.exports=function(e,t){var r=(n.Object||{})[e]||Object[e],o={};o[e]=t(r),i(i.S+i.F*a((function(){r(1)})),"Object",o)}},daca:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("div",{staticClass:"clearfix top-filter"},[r("el-form",{ref:"filterItem",attrs:{model:e.query,inline:""}},[r("el-form-item",{staticClass:"fl",attrs:{prop:"code"}},[r("el-input",{staticClass:"filter-item",staticStyle:{width:"178px"},attrs:{clearable:"",placeholder:"订单号"},model:{value:e.query.code,callback:function(t){e.$set(e.query,"code","string"===typeof t?t.trim():t)},expression:"query.code"}})],1),r("el-form-item",{staticClass:"fl",attrs:{prop:"nameOrCode"}},[r("el-input",{staticClass:"filter-item",staticStyle:{width:"178px"},attrs:{clearable:"",placeholder:"供应商名称或编号"},model:{value:e.query.nameOrCode,callback:function(t){e.$set(e.query,"nameOrCode","string"===typeof t?t.trim():t)},expression:"query.nameOrCode"}})],1),r("el-form-item",{staticClass:"fl",attrs:{prop:"startDate"}},[r("el-date-picker",{staticClass:"filter-item",staticStyle:{width:"178px"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"开始时间"},on:{change:function(t){e.query.endDate=""}},model:{value:e.query.startDate,callback:function(t){e.$set(e.query,"startDate",t)},expression:"query.startDate"}})],1),r("el-form-item",{staticClass:"fl",attrs:{prop:"endDate"}},[r("el-date-picker",{staticClass:"filter-item",staticStyle:{width:"178px"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"结束时间","picker-options":{disabledDate:function(t){return t.getTime()<new Date(e.query.startDate).getTime()}}},model:{value:e.query.endDate,callback:function(t){e.$set(e.query,"endDate",t)},expression:"query.endDate"}})],1),r("el-button",{staticClass:"filter-item",attrs:{type:"success",icon:"el-icon-search"},on:{click:e.searchInit}},[e._v("搜索")]),r("el-button",{staticClass:"filter-item",attrs:{type:"warning",icon:"el-icon-refresh-left"},on:{click:function(t){return e.resetForm("filterItem")}}},[e._v("重置")]),r("el-button",{staticClass:"filter-item",attrs:{type:"primary"},on:{click:e.handleAdd}},[e._v("新增订单（测试）")])],1)],1),r("el-row",[r("table-com",{ref:"baseTableRef",attrs:{loading:e.loading,selection:!1,"table-column-sort":!0,"form-ident":e.formIdent,"table-data":e.tableData,"column-list":e.columnList,"operation-width":300,"refresh-key":e.refreshKey,"expand-list":e.expandList},on:{rowClick:e.handleRowClick,refresh:e.searchInit},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.handleModify(t.row)}}},[e._v("详细")]),r("el-button",{attrs:{type:"success"},on:{click:function(r){return e.handleViewDeliveryOrder(t.row)}}},[e._v("显示交接单")]),r("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.handleAddDeliveryOrder(t.row)}}},[e._v("新增交接单")])]}}])})],1),r("pagination",{attrs:{page:e.pageInfo.current,limit:e.pageInfo.size,total:e.total},on:{"update:page":function(t){return e.$set(e.pageInfo,"current",t)},"update:limit":function(t){return e.$set(e.pageInfo,"size",t)},pagination:e.init}}),r("edit-dialog",{attrs:{"dialog-form":e.dialogForm,"edit-type":e.editType,type:e.type},model:{value:e.dialogVisible,callback:function(t){e.dialogVisible=t},expression:"dialogVisible"}}),r("add-dialog",{attrs:{"dialog-form":e.dialogForm,"edit-type":e.editType,title:e.dialogTitle,"order-type":e.type},on:{confirm:e.init},model:{value:e.addDialogVisible,callback:function(t){e.addDialogVisible=t},expression:"addDialogVisible"}})],1)},n=[],a=(r("8e6e"),r("ac6a"),r("456d"),r("7f7f"),r("a8db")),o=r("bd86"),l=r("1790"),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:e.title,top:"5vh",visible:e.value,"show-close":!0,width:"920px","lock-scroll":!1,"destroy-on-close":!0,"append-to-body":!0,"close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":e.beforeClose},on:{open:e.initSelect}},[r("el-scrollbar",{staticClass:"scroll-dialog"},[r("el-row",[r("table-com",{ref:e.refName,attrs:{"table-height-type":580,loading:e.loading,index:!0,"index-fixed":!0,selection:!1,multiple:e.multiple,"selection-fixed":!1,"table-column-sort":!1,"table-data":e.tableData,"column-list":e.columnList,"show-operate":!1,"operate-fixed":!1,"table-selection":e.tableSelection},on:{selectionChange:e.selectionChange}})],1)],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.confirmDialog}},[e._v("确 定")]),r("el-button",{on:{click:e.beforeClose}},[e._v("取 消")])],1)],1)},s=[],d=r("75fc"),u=(r("6762"),r("2fdb"),r("c5f6"),r("0bfd"));function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={name:"InStorageConsignDetail",mixins:[l["a"]],props:{value:{required:!0,type:Boolean},title:{type:String,default:"订单详情"},multiple:{type:Boolean,default:!0},selection:{type:Array,default:function(){return[]}},max:{type:Number,default:0},dialogForm:{type:Object,default:function(){}},extraInfo:{type:Object,default:function(){}}},dicts:[],data:function(){return{type:1,loading:!1,refName:"InStorageConsignDetail",query:{},tableData:[],columnList:[{module:"word",prop:"materialCode",label:"物料编号",align:"center",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"materialName",label:"物料名称",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"materialSpec",label:"规格型号",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"materialAssessType_dictText",label:"评估类型",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,headerAlign:"center"},{module:"word",prop:"orderNum",label:"订单数量",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"unitMaterial",label:"计量单位",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"}],columnSets:[],tableSelection:[]}},methods:{confirmDialog:function(){this.beforeClose()},init:function(){var e=this,t=p({},this.query,{type:this.type,materialIdList:[],id:this.dialogForm.id},this.extraInfo);return new Promise((function(r,i){Object(u["j"])(p({},t)).then((function(t){var i=t.code,n=t.data;i||(e.tableData=n,e.tableSelection=e.tableData.filter((function(t){return e.selection.includes(t.id)}))),e.loading=!1,r(t)})).catch((function(t){e.loading=!1,i(t)}))}))},initSelect:function(){this.init()},selectionChange:function(e){this.tableSelection=Object(d["a"])(e)},handleDefault:function(){this.tableSelection=new Array(0)},refresh:function(){this.init("clean")},resetForm:function(e){this.$refs[e].resetFields(),this.searchInit()},beforeClose:function(e){this.$emit("input",!1),this.handleDefault(),"function"===typeof e&&e()}}},b=m,h=(r("e81c"),r("2877")),g=Object(h["a"])(b,c,s,!1,null,"13c0428c",null),y=g.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-drawer",{attrs:{center:!0,"append-to-body":!0,"close-on-press-escape":!1,"wrapper-closable":!1,title:e.title,visible:e.value,size:"70%","destroy-on-close":!0,direction:"btt","before-close":e.beforeClose},on:{open:e.initSelect}},[r("el-form",{ref:"form",attrs:{model:e.form,inline:"",rules:e.rules,"label-width":"120px"}},[r("el-scrollbar",{staticClass:"scroll-drawer"},[r("el-form-item",{attrs:{label:"订单编号",prop:"code"}},[r("el-input",{staticStyle:{width:"178px"},attrs:{disabled:"add"!==e.editType,placeholder:"请输入订单编号"},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code","string"===typeof t?t.trim():t)},expression:"form.code"}})],1),r("el-form-item",{attrs:{label:"供应商选择",prop:"supplierId"}},[[r("div",{staticClass:"selected-wrapper"},[r("el-input",{staticStyle:{width:"143px"},attrs:{disabled:"",placeholder:"请选择内容"},model:{value:e.form.supplierName,callback:function(t){e.$set(e.form,"supplierName","string"===typeof t?t.trim():t)},expression:"form.supplierName"}}),r("el-button",{staticStyle:{"margin-left":"5px","padding-left":"0","padding-right":"0",width:"30px"},attrs:{plain:"",type:"primary",icon:"el-icon-search"},on:{click:function(t){e.selectInfo.visible=!0}}})],1)]],2),r("el-form-item",{attrs:{label:"采购日期",prop:"purchaseDate"}},[r("el-date-picker",{staticStyle:{width:"178px"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"请选择采购日期",clearable:!1},model:{value:e.form.purchaseDate,callback:function(t){e.$set(e.form,"purchaseDate",t)},expression:"form.purchaseDate"}})],1),r("el-form-item",{attrs:{label:"用料单位",prop:"materialsUnit"}},[r("el-input",{staticStyle:{width:"178px"},attrs:{placeholder:"请输入用料单位"},model:{value:e.form.materialsUnit,callback:function(t){e.$set(e.form,"materialsUnit","string"===typeof t?t.trim():t)},expression:"form.materialsUnit"}})],1),r("el-form-item",{attrs:{label:"联系人",prop:"contact"}},[r("el-input",{staticStyle:{width:"178px"},attrs:{placeholder:"请填写联系人"},model:{value:e.form.contact,callback:function(t){e.$set(e.form,"contact","string"===typeof t?t.trim():t)},expression:"form.contact"}})],1),r("el-form-item",{attrs:{label:"联系人电话",prop:"phone"}},[r("el-input",{staticStyle:{width:"178px"},attrs:{placeholder:"请填写联系人电话"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone","string"===typeof t?t.trim():t)},expression:"form.phone"}})],1),r("el-row",{staticStyle:{padding:"0 10px"}},[r("divider",[e._v("物料信息")]),r("el-row",{staticStyle:{margin:"10px 0"}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){e.materielSelectInfo.visible=!0}}},[e._v("新建")])],1),r("table-com",{key:e.refreshKey,ref:"baseTableRef",attrs:{loading:e.loading,index:!0,selection:!1,"table-data":e.tableData,"column-list":e.columnList,"table-height-type":300,"operation-width":100,"expand-list":e.expandList,"table-column-sort":!1},on:{rowClick:e.handleRowClick,refresh:e.searchInit},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"danger"},on:{click:function(r){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1)],1),r("div",{staticClass:"drawer-footer"},[r("el-button",{attrs:{loading:e.loading,type:"primary"},on:{click:function(t){return e.handleConfirm("form")}}},[e._v(e._s(e.loading?"提交中 ...":"确 定"))]),r("el-button",{on:{click:e.beforeClose}},[e._v("取 消")])],1)],1),r("model-select",{attrs:{multiple:!1},on:{confirm:e.onSelectConfirm},model:{value:e.selectInfo.visible,callback:function(t){e.$set(e.selectInfo,"visible",t)},expression:"selectInfo.visible"}}),r("model-select-materiel",{attrs:{ids:e.tableData.map((function(e){return e.materialId}))},on:{confirm:e.onMaterielSelectConfirm},model:{value:e.materielSelectInfo.visible,callback:function(t){e.$set(e.materielSelectInfo,"visible",t)},expression:"materielSelectInfo.visible"}})],1)},O=[],w=r("ec26"),x=r("2ef0"),j=r.n(x),D=r("2ee9"),S=r("48b0");function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I={purchaseDate:"",materialsUnit:"",phone:"",contact:"",code:"",supplierId:"",supplierName:"",dataSources:0,materialShow:"",wmsOrderMaterialJoinList:[]},W={name:"InStoragePurchaseTreeAddCom",components:{ModelSelect:S["a"],ModelSelectMateriel:D["a"]},mixins:[l["a"]],props:{value:{type:Boolean,default:!1},title:{type:String,default:""},editType:{type:String,default:"add"},dialogForm:{type:Object,default:function(){return j.a.cloneDeep(I)}},node:{type:Object,default:function(){}},orderType:{type:[Number,String],default:1}},data:function(){return{refreshKey:(new Date).getTime(),form:j.a.cloneDeep(I),loading:!1,rules:{code:[{required:!0,message:"此项必填",trigger:"blur"}],supplierId:[{required:!0,message:"此项必填",trigger:"blur"}],purchaseDate:[{required:!0,message:"此项必填",trigger:"blur"}],materialsUnit:[{required:!0,message:"此项必填",trigger:"blur"}],phone:[{required:!0,message:"此项必填",trigger:"blur"}],contact:[{required:!0,message:"此项必填",trigger:"blur"}]},query:{},tableData:[],columnList:[{module:"word",prop:"materialCode",label:"物料编码",align:"center",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"materialName",label:"物料名称",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"materialSpec",label:"规格型号",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"assessType_dictText",label:"评估类型",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,headerAlign:"center"},{module:"word",prop:"unitMaterial",label:"计量单位",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"number",prop:"orderNum",label:"订单数量",align:"center",minWidth:120,fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center",setMin:function(e){return 0},setPrecision:function(e){return 3}},{module:"number",prop:"price",label:"单价",align:"center",minWidth:120,fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center",setMin:function(e){return 0},setPrecision:function(e){return 3}}],expandList:[],selectInfo:{list:[],visible:!1,radio:""},materielSelectInfo:{list:[],visible:!1,radio:""}}},watch:{dialogForm:{handler:function(e){this.refreshKey=(new Date).getTime(),"add"===this.editType?this.form=j.a.cloneDeep(I):this.form=k({},e)},immediate:!0,deep:!0}},methods:{handleConfirm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.loading=!1,"add"===t.editType?Object(u["a"])(k({},t.form,{wmsOrderMaterialJoinList:t.tableData,contractId:0,type:t.orderType})).then((function(e){var r=e.code;r||(t.$message({message:"".concat(t.title,"成功"),type:"success"}),t.$emit("confirm"),t.beforeClose()),t.loading=!1})).catch((function(e){t.loading=!1})):Object(u["f"])(k({},t.form,{wmsOrderMaterialJoinList:t.tableData})).then((function(e){var r=e.code;r||(t.$message({message:"".concat(t.title,"成功"),type:"success"}),t.$listeners.handleRefreshTree(!1,!0),t.beforeClose()),t.loading=!1})).catch((function(e){t.loading=!1}))}))},onSelectConfirm:function(e){e.length&&(this.form.supplierId=e[0].id,this.form.supplierName=e[0].name)},onMaterielSelectConfirm:function(e){if(e.length){var t=this.form.id||null,r=e.map((function(e){return k({},e,{uuid:Object(w["a"])(),orderId:t,orderMaterialId:e.id,orderNum:0,price:0,materialId:e.id,materialName:e.name,materialCode:e.code,materialSpec:e.spec,unitMaterial:e.unitName})}));this.tableData=[].concat(Object(d["a"])(this.tableData),Object(d["a"])(r))}},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除选中信息, 是否继续?","提示",{confirmButtonText:"确 定",cancelButtonText:"取 消",type:"warning",cancelButtonClass:"btn-custom-cancel",lockScroll:!1}).then((function(){t.tableData=t.tableData.filter((function(t){return t.uuid!==e.uuid}))})).catch((function(e){t.$notify.info({title:"消息",message:"已取消删除"})}))},handleRowClick:function(e){var t=e.row,r=e.column;e.cell,e.event;if("操作"===r.label)return!1;this.rightObj=k({},t)},refresh:function(){},initSelect:function(){"add"!==this.editType&&this.dialogForm.wmsOrderMaterialJoinList.length&&(this.tableData=j.a.cloneDeep(this.dialogForm.wmsOrderMaterialJoinList).map((function(e){return k({uuid:Object(w["a"])()},e)})))},beforeClose:function(e){this.form=j.a.cloneDeep(I),this.tableData=new Array(0),this.$refs.form.resetFields(),this.$emit("input",!1),"function"===typeof e&&e()}}},A=W,P=(r("aeb6"),Object(h["a"])(A,v,O,!1,null,"1b7cf3fd",null)),T=P.exports,$=r("bc43");function z(e){return Object($["a"])({url:"/enterWarehouse/WmsOrder/pageList",method:"post",data:e})}var q=r("e08f");function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _={name:"InStorageConsign",components:{EditDialog:y,AddDialog:T},mixins:[l["a"],q["a"]],data:function(){return{title:this.$route.meta.title,type:"2",loading:!1,query:{code:"",nameOrCode:"",startDate:"",endDate:""},tableData:[],columnList:[{module:"word",prop:"code",label:"订单号",align:"center",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"supplierName",label:"供应商",align:"center",minWidth:"200",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"contact",label:"联系人",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"phone",label:"电话",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"materialsUnit",label:"接收人",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"purchaseDate",label:"日期",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"}],columnSets:[],dialogForm:{},supplierPullList:[],editType:"add",dialogVisible:!1,addDialogVisible:!1}},computed:{dialogTitle:function(){return"add"===this.editType?"新增".concat(this.title,"信息"):"编辑".concat(this.title,"信息")}},mounted:function(){this.init()},methods:{init:function(e){var t=this;this.loading=!0;var r=M({},this.query,e?{type:this.type}:{type:this.type,page:M({},this.pageInfo)});return new Promise((function(e,i){z(M({},r)).then((function(r){var i=r.code,n=r.data;if(!i){var o=n.formIdent,l=n.formHeadSets,c=n.pageData;t.formIdent=o,t.columnList=t.initTableHeadMixins(l);var s=c.list,d=Object(a["a"])(c,["list"]);t.initPage(d),t.tableData=s}t.loading=!1,e(r)})).catch((function(e){t.loading=!1,i(e)}))}))},handleRowClick:function(e){var t=e.row,r=e.column;e.cell,e.event;if("操作"===r.label)return!1;this.rightObj=M({},t)},refresh:function(){this.init("clean")},handleAdd:function(){this.editType="add",this.dialogForm={},this.addDialogVisible=!0},handleModify:function(e){this.dialogForm=M({},e),this.editType="modify",this.dialogVisible=!0},handleViewDeliveryOrder:function(e){this.$router.push({name:"InStorageAssistDelivery",params:{id:e.id,type:2}})},handleAddDeliveryOrder:function(e){this.$router.push({name:"InStorageDeliveryAdd",params:{view:"add",orderId:e.id,type:2,routeName:this.$route.name}})},resetForm:function(e){this.$refs[e].resetFields(),this.searchInit()}}},L=_,F=Object(h["a"])(L,i,n,!1,null,"ca1dc146",null);t["default"]=F.exports},e265:function(e,t,r){e.exports=r("ed33")},e81c:function(e,t,r){"use strict";var i=r("43b6"),n=r.n(i);n.a},ed33:function(e,t,r){r("014b"),e.exports=r("584a").Object.getOwnPropertySymbols},ee8a:function(e,t,r){"use strict";r("6b54");var i=r("bc3a"),n=r.n(i),a=r("5c96"),o=r("4360"),l=r("5f87"),c={baseURL:"https://192.168.1.7:9005/api/wms",withCredentials:!0,timeout:3e4,headers:{"Content-Type":"application/json",Accept:"application/json"}},s=n.a.create(c),d=!1;s.interceptors.request.use((function(e){return o["a"].getters.token&&(e["responseType"]="blob",e.headers["Authorization"]="".concat(o["a"].getters.token)),e}),(function(e){Promise.reject(e)})),s.interceptors.response.use((function(e){return e&&e.data&&e.data.code&&999===e.data.code&&a["Notification"].error({message:e.data.msg,duration:5e3}),e}),(function(e){var t=0;try{t=e.response.status}catch(r){if(-1!==e.toString().indexOf("Error: timeout"))return a["Notification"].error({title:"网络请求超时",duration:5e3}),Promise.reject(e)}return 401===t||403===t?(d||(d=!0,a["Notification"].error({title:"登录信息已过期或者没有访问权限",duration:5e3}),setTimeout((function(){d=!1}),5e3)),o["a"].dispatch("resetToken").then((function(){setTimeout((function(){window.location.href=Object(l["b"])()}),3e3)})),Promise.reject(e)):(a["Notification"].error({title:e,duration:5e3}),Promise.reject(e))})),t["a"]=s},fc19:function(e,t,r){"use strict";var i=r("c45c"),n=r.n(i);n.a}}]);
//# sourceMappingURL=InStorageAssist.b96dfcc3.js.map