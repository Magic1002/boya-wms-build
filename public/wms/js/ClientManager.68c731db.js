(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ClientManager"],{"0a81":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"top-filter",staticStyle:{"text-align":"right"}},[i("div",{staticClass:"upload-box"},[i("form-upload-file",{ref:"uploadCom",staticClass:"filter-item",attrs:{accept:"application/zip",url:"/wms/file/zip/upload","btn-content":"上传","btn-icon":"el-icon-upload",limit:99999,"upload-file-list":e.fileList,"show-file-list":!1},on:{uploadFileSuccess:e.handleUploadSuccess,uploadFileError:e.handleUploadFileError,uploadFileProgress:e.handleUploadFileProgress,handleRemove:e.handleRemoveFile},scopedSlots:e._u([{key:"tip",fn:function(){},proxy:!0}])}),0!==e.percentage?i("el-progress",{staticStyle:{width:"230px"},attrs:{percentage:e.percentage}}):e._e()],1)]),i("el-row",[i("table-com",{ref:e.refName,attrs:{loading:e.loading,"table-data":e.tableData,"column-list":e.columnList,"refresh-key":e.refreshKey,"table-column-sort":!1,"operation-width":170},on:{rowClick:e.handleRowClick,refresh:e.searchInit},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"danger"},on:{click:function(i){return e.handleDelete(t.row)}}},[e._v("删除")]),i("el-button",{attrs:{type:"primary"},on:{click:function(i){return e.handleDownload(t.row)}}},[e._v("下载")])]}}])})],1),i("pagination",{attrs:{page:e.pageInfo.current,limit:e.pageInfo.size,total:e.total},on:{"update:page":function(t){return e.$set(e.pageInfo,"current",t)},"update:limit":function(t){return e.$set(e.pageInfo,"size",t)},pagination:e.init}}),i("drawer",{attrs:{"drawer-form":e.drawerForm,"edit-type":e.editType,title:e.dialogTitle},on:{submit:e.init},model:{value:e.drawerVisible,callback:function(t){e.drawerVisible=t},expression:"drawerVisible"}})],1)},r=[],o=(i("8e6e"),i("ac6a"),i("456d"),i("a8db")),a=i("bd86"),l=i("1790"),s=i("bc43");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(s["a"])({url:"/wms/file/zip/pageList",method:"post",data:e})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(s["a"])({url:"/wms/file/zip/update",method:"post",data:e})}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(s["a"])({url:"/wms/file/zip/del",method:"post",data:e})}var u=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-drawer",{attrs:{center:!0,"append-to-body":!0,"close-on-press-escape":!1,"wrapper-closable":!1,title:e.title,visible:e.value,"destroy-on-close":!0,"before-close":e.beforeClose},on:{open:e.initSelect}},[i("el-form",{ref:"form",attrs:{model:e.form,inline:"",rules:e.rules,"label-width":"120px"}},[i("el-scrollbar",{staticClass:"scroll-drawer"},[i("el-form-item",{attrs:{label:"版本号",prop:"version"}},[i("el-input",{staticStyle:{width:"178px"},attrs:{placeholder:"请填写"},model:{value:e.form.version,callback:function(t){e.$set(e.form,"version","string"===typeof t?t.trim():t)},expression:"form.version"}})],1),"add"===e.editType?i("el-form-item",{attrs:{label:"附件",prop:"id"}},[i("form-upload-file",{ref:"uploadCom",staticClass:"filter-item",attrs:{accept:"application/zip",url:"/wms/file/zip/upload","btn-content":"上传","btn-icon":"el-icon-upload",limit:9999,"upload-file-list":e.fileList,"show-file-list":!0},on:{uploadFileSuccess:e.handleUploadSuccess,uploadFileError:e.handleUploadFileError,handleRemove:e.handleRemoveFile},scopedSlots:e._u([{key:"tip",fn:function(){},proxy:!0}],null,!1,3769323172)})],1):e._e()],1),i("div",{staticClass:"drawer-footer"},[i("el-button",{attrs:{loading:e.loading,type:"primary"},on:{click:function(t){return e.handleConfirm("form")}}},[e._v(e._s(e.loading?"提交中 ...":"确 定"))]),i("el-button",{on:{click:e.beforeClose}},[e._v("取 消")])],1)],1)],1)},p=[],m=i("9a2e");function h(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function b(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?h(Object(i),!0).forEach((function(t){Object(a["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):h(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var g=function(){return{version:"",id:""}},y={mixins:[m["a"]],props:{value:{type:Boolean,default:!1},title:{type:String,default:""},editType:{type:String,default:"add"},drawerForm:{type:Object,default:function(){return b({},g())}}},data:function(){return{form:g(),loading:!1,rules:{version:[{required:!0,message:"请填写版本号",trigger:"blur"}],id:[{required:!0,message:"请先上传文件",trigger:"change"}]},selectInfo:{list:[],visible:!1,radio:""},fileList:[]}},watch:{drawerForm:{handler:function(e){"add"===this.editType?this.form=b({},g()):this.form=b({},e)},immediate:!0},fileList:{handler:function(e){this.fileList.length?this.form.id=this.fileList[0].id:this.form.id="",this.$refs.form&&this.$refs.form.validateField("id")},immediate:!0}},methods:{handleConfirm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.loading=!0;var i=b({},t.form,{},"add"===t.editType&&{id:t.fileList.length?t.fileList[0].id:""}),n={add:d,modify:d}[t.editType||"add"];n(i).then((function(e){var i=e.code;i||(t.$message({message:"操作成功",type:"success"}),t.$emit("submit"),t.beforeClose()),t.loading=!1})).catch((function(e){t.loading=!1}))}))},initSelect:function(){},beforeClose:function(e){this.$refs.form.resetFields(),this.$emit("input",!1),this.form=Object.assign({},g()),this.fileList=[],"function"===typeof e&&e()},handleUploadSuccess:function(e){this.fileList=[e],this.$notify.success({title:"成功",message:"上传成功"})},handleUploadFileError:function(){this.$notify.error({title:"错误",message:"上传失败"})},handleRemoveFile:function(e){this.fileList=this.fileList.filter((function(t){return t.fileId!==e.fileId}))}}},v=y,w=(i("bf8e"),i("2877")),O=Object(w["a"])(v,u,p,!1,null,"a6c80904",null),P=O.exports;function j(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function F(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?j(Object(i),!0).forEach((function(t){Object(a["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):j(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var S={name:"ClientManager",components:{Drawer:P},mixins:[l["a"],m["a"]],data:function(){return{title:this.$route.meta.title,BASE_API:"https://192.168.1.7:9005/api/wms",query:{},refName:"baseTable",loading:!1,refreshKey:1,columnList:[{module:"word",prop:"version",label:"版本号",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"},{module:"word",prop:"uploadDate",label:"日期",align:"center",minWidth:"",fixed:!1,sortable:!1,resizable:!0,formatter:null,headerAlign:"center"}],tableData:[],drawerForm:{},editType:"add",drawerVisible:!1,fileList:[],percentage:0}},computed:{dialogTitle:function(){return"add"===this.editType?"客户端新增":"客户端修改"}},mounted:function(){this.init()},methods:{init:function(){var e=this;this.loading=!0;var t=F({},this.query,{page:F({},this.pageInfo)});return new Promise((function(i,n){c(F({},t)).then((function(t){var n=t.code,r=t.data;if(!n){var a=r.list,l=Object(o["a"])(r,["list"]);e.initPage(l),e.tableData=a}e.loading=!1,i(t)})).catch((function(t){e.loading=!1,n(t)}))}))},handleRowClick:function(e){e.row;var t=e.column;e.cell,e.event;if("操作"===t.label)return!1},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除选中信息, 是否继续?","提示",{confirmButtonText:"确 定",cancelButtonText:"取 消",type:"warning",cancelButtonClass:"btn-custom-cancel",lockScroll:!1}).then((function(){f({id:e.id}).then((function(e){var i=e.code;i||(t.$notify.success({title:"成功",message:"删除成功"}),t.init())}))})).catch((function(e){t.$notify.info({title:"消息",message:"已取消删除"})}))},handleDownload:function(e){window.open("".concat(this.BASE_API,"/wms/file/zip/download/").concat(e.id))},handleAdd:function(){this.editType="add",this.drawerForm={},this.drawerVisible=!0},handleModify:function(e){this.editType="modify",this.drawerForm=F({},e),this.drawerVisible=!0},resetForm:function(e){this.$refs[e].resetFields(),this.searchInit()},handleUploadSuccess:function(e){this.fileList.push(e),this.init(),this.$notify.success({title:"成功",message:"上传成功"}),this.percentage=0},handleUploadFileError:function(){this.$notify.error({title:"错误",message:"上传失败"}),this.percentage=0},handleUploadFileProgress:function(e,t,i){var n=this;this.$nextTick((function(){n.percentage=Math.floor(t.percentage/100*100)}))},handleRemoveFile:function(e){this.fileList=this.fileList.filter((function(t){return t.fileId!==e.fileId}))}}},_=S,L=(i("df55"),Object(w["a"])(_,n,r,!1,null,"dda4b1bc",null));t["default"]=L.exports},"32a6":function(e,t,i){var n=i("241e"),r=i("c3a1");i("ce7e")("keys",(function(){return function(e){return r(n(e))}}))},"86d5":function(e,t,i){},"8aae":function(e,t,i){i("32a6"),e.exports=i("584a").Object.keys},"9a2e":function(e,t,i){"use strict";i.d(t,"a",(function(){return b}));i("28a5");var n=i("cddf"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{display:"inline-block"}},[e._t("pic"),i("el-upload",{ref:"upload",attrs:{sizi:"mini",action:""+e.BASE_API+e.url,headers:e.headers,accept:e.accept,"before-upload":e.beforeUpload,"on-remove":e.handleRemove,"before-remove":e.beforeRemove,multiple:e.limit>1,limit:e.limit,"on-exceed":e.handleExceed,"file-list":e.fileList,"on-preview":e.handlePreview,"show-file-list":e.showFileList,"on-success":e.handleUploadSuccess,disabled:e.disabled,"on-progress":e.handleUploadProgress,"on-error":e.handleError}},[e.btnContent?i("el-button",{attrs:{type:"primary",size:"mini",icon:e.btnIcon,disabled:e.disabled}},[e._v("\n      "+e._s(e.btnContent)+"\n    ")]):i("el-button",{attrs:{type:"primary",size:"mini",icon:e.btnIcon,disabled:e.disabled}}),e._t("tip")],2)],2)},o=[],a=(i("8e6e"),i("ac6a"),i("456d"),i("7f7f"),i("bd86")),l=i("a8db"),s=(i("c5f6"),i("4360"));function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function d(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(Object(i),!0).forEach((function(t){Object(a["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var f={name:"FormUploadFileComs",props:{uploadFileList:{type:Array,default:function(){return[]}},showFileList:{type:Boolean,default:!0},btnIcon:{type:String,default:""},btnContent:{type:String,default:"点击上传"},limit:{type:Number,default:1},url:{type:String,default:"/wms/file/upload"},accept:{type:String,default:""},limitSize:{type:Number,default:1e23},errDefaultMsg:{type:String,default:"文件上传失败"},disabled:{type:Boolean,default:!1}},data:function(){var e="".concat(s["a"].getters.token);return{fileList:[],BASE_API:"https://192.168.1.7:9005/api/wms",headers:{Authorization:e},uploadDisabled:!1,list:[]}},watch:{uploadFileList:{handler:function(e){this.fileList=e.map((function(e){var t=e.fileName,i=e.fileUrl,n=Object(l["a"])(e,["fileName","fileUrl"]);return d({},n,{url:i,name:t})}))},immediate:!0}},methods:{beforeUpload:function(e){var t=e.size<=1e3*this.limitSize;return t||this.$message({message:"上传大小不能超过 ".concat(this.limitSize,"k!"),type:"error"}),t&&this.$emit("openLoading"),t},handleUploadProgress:function(e,t,i){this.$emit("uploadFileProgress",e,t,i)},handleError:function(e,t,i){var n=this;setTimeout((function(){n.$notify.error({title:"错误",message:"上传失败"}),n.$emit("closeLoading")}),500)},handleUploadSuccess:function(e,t,i){if(this.$emit("closeLoading"),"导入成功"!==e){var n=e.code,r=e.data;if(n&&999===n)this.$notify.error({title:"错误",message:e.msg?e.msg:this.errDefaultMsg});else if(n)this.$refs.upload.clearFiles(),this.$emit("uploadFileError");else{if(!r.id)return void this.$emit("uploadFileSuccess");var o=r.id,a=r.fileUrl,l=r.fileType,s=r.downloadUrl,c=r.fileName,d=r.suffix,f={id:o,fileId:o,fileUrl:a,fileType:l,downloadUrl:s,suffix:d,fileName:c,name:c,url:a,classification:""};this.fileList.push(f),this.$emit("uploadFileSuccess",f)}}else this.$emit("uploadFileSuccess")},handleRemove:function(e,t){var i=Object.assign({},e);return i.id||0===i.id||(i.id=i.fileId),this.fileList=this.fileList.filter((function(e){return e.id!==i.id})),this.$emit("handleRemove",d({},i)),new Promise((function(e,t){Object(n["b"])({id:i.id}).then((function(i){var n=i.code;0===n?e():t()})).catch((function(e){t(e)}))}))},beforeRemove:function(e,t){return this.$confirm("确定移除 ".concat(e.name,"？"),"提示",{confirmButtonText:"确 定",cancelButtonText:"取 消",cancelButtonClass:"cancel-button-class",confirmButtonClass:"confirm-button-class",type:"warning",lockScroll:!1})},handlePreview:function(e){var t=e.id;window.open("".concat("https://192.168.1.7:9005/api/wms","/wms/file/download/").concat(t))},handleExceed:function(e,t){this.$notify({title:"警告",message:"当前限制上传附件数量是 ".concat(this.limit," 个文件"),type:"warning"})}}},u=f,p=i("2877"),m=Object(p["a"])(u,r,o,!1,null,"6cedfe06",null),h=m.exports,b={components:{FormUploadFile:h},data:function(){return{uploadTip:"",uploadFileList:[]}},methods:{uploadFileSuccess:function(e){this.uploadFileList.push(e)},handleRemove:function(e){var t=e.id;this.uploadFileList=this.uploadFileList.filter((function(e){return e.id!==t}))},initUploadFileList:function(e){var t=this;if(e&&"null"!==e)return new Promise((function(i,r){Object(n["g"])({ids:e}).then((function(e){var n=e.code,r=e.data;n||(t.uploadFileList=r),i(e)})).catch((function(e){r(e)}))}))},getFileIdList:function(){return this.uploadFileList.map((function(e){return e.id}))},resetFormUploadFilesMixins:function(){this.uploadFileList=[]},downloadUploadFileMixins:function(e){window.open("".concat(Object({NODE_ENV:"production",VUE_APP_BASE_API:"https://192.168.1.7:9005/api/system",VUE_APP_BASE_API_ACTIVITI:"https://192.168.1.7:9005/api/flowable",VUE_APP_BASE_API_WMS:"https://192.168.1.7:9005/api/wms",VUE_APP_BASE_PUBLIC_PATH:"/wms",BASE_URL:"/wms/"}).VUE_APP_BASE_API_LMS,"/wms/file/download/").concat(e))}}}},a4bb:function(e,t,i){e.exports=i("8aae")},a8db:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var n=i("e265"),r=i.n(n),o=i("a4bb"),a=i.n(o);function l(e,t){if(null==e)return{};var i,n,r={},o=a()(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}function s(e,t){if(null==e)return{};var i,n,o=l(e,t);if(r.a){var a=r()(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}},b7fc:function(e,t,i){},bf8e:function(e,t,i){"use strict";var n=i("86d5"),r=i.n(n);r.a},ce7e:function(e,t,i){var n=i("63b6"),r=i("584a"),o=i("294c");e.exports=function(e,t){var i=(r.Object||{})[e]||Object[e],a={};a[e]=t(i),n(n.S+n.F*o((function(){i(1)})),"Object",a)}},df55:function(e,t,i){"use strict";var n=i("b7fc"),r=i.n(n);r.a},e265:function(e,t,i){e.exports=i("ed33")},ed33:function(e,t,i){i("014b"),e.exports=i("584a").Object.getOwnPropertySymbols}}]);
//# sourceMappingURL=ClientManager.68c731db.js.map