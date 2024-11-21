(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["SystemUserList"],{1790:function(e,t,n){"use strict";t["a"]={data:function(){return{pageInfo:{current:1,size:10},pages:1,total:0}},methods:{initPage:function(e){var t=e.total,n=e.pageNum,i=e.pageSize;this.pageInfo.current=n,this.pageInfo.size=i,this.total=t},indexMethod:function(e){var t=this.pageInfo,n=t.current,i=t.size;return e+1+(n-1)*i},resetPage:function(){this.pageInfo={current:1,size:10},this.total=0}}}},"1f34":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-row",{attrs:{gutter:60}},[n("el-col",{attrs:{xs:9,sm:8,md:7,lg:6,xl:6}},[n("div",{staticClass:"top-filter"},[n("el-input",{staticClass:"filter-item",attrs:{clearable:"",placeholder:"11部门名称搜索","prefix-icon":"el-icon-search"},on:{input:e.getDeptDatas},model:{value:e.deptName,callback:function(t){e.deptName="string"===typeof t?t.trim():t},expression:"deptName"}})],1),n("el-tree",{directives:[{name:"loading",rawName:"v-loading",value:e.deptsTreeLoadingMixins,expression:"deptsTreeLoadingMixins"}],attrs:{data:e.deptsMixins,props:e.defaultPropsMixins,"node-key":"id","default-expanded-keys":e.depsDefaultExpandKeysMixins,"expand-on-click-node":!1},on:{"node-click":e.handleNodeClick}})],1),n("el-col",{attrs:{xs:15,sm:16,md:17,lg:18,xl:18}},[n("div",{staticClass:"clearfix top-filter"},[n("el-form",{ref:"filterItem",attrs:{model:e.query,inline:""}},[n("el-form-item",{staticClass:"filter-item fl",attrs:{prop:"username"}},[n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"按登录名查询"},model:{value:e.query.username,callback:function(t){e.$set(e.query,"username","string"===typeof t?t.trim():t)},expression:"query.username"}})],1),n("el-form-item",{staticClass:"filter-item fl",attrs:{prop:"nickName"}},[n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"按姓名查询"},model:{value:e.query.nickName,callback:function(t){e.$set(e.query,"nickName","string"===typeof t?t.trim():t)},expression:"query.nickName"}})],1),n("el-button",{staticClass:"filter-item fl",attrs:{type:"success",icon:"el-icon-search"},on:{click:e.init}},[e._v("搜索")]),n("el-button",{staticClass:"filter-item fl",attrs:{type:"warning",icon:"el-icon-refresh-left"},on:{click:function(t){return e.resetForm("filterItem")}}},[e._v("重置")]),n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["sys:user:add"],expression:"['sys:user:add']"}],staticClass:"filter-item fl",attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.handleAdd}},[e._v("新增")]),n("el-button",{staticClass:"filter-item fl",staticStyle:{"margin-left":"0"},attrs:{type:"success",icon:"el-icon-download"},on:{click:e.downloadExcel}},[e._v("下载模板")]),n("el-form-item",{staticClass:"filter-item fl",attrs:{prop:"fileIdList"}},[n("form-upload-file",{ref:"uploadFile",attrs:{accept:".xls,.xlsx","btn-content":"导入","btn-icon":"el-icon-upload",url:"/sys/user/import",limit:999999,"show-file-list":!1},on:{uploadFileSuccess:e.uploadFileSuccess}})],1)],1),n("el-button",{staticClass:"filter-item fl",attrs:{type:"danger",icon:"el-icon-download"},on:{click:e.handleExport}},[e._v("导出")])],1),n("el-row",[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[n("el-table-column",{attrs:{align:"center",type:"index",index:e.indexMethod,label:"序号"}}),n("el-table-column",{attrs:{prop:"username",label:"登录名",align:"center"}}),n("el-table-column",{attrs:{prop:"no",label:"工号",align:"center"}}),n("el-table-column",{attrs:{prop:"nickName",label:"姓名",align:"center"}}),n("el-table-column",{attrs:{prop:"companyName",label:"归属公司",align:"center"}}),n("el-table-column",{attrs:{prop:"officeName",label:"归属部门",align:"center"}}),n("el-table-column",{attrs:{prop:"role_show",label:"角色",align:"center"}}),n("el-table-column",{attrs:{prop:"email",label:"邮箱",align:"center"}}),n("el-table-column",{attrs:{prop:"phone",label:"电话",align:"center"}}),n("el-table-column",{attrs:{prop:"mobile",label:"手机",align:"center"}}),n("el-table-column",{attrs:{prop:"userType_dictText",label:"用户类型",align:"center"}}),n("el-table-column",{attrs:{label:"用户签名",align:"center",width:"155"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.signUrl?n("div",{on:{click:function(n){return e.showBigPic([t.row.signUrl])}}},[n("img",{attrs:{src:t.row.signUrl,width:"144",height:"40"}})]):n("span",[e._v("暂无签名")])]}}])}),n("el-table-column",{attrs:{prop:"isEnable",label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-switch",{on:{change:function(n){return e.changeEnabled(t.row,t.row.isEnable)}},model:{value:t.row.isEnable,callback:function(n){e.$set(t.row,"isEnable",n)},expression:"scope.row.isEnable"}})]}}])}),n("el-table-column",{attrs:{label:"操作",align:"center",width:"200px;",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["sys:user:edit"],expression:"['sys:user:edit']"}],attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(n){return e.handleModify(t.row)}}}),n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["sys:user:delete"],expression:"['sys:user:delete']"}],attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(n){return e.handleDelete(t.row)}}}),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"重置密码",placement:"top-start"}},[n("el-button",{attrs:{type:"success"},on:{click:function(n){return e.handleResetPassword(t.row)}}},[n("i",[n("svg-icon",{staticStyle:{fill:"#fff"},attrs:{"icon-class":"reset"}})],1)])],1)]}}])})],1)],1),n("pagination",{attrs:{page:e.pageInfo.current,limit:e.pageInfo.size,total:e.total},on:{"update:page":function(t){return e.$set(e.pageInfo,"current",t)},"update:limit":function(t){return e.$set(e.pageInfo,"size",t)},pagination:e.init}})],1)],1),n("el-dialog",{attrs:{title:"add"===e.dialogType?"新增用户":"修改用户","close-on-click-modal":!1,width:"590px","append-to-body":"","lock-scroll":!1,visible:e.dialogVisible,"before-close":e.beforeClose},on:{"update:visible":function(t){e.dialogVisible=t},opened:e.initSelect}},[n("el-form",{ref:"form",attrs:{inline:"",model:e.form,rules:e.rules,"label-width":"75px"}},[n("el-form-item",{attrs:{label:"登录名",prop:"username"}},[n("el-input",{staticStyle:{width:"178px"},attrs:{disabled:"add"!==e.dialogType},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),n("el-form-item",{attrs:{label:"工号",prop:"no"}},[n("el-input",{staticStyle:{width:"178px"},model:{value:e.form.no,callback:function(t){e.$set(e.form,"no",t)},expression:"form.no"}})],1),n("el-form-item",{attrs:{label:"姓名",prop:"nickName"}},[n("el-input",{staticStyle:{width:"178px"},model:{value:e.form.nickName,callback:function(t){e.$set(e.form,"nickName",t)},expression:"form.nickName"}})],1),n("el-form-item",{attrs:{label:"电话",prop:"phone"}},[n("el-input",{staticStyle:{width:"178px"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",e._n(t))},expression:"form.phone"}})],1),n("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[n("el-input",{staticStyle:{width:"178px"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",e._n(t))},expression:"form.mobile"}})],1),n("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[n("el-input",{staticStyle:{width:"178px"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),n("el-form-item",{attrs:{label:"类型",prop:"userType"}},[n("el-select",{staticStyle:{width:"178px"},attrs:{placeholder:"请选择用户类型"},model:{value:e.form.userType,callback:function(t){e.$set(e.form,"userType",t)},expression:"form.userType"}},e._l(e.SysUserTypeOptsMixins,(function(e){return n("el-option",{key:e.id,attrs:{label:e.label,value:e.value}})})),1)],1),n("el-form-item",{attrs:{label:"状态",prop:"isEnable"}},[n("el-radio-group",{staticStyle:{width:"178px"},model:{value:e.form.isEnable,callback:function(t){e.$set(e.form,"isEnable",t)},expression:"form.isEnable"}},[n("el-radio-button",{attrs:{label:!0}},[e._v("启用")]),n("el-radio-button",{attrs:{label:!1}},[e._v("禁用")])],1)],1),n("el-form-item",{attrs:{label:"公司",prop:"companyId"}},[n("treeselect",{staticStyle:{width:"430px"},attrs:{"load-options":e.loadCompanys,options:e.companys,placeholder:"选择归属公司"},model:{value:e.form.companyId,callback:function(t){e.$set(e.form,"companyId",t)},expression:"form.companyId"}})],1),n("el-form-item",{attrs:{label:"部门",prop:"officeId"}},[n("treeselect",{staticStyle:{width:"430px"},attrs:{"load-options":e.loadDepts,options:e.depts,placeholder:"选择归属部门"},model:{value:e.form.officeId,callback:function(t){e.$set(e.form,"officeId",t)},expression:"form.officeId"}})],1),n("el-form-item",{attrs:{label:"角色",prop:"roles"}},[n("el-select",{staticStyle:{width:"430px"},attrs:{multiple:"",filterable:"",placeholder:"请选择用户角色"},model:{value:e.form.roles,callback:function(t){e.$set(e.form,"roles",t)},expression:"form.roles"}},e._l(e.roleOpts,(function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),n("el-form-item",{attrs:{label:"本人签名",prop:"fileIdList"}},[e.image?n("div",{on:{click:function(t){return e.showBigPic([e.image])}}},[n("img",{attrs:{src:e.image,width:"180",height:"48"}})]):n("div",[e._v("暂无签名")]),n("el-button",{attrs:{type:"primary",icon:"el-icon-upload"},on:{click:function(t){e.imagecropperShow=!0}}},[e._v("\n          "+e._s(e.image?"更换签名":"添加签名")+"\n        ")]),e.image?n("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:e.delSign}},[e._v("删除签名")]):e._e()],1)],1),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{loading:e.loading,type:"primary"},on:{click:function(t){return e.dialogComfirm("form")}}},[e._v("确 定")]),n("el-button",{on:{click:e.beforeClose}},[e._v("取 消")])],1)],1),n("image-cropper",{directives:[{name:"show",rawName:"v-show",value:e.imagecropperShow,expression:"imagecropperShow"}],key:e.imagecropperKey,attrs:{width:180,height:48},on:{close:e.cropperClose,"crop-upload-success":e.cropSuccess}})],1)},a=[],o=(n("8e6e"),n("456d"),n("75fc")),r=(n("a481"),n("7618")),s=(n("7f7f"),n("a8db")),l=n("bd86"),c=(n("ac6a"),n("5df3"),n("ca17")),u=n.n(c),d=(n("542c"),n("1790")),f=n("333d"),p=n("dc78"),m=n("97af");function h(e){return Object(m["a"])({url:"/sys/user/list",method:"post",data:e})}function g(e){return Object(m["a"])({url:"/sys/user/add",method:"post",data:e})}function y(e){return Object(m["a"])({url:"/sys/user/edit",method:"post",data:e})}function b(e){return Object(m["a"])({url:"/sys/user/delete",method:"post",data:e})}function v(e){return Object(m["a"])({url:"/sys/user/rePassword",method:"post",data:e})}var O=n("c344"),w=n("6f1e"),x=n("38de"),S=n("896b"),j=n("9a2e");function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){Object(l["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k={username:"",no:"",nickName:"",userType:"",phone:"",mobile:"",email:"",officeId:null,companyId:null,isEnable:!0,roles:[]},I="Zhy_1570",_={name:"SystemUserList",components:{Pagination:f["a"],Treeselect:u.a,ImageCropper:S["a"]},mixins:[d["a"],w["e"],x["b"],x["a"],j["a"]],data:function(){return{loading:!1,deptName:"",deptDatas:[],defaultProps:{children:"children",label:"name",isLeaf:function(e,t){return!t.data.hasleaf}},query:{username:"",nickName:"",companyId:"",officeId:""},tableData:[],dialogType:"add",dialogVisible:!1,form:k,rules:{username:[{required:!0,message:"请输入用户账号登录名",trigger:"blur"}],nickName:[{required:!0,message:"请输入用户姓名",trigger:"blur"}],userType:[{required:!0,message:"请选择用户类型",trigger:"change"}],phone:[],mobile:[],email:[],officeId:[{required:!0,message:"请选择用户归属部门",trigger:"change"}],companyId:[{required:!0,message:"请输入用户归属公司",trigger:"change"}],isEnable:[{required:!0,message:"请选择账号状态",trigger:"change"}],roles:[{required:!0,message:"请选择用户所属角色",trigger:"change"}]},roleOpts:[],companys:[],imagecropperShow:!1,imagecropperKey:0,image:"",signatureFileIds:""}},watch:{filterOriginTreeText:function(e){this.$refs.originTree.filter(e)}},mounted:function(){this.init(),this.initDepsMixins({name:this.deptName}),Promise.all([this.initSysUserTypeOptsMixins(),this.initRoleOpts(),this.initCompanyOpts()])},methods:{init:function(){var e=this;return new Promise((function(t,n){e.loading=!0,h(T({page:T({},e.pageInfo)},e.query)).then((function(n){var i=n.code,a=n.data;if(!i){var o=a.list,r=Object(s["a"])(a,["list"]);e.initPage(r),e.tableData=o.map((function(e){var t=e.company,n=t.id,i=t.name,a=e.office,o=a.id,r=a.name,l=e.roles,c=e.signatureFileIds,u=Object(s["a"])(e,["company","office","roles","signatureFileIds"]),d=l.map((function(e){return e.id})),f=l.map((function(e){return e.name})),p="";return c&&(p="".concat("https://192.168.1.7:9005/api/system","/sys/file/download/").concat(c)),T({},u,{companyId:n,companyName:i,officeId:o,roles:d,role_show:f.join(","),officeName:r,signUrl:p,signatureFileIds:c})}))}e.loading=!1,t(n)})).catch((function(t){e.loading=!1,n(t)}))}))},dialogComfirm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.loading=!0;var n=t.form,i=n.roles,a=Object(s["a"])(n,["roles"]);t.$set(t.form,"user",Object.assign(a,{signatureFileIds:t.signatureFileIds})),"add"===t.dialogType?g({roles:i,user:a}).then((function(e){var n=e.code;n||(t.$notify({title:"成功",message:"新增用户成功，用户的初始密码是".concat(I),type:"success"}),t.init(),t.dialogVisible=!1),t.loading=!1})).catch((function(e){t.loading=!1})):y({roles:i,user:a}).then((function(e){var n=e.code;n||(t.$notify({title:"成功",message:"修改用户成功",type:"success"}),t.init(),t.dialogVisible=!1),t.loading=!1})).catch((function(e){t.loading=!1}))}))},handleAdd:function(){this.form=Object.assign({},T({},k)),this.dialogType="add",this.dialogVisible=!0},handleModify:function(e){this.dialogType="updata",this.form=Object.assign({},T({},e)),this.dialogVisible=!0},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",cancelButtonClass:"btn-custom-cancel",type:"warning",lockScroll:!1}).then((function(){e.id&&b({id:e.id}).then((function(e){var n=e.code;n||(t.$message({message:"删除成功",type:"success"}),t.init())}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},getDeptDatas:function(e,t){var n=this,i={};"object"!==Object(r["a"])(e)?e&&(i["name"]=e):0!==e.parentId&&(i["id"]=e.data.id),setTimeout((function(){n.initDepsMixins(i)}))},handleNodeClick:function(e){var t=e.type,n=e.id;if("1"===t)this.query.companyId=n,this.query.officeId="";else{if("2"!==t)return;this.query.officeId=n,this.query.companyId=""}this.init()},changeEnabled:function(e,t){var n=this;this.$confirm("此操作将".concat(e.isEnable?"启用":"停用").concat(e.nickName,"的账号, 是否继续"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",cancelButtonClass:"btn-custom-cancel",type:"warning",lockScroll:!1}).then((function(){y({roles:[],user:{id:e.id,isEnable:e.isEnable}}).then((function(t){var i=t.code,a=t.msg;i?(e.isEnable=!e.isEnable,n.$message({message:a,type:"error"})):(n.$message({message:"更新成功",type:"success"}),n.init())})).catch((function(t){e.isEnable=!e.isEnable}))})).catch((function(){e.isEnable=!e.isEnable}))},initcropImage:function(e,t){t?(this.image=e,this.signatureFileIds=t):(this.image="",this.signatureFileIds="")},delSign:function(){var e=this;this.signatureFileIds&&this.$confirm("此操作将永久删除该文件信息, 是否继续?","提示",{confirmButtonText:"确 定",cancelButtonText:"取 消",type:"warning",cancelButtonClass:"btn-custom-cancel",lockScroll:!1}).then((function(){Object(O["a"])({id:e.signatureFileIds}).then((function(t){var n=t.code;n||(e.initcropImage(null,null),e.$notify.success({title:"成功",message:"删除成功"}))})).catch((function(e){}))})).catch((function(t){e.$notify.info({title:"消息",message:"已取消删除"})}))},cropSuccess:function(e){var t=e.code,n=e.data;t||(this.imagecropperShow=!1,this.imagecropperKey=this.imagecropperKey+1,this.image="".concat("https://192.168.1.7:9005/api/system","/sys/file/download/").concat(n.id),this.signatureFileIds=n.id)},cropperClose:function(){this.imagecropperShow=!1},initSelect:function(){this.initCompanyOpts("add"!==this.dialogType),this.initcropImage(this.form.signUrl,this.form.signatureFileIds)},initRoleOpts:function(){var e=this;return new Promise((function(t,n){Object(O["d"])({}).then((function(n){var i=n.code,a=n.data;i||(e.roleOpts=a),t(n)})).catch((function(e){n(e)}))}))},initCompanyOpts:function(e,t){var n=this;return new Promise((function(i,a){n.initOrigin(e,t),Object(p["e"])({}).then((function(t){var a=t.code,o=t.data;a||(n.companys=e?JSON.parse(JSON.stringify(o).replace(/name/g,"label")):o.map((function(e){return T({},e,{label:e.name,children:null})}))),i(t)})).catch((function(e){a(e)}))}))},loadCompanys:function(e){var t=e.action,n=e.parentNode,i=e.callback;if(t===c["LOAD_CHILDREN_OPTIONS"]){var a=n.id?{id:n.id}:{};Object(p["f"])(a).then((function(e){if(!e.code){var t=e.data;t=JSON.parse(JSON.stringify(t).replace(/name/g,"label").replace(/children/g,"children")),n.children=t.map((function(e){return e.hasleaf?e.children=null:delete e.children,e}))}setTimeout((function(){i()}),100)}))}},handleResetPassword:function(e){var t=this;this.$confirm("此操作将重置用户 ".concat(e.nickName," 的登录密码为 ").concat(I," "),"是否继续",{confirmButtonText:"确定",cancelButtonText:"取消",cancelButtonClass:"btn-custom-cancel",type:"warning",lockScroll:!1}).then((function(){e.id&&v({id:e.id}).then((function(n){var i=n.code;i||t.$notify({title:"重置密码成功",message:"用户 ".concat(e.nickName," 的密码已重置为 ").concat(I),type:"success"})}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},resetForm:function(e){this.query.officeId="",this.$refs[e].resetFields(),this.init()},beforeClose:function(e){this.dialogVisible=!1,this.loading=!1,this.$refs.form.resetFields(),this.initcropImage(null,null),"function"===typeof e&&e()},uploadFileSuccess:function(e){this.$message.success("导入成功"),this.$refs.uploadFile.$refs.upload.clearFiles(),this.uploadFileList=[],"string"!==typeof e&&this.init()},handleExport:function(){var e="";for(var t in this.query)e+="&".concat(t,"=").concat(this.query[t]);e="?"+e.substring(1),window.open("".concat("https://192.168.1.7:9005/api/system","/sys/user/export").concat(e))},downloadExcel:function(){window.open("".concat("https://192.168.1.7:9005/api/system","/sys/user/download"))},showBigPic:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.$viewerApi({options:{toolbar:!1,navbar:!1,title:!1},images:Object(o["a"])(e)})}}},N=_,E=n("2877"),D=Object(E["a"])(N,i,a,!1,null,"20f7249e",null);t["default"]=D.exports},"333d":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{class:"pagination-container "+e.className},[n("el-pagination",{class:e.pagiationClassName,attrs:{background:e.background,"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,layout:e.layout,total:e.total,"hide-on-single-page":e.hideOnSinglePage},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},a=[],o=(n("c5f6"),n("ed08")),r={name:"PaginationCom",components:{},props:{className:{type:String,default:"clearfix"},total:{required:!0,type:Number,default:10},page:{type:Number,default:1},limit:{type:Number,default:10},pageSizes:{type:Array,default:function(){return[10,20,30,50,100]}},layout:{type:String,default:"total, prev, pager, next, jumper, sizes"},background:{type:Boolean,default:!1},hideOnSinglePage:{type:Boolean,default:!1},autoScroll:{type:Boolean,default:!0}},computed:{pagiationClassName:function(){return"clearfix"===this.className?"fr":""},currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("update:limit",e),this.$emit("pagination"),this.autoScroll&&Object(o["c"])(0)},handleCurrentChange:function(e){this.$emit("pagination"),this.autoScroll&&Object(o["c"])(0)}}},s=r,l=n("2877"),c=Object(l["a"])(s,i,a,!1,null,null,null);t["a"]=c.exports},"38de":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));n("8e6e"),n("ac6a"),n("456d");var i=n("a8db"),a=(n("a481"),n("7f7f"),n("bd86")),o=n("ca17"),r=n.n(o),s=(n("542c"),n("dc78"));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={components:{Treeselect:r.a},data:function(){return{defaultProps:{children:"children",label:"name",hasleaf:!0},depts:[]}},methods:{initOrigin:function(e,t){var n=this;return new Promise((function(t,i){Object(s["e"])({}).then((function(i){var a=i.code,o=i.data;a||(n.depts=e?n.mapDeptsTree(o):o.map((function(e){return c({},e,{label:e.name,children:null})}))),t(i)})).catch((function(e){i(e)}))}))},loadDepts:function(e){var t=e.action,n=e.parentNode,i=e.callback;if(t===o["LOAD_CHILDREN_OPTIONS"]){var a=n.id?{id:n.id}:{};Object(s["f"])(a).then((function(e){if(!e.code){var t=e.data;t=JSON.parse(JSON.stringify(t).replace(/name/g,"label").replace(/children/g,"children")),n.children=t.map((function(e){return e.hasleaf?e.children=null:delete e.children,e}))}setTimeout((function(){i()}),100)}))}},mapDeptsTree:function(e){var t=this;if(Array.isArray(e)&&e){var n=e.map((function(e){var n=e.name,a=e.children,o=Object(i["a"])(e,["name","children"]);if(e.hasleaf){var r=t.mapDeptsTree(a);return c({},o,{label:n,children:r})}return c({},o,{label:n})}));return n}}}},d={data:function(){return{deptsTreeLoadingMixins:!1,defaultPropsMixins:{children:"children",label:"name",isLeaf:function(e,t){return!t.data.hasleaf}},deptsMixins:[],depsDefaultExpandKeysMixins:[]}},methods:{initDepsMixins:function(e){var t=this,n=e||{name:this.depsFilterText};return new Promise((function(e,i){t.deptsTreeLoadingMixins=!0,Object(s["d"])(n).then((function(n){var i=n.code,a=n.data;i||(t.depsDefaultExpandKeysMixins=a.map((function(e){return e.id})),t.deptsMixins=a),t.deptsTreeLoadingMixins=!1,e(n)})).catch((function(e){t.deptsTreeLoadingMixins=!1,i(e)}))}))}}}},"6f1e":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return u}));var i=n("c344"),a={OfficeType:"sys_office_type",OfficeGrade:"sys_office_grade",SysDataScope:"sys_data_scope",SysRoleType:"sys_role_type",SysUserType:"sys_user_type"},o={sys:"/sys/sysDict/find"},r={data:function(){return{OfficeTypeOptsMixins:[]}},methods:{initOfficeTypeOptsMixins:function(){var e=this;return new Promise((function(t,n){Object(i["c"])(o.sys,{name:a.OfficeType}).then((function(n){var i=n.code,a=n.data;i||(e.OfficeTypeOptsMixins=a.dictDetails),t(n)})).catch((function(e){n(e)}))}))}}},s={data:function(){return{OfficeGradeOptsMixins:[]}},methods:{initOfficeGradeOptsMixins:function(){var e=this;return new Promise((function(t,n){Object(i["c"])(o.sys,{name:a.OfficeGrade}).then((function(n){var i=n.code,a=n.data;i||(e.OfficeGradeOptsMixins=a.dictDetails),t(n)})).catch((function(e){n(e)}))}))}}},l={data:function(){return{SysDataScopeOptsMixins:[]}},methods:{initSysDataScopeOptsMixins:function(){var e=this;return new Promise((function(t,n){Object(i["c"])(o.sys,{name:a.SysDataScope}).then((function(n){var i=n.code,a=n.data;i||(e.SysDataScopeOptsMixins=a.dictDetails),t(n)})).catch((function(e){n(e)}))}))}}},c={data:function(){return{SysRoleTypeOptsMixins:[]}},methods:{initSysRoleTypeOptsMixins:function(){var e=this;return new Promise((function(t,n){Object(i["c"])(o.sys,{name:a.SysRoleType}).then((function(n){var i=n.code,a=n.data;i||(e.SysRoleTypeOptsMixins=a.dictDetails),t(n)})).catch((function(e){n(e)}))}))}}},u={data:function(){return{SysUserTypeOptsMixins:[]}},methods:{initSysUserTypeOptsMixins:function(){var e=this;return new Promise((function(t,n){Object(i["c"])(o.sys,{name:a.SysUserType}).then((function(n){var i=n.code,a=n.data;i||(e.SysUserTypeOptsMixins=a.dictDetails),t(n)})).catch((function(e){n(e)}))}))}}}},"9a2e":function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"inline-block"}},[n("el-upload",{ref:"upload",attrs:{sizi:"mini",action:""+e.BASE_API+e.url,headers:e.headers,"on-remove":e.handleRemove,"before-remove":e.beforeRemove,multiple:e.limit>1,limit:e.limit,"on-exceed":e.handleExceed,"file-list":e.fileList,"on-preview":e.handlePreview,"show-file-list":e.showFileList,"on-success":e.handleUploadSuccess}},[e.btnContent?n("el-button",{attrs:{size:"mini",icon:e.btnIcon,type:e.btnType}},[e._v(e._s(e.btnContent))]):n("el-button",{attrs:{size:"mini",icon:e.btnIcon,type:e.btnType}}),e._t("tip")],2)],1)},a=[],o=(n("8e6e"),n("ac6a"),n("456d"),n("7f7f"),n("bd86")),r=n("a8db"),s=(n("c5f6"),n("4360")),l=n("c344");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={name:"FormUploadFileComs",props:{env:{type:String,default:"VUE_APP_BASE_API"},uploadFileList:{type:Array,default:function(){return[]}},showFileList:{type:Boolean,default:!0},btnIcon:{type:String,default:""},btnType:{type:String,default:"primary"},btnContent:{type:String,default:"点击上传"},limit:{type:Number,default:1},errDefaultMsg:{type:String,default:"文件上传失败"},url:{type:String,default:"/sys/file/upload"}},data:function(){var e="".concat(s["a"].getters.token);return{fileList:[],BASE_API:Object({NODE_ENV:"production",VUE_APP_BASE_API:"https://192.168.1.7:9005/api/system",VUE_APP_BASE_API_ACTIVITI:"https://192.168.1.7:9005/api/flowable",VUE_APP_BASE_API_WMS:"https://192.168.1.7:9005/api/wms",VUE_APP_BASE_PUBLIC_PATH:"/sys",BASE_URL:"/sys/"})[this.env],headers:{Authorization:e},uploadDisabled:!1,list:[]}},watch:{uploadFileList:{handler:function(e){this.fileList=e.map((function(e){var t=e.fileName,n=e.fileUrl,i=Object(r["a"])(e,["fileName","fileUrl"]);return u({},i,{url:n,name:t})}))}}},methods:{handleUploadSuccess:function(e,t,n){if("导入成功"!==e){var i=e.code,a=e.data;if(i&&999===i)this.$notify({title:"错误",message:e.msg?e.msg:this.errDefaultMsg,type:"error"});else if(!i){var o=a.id,r=a.fileUrl,s=a.fileType,l=a.downloadUrl,c=a.fileName,u=a.suffix,d={id:o,fileUrl:r,fileType:s,downloadUrl:l,suffix:u,fileName:c,name:c,url:r,classification:""};this.fileList.push(d),this.$emit("uploadFileSuccess",d)}}else this.$emit("uploadFileSuccess")},handleRemove:function(e,t){var n=this,i=Object.assign({},e);return new Promise((function(e,t){Object(l["a"])({ids:[i.id]}).then((function(a){var o=a.code;o?t():(n.fileList=n.fileList.filter((function(e){return e.id!==i.id})),n.$emit("handleRemove",u({},i)),e())})).catch((function(e){t(e)}))}))},beforeRemove:function(e,t){return this.$confirm("确定移除 ".concat(e.name,"？"))},handlePreview:function(e){var t=e.id;window.open("".concat(this.BASE_API,"/sale/file/download/").concat(t))},handleExceed:function(e,t){this.$notify({title:"警告",message:"当前限制上传附件数量是 ".concat(this.limit," 个文件"),type:"warning"})}}},f=d,p=n("2877"),m=Object(p["a"])(f,i,a,!1,null,"3fab430a",null),h=m.exports,g={components:{FormUploadFile:h},data:function(){return{uploadTip:"",uploadFileList:[]}},methods:{uploadFileSuccess:function(e){this.uploadFileList.push(e)},handleRemove:function(e){var t=e.id;this.uploadFileList=this.uploadFileList.filter((function(e){return e.id!==t}))},initUploadFileList:function(e){var t=this;if(e&&"null"!==e)return new Promise((function(n,i){var a=JSON.parse(e);Object(l["b"])({ids:a}).then((function(e){var i=e.code,a=e.data;i||(t.uploadFileList=a),n(e)})).catch((function(e){i(e)}))}))},getFileIdList:function(){return this.uploadFileList.map((function(e){return e.id}))},resetFormUploadFilesMixins:function(){this.uploadFileList=[]},downloadUploadFileMixins:function(e){window.open("".concat("https://192.168.1.7:9005/api/system","/sys/file/download/").concat(e))}}}},c344:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s}));var i=n("97af");function a(e,t){return Object(i["a"])({url:e,method:"post",data:t})}function o(e){return Object(i["a"])({url:"/sys/role/listView",method:"post",data:e})}function r(e){return Object(i["a"])({url:"/sys/file/del",method:"post",data:e})}function s(e){return Object(i["a"])({url:"/sys/file/list",method:"post",data:e})}},dc78:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"d",(function(){return c}));var i=n("97af");function a(e){return Object(i["a"])({url:"/sys/office/list",method:"post",data:e})}function o(e){return Object(i["a"])({url:"/sys/office/add",method:"post",data:e})}function r(e){return Object(i["a"])({url:"/sys/office/edit",method:"post",data:e})}function s(e){return Object(i["a"])({url:"/sys/office/delete",method:"post",data:e})}function l(e){return Object(i["a"])({url:"/sys/office/childernList",method:"post",data:e})}function c(e){return Object(i["a"])({url:"/sys/office/listTreeView",method:"post",data:e})}},ed08:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return l}));n("8615"),n("ac6a"),n("6762"),n("2fdb"),n("c5f6"),n("a481"),n("6b54");var i=n("7618");function a(e,t){if(0===arguments.length)return null;var n,a=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(i["a"])(e)?n=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),n=new Date(e));var o={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()},r=a.replace(/{(y|m|d|h|i|s|a)+}/g,(function(e,t){var n=o[t];return"a"===t?["日","一","二","三","四","五","六"][n]:(e.length>0&&n<10&&(n="0"+n),n||0)}));return r}function o(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}Math.easeInOutQuad=function(e,t,n,i){return e/=i/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=arguments.length>2?arguments[2]:void 0,i=s(),a=e-i,l=20,c=0,u=function e(){c+=l;var s=Math.easeInOutQuad(c,i,a,t);o(s),c<t?r(e):n&&"function"===typeof n&&n()};u()}}}]);