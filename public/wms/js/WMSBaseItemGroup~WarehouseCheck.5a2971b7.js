(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["WMSBaseItemGroup~WarehouseCheck"],{"52c0":function(e,t,r){},8286:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:e.title,top:"5vh",visible:e.value,"show-close":!0,width:"920px","lock-scroll":!1,"destroy-on-close":!0,"append-to-body":!0,"close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":e.beforeClose},on:{open:e.initSelect}},[r("el-scrollbar",{staticClass:"scroll-dialog"},[r("el-form",{ref:"filterItem",staticClass:"top-filter clearfix",attrs:{model:e.query,inline:""},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-form-item",{attrs:{prop:"materialCodeOrName"}},[r("el-input",{staticClass:"filter-item",staticStyle:{width:"178px"},attrs:{placeholder:"物料编号或名称",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchInit(t)}},model:{value:e.query.materialCodeOrName,callback:function(t){e.$set(e.query,"materialCodeOrName","string"===typeof t?t.trim():t)},expression:"query.materialCodeOrName"}})],1),r("el-button",{staticClass:"filter-item",attrs:{type:"success",icon:"el-icon-search"},on:{click:e.searchInit}},[e._v("搜索")]),r("el-button",{staticClass:"filter-item",attrs:{type:"warning",icon:"el-icon-refresh-left"},on:{click:function(t){return e.resetForm("filterItem")}}},[e._v("重置")])],1),r("el-row",[r("table-com",e._b({ref:e.refName,attrs:{"row-key":e.rowKey,"table-height-type":490,loading:e.loading,index:!0,"index-fixed":!1,selection:!0,multiple:e.multiple,"selection-fixed":!1,"table-column-sort":!1,"table-data":e.tableData,"column-list":e.columnList,"show-operate":!1,"operate-fixed":!1,"table-selection":e.tableSelection},on:{selectionChange:e.selectionChange,sortChange:e.sortChange,dynamicRow:e.getDynamicRow}},"table-com",e.$attrs,!1))],1),r("pagination",{attrs:{page:e.pageInfo.current,limit:e.pageInfo.size,total:e.total},on:{"update:page":function(t){return e.$set(e.pageInfo,"current",t)},"update:limit":function(t){return e.$set(e.pageInfo,"size",t)},pagination:e.init}})],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.handleConfirm}},[e._v("确 定")]),r("el-button",{on:{click:e.beforeClose}},[e._v("取 消")])],1)],1)},i=[],o=(r("8e6e"),r("456d"),r("7f7f"),r("75fc")),l=(r("ac6a"),r("a8db")),a=r("bd86"),c=(r("c5f6"),r("ec26")),s=r("1790"),d=r("037c");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){Object(a["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p={name:"MaterialSelect",mixins:[s["a"]],props:{value:{required:!0,type:Boolean},title:{type:String,default:"物料选择"},multiple:{type:Boolean,default:!0},selection:{type:Array,default:function(){return[]}},max:{type:Number,default:0},ids:{type:Array,default:function(){return[]}},extraInfo:{type:Object,default:function(){}}},dicts:[],data:function(){return{loading:!1,refName:"modelSelectMaterialSelect",query:{materialCodeOrName:""},tableData:[],columnList:[{module:"word",prop:"code",label:"物料编号",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"name",label:"物料名称",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"spec",label:"规格型号",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"assessType_dictText",label:"评估类型",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,headerAlign:"center"},{module:"word",prop:"description",label:"物料描述",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"unitMeasureName",label:"计量单位",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"inventoryNum",label:"库存数量",align:"center",minWidth:"",fixed:!1,sortable:"custom",resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"unitPrice",label:"单价",align:"center",minWidth:"",fixed:!1,sortable:"custom",resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"totalPrice",label:"总价",align:"center",minWidth:"",fixed:!1,sortable:"custom",resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"type_dictText",label:"物料类型",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"minOutboundUnitName",label:"最小单位SKU",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,headerAlign:"center"},{module:"word",prop:"isExpirationDate",label:"是否有保质期",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,headerAlign:"center",formatter:function(e){return 0===e.isExpirationDate?"否":"是"}},{module:"word",prop:"materialGroupCode",label:"物料组编号",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,headerAlign:"center"},{module:"word",prop:"materialGroupDescription",label:"物料组描述",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,headerAlign:"center"},{module:"word",prop:"dataSources_dictText",label:"数据来源",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,headerAlign:"center"}],columnSets:[],tableSelection:[],deptSelectedInfo:{list:[],visible:!1,radio:""},rowKey:"id",rowObj:{}}},methods:{init:function(e){var t=this,r=f({},this.query,{materialIdList:[]},this.extraInfo,{page:f({},this.pageInfo)},e&&e.order&&{orderBy:"".concat(e.prop," ").concat("ascending"===e.order?"asc":"desc")});return new Promise((function(e,n){Object(d["d"])(f({},r)).then((function(r){var n=r.code,i=r.data;if(!n){var o=i.list,a=Object(l["a"])(i,["list"]);t.initPage(a),t.tableData=o.map((function(e){return f({uuid:Object(c["a"])(),deliveryNumber:e.orderNum},e)}));var s=t.rowKey,d=t.tableSelection.map((function(e){return e[s]}));t.tableData.forEach((function(e){function r(e){var t=e[s];return d.some((function(e){return e===t}))}r(e)&&t.$nextTick((function(){t.$refs[t.refName].$refs.multipleTable.toggleRowSelection(e,!0)}))}))}t.loading=!1,e(r)})).catch((function(e){t.loading=!1,n(e)}))}))},sortChange:function(e){e.column;var t=e.prop,r=e.order;this.init({prop:t,order:r})},resetForm:function(e){this.$refs[e].resetFields(),this.searchInit()},initSelect:function(){this.searchInit()},selectionChange:function(e){this.tableSelection=Object(o["a"])(e)},handleUpdateTableSelected:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]},beforeClose:function(e){this.$emit("input",!1),"function"===typeof e&&e(),this.tableSelection=new Array(0),this.resetForm("filterItem")},handleConfirm:function(){this.$emit("confirm",this.tableSelection),this.beforeClose()},onDeptSelectConfirm:function(e){e.length&&(this.query.usedOffice=e[0].name)},getDynamicRow:function(e){this.rowObj=e}}},m=p,b=(r("a8c1"),r("2877")),h=Object(b["a"])(m,n,i,!1,null,"a64e797a",null);t["a"]=h.exports},a8c1:function(e,t,r){"use strict";var n=r("52c0"),i=r.n(n);i.a}}]);
//# sourceMappingURL=WMSBaseItemGroup~WarehouseCheck.5a2971b7.js.map