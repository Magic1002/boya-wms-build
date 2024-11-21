<template>
  <div>
    <el-row :gutter="60">
      <el-col :xs="9" :sm="8" :md="7" :lg="6" :xl="6">
        <div class="top-filter">
          <el-input v-model.trim="deptName" clearable placeholder="部门名称搜索" prefix-icon="el-icon-search" class="filter-item" @input="getDeptDatas" />
        </div>
        <el-tree v-loading="deptsTreeLoadingMixins" :data="deptsMixins" :props="defaultPropsMixins" node-key="id" :default-expanded-keys="depsDefaultExpandKeysMixins" :expand-on-click-node="false" @node-click="handleNodeClick" />
      </el-col>
      <!--用户数据-->
      <el-col :xs="15" :sm="16" :md="17" :lg="18" :xl="18">
        <div class="clearfix top-filter">
          <el-form ref="filterItem" :model="query" inline>
            <el-form-item prop="username" class="filter-item fl">
              <el-input v-model.trim="query.username" placeholder="按登录名查询" style="width: 200px;" />
            </el-form-item>
            <el-form-item prop="nickName" class="filter-item fl">
              <el-input v-model.trim="query.nickName" placeholder="按姓名查询" style="width: 200px;" />
            </el-form-item>
            <el-button class="filter-item fl" type="success" icon="el-icon-search" @click="init">搜索</el-button>
            <el-button class="filter-item fl" type="warning" icon="el-icon-refresh-left" @click="resetForm('filterItem')">重置</el-button>
            <el-button v-permission="['sys:user:add']" class="filter-item fl" type="primary" icon="el-icon-plus" @click="handleAdd">新增</el-button>
            <el-button class="filter-item fl" type="success" icon="el-icon-download" style="margin-left: 0" @click="downloadExcel">下载模板</el-button>
            <el-form-item prop="fileIdList" class="filter-item fl">
              <form-upload-file
                ref="uploadFile"
                accept=".xls,.xlsx"
                btn-content="导入"
                btn-icon="el-icon-upload"
                url="/sys/user/import"
                :limit="999999"
                :show-file-list="false"
                @uploadFileSuccess="uploadFileSuccess"
              />
            </el-form-item>
          </el-form>
          <el-button class="filter-item fl" type="danger" icon="el-icon-download" @click="handleExport">导出</el-button>
        </div>
        <el-row>
          <el-table v-loading="loading" :data="tableData" border style="width: 100%">
            <el-table-column align="center" type="index" :index="indexMethod" label="序号" />
            <el-table-column prop="username" label="登录名" align="center" />
            <el-table-column prop="no" label="工号" align="center" />
            <el-table-column prop="nickName" label="姓名" align="center" />
            <el-table-column prop="companyName" label="归属公司" align="center" />
            <el-table-column prop="officeName" label="归属部门" align="center" />
            <el-table-column prop="role_show" label="角色" align="center" />
            <el-table-column prop="email" label="邮箱" align="center" />
            <el-table-column prop="phone" label="电话" align="center" />
            <el-table-column prop="mobile" label="手机" align="center" />
            <el-table-column prop="userType_dictText" label="用户类型" align="center" />
            <el-table-column label="用户签名" align="center" width="155">
              <template slot-scope="scopes">
                <viewer v-if="scopes.row.signUrl" :images="[scopes.row.signUrl]">
                  <img :src="scopes.row.signUrl" width="144" height="40">
                </viewer>
              </template>
            </el-table-column>
            <el-table-column prop="isEnable" label="状态" align="center">
              <template slot-scope="scope">
                <el-switch v-model="scope.row.isEnable" @change="changeEnabled(scope.row, scope.row.isEnable)" />
              </template>
            </el-table-column>
            <el-table-column label="操作" align="center" width="200px;" fixed="right">
              <template slot-scope="scope">
                <el-button v-permission="['sys:user:edit']" type="primary" icon="el-icon-edit" @click="handleModify(scope.row)" />
                <el-button v-permission="['sys:user:delete']" type="danger" icon="el-icon-delete" @click="handleDelete(scope.row)" />
                <el-tooltip class="item" effect="dark" content="重置密码" placement="top-start">
                  <el-button type="success" @click="handleResetPassword(scope.row)">
                    <i>
                      <svg-icon icon-class="reset" style="fill: #fff" />
                    </i>
                  </el-button>
                </el-tooltip>
              </template>
            </el-table-column>
          </el-table>
        </el-row>
        <pagination :page.sync="pageInfo.current" :limit.sync="pageInfo.size" :total="total" @pagination="init" />
      </el-col>
    </el-row>
    <!-- 表单 -->
    <el-dialog :title="dialogType === 'add' ? '新增用户' : '修改用户'" :close-on-click-modal="false" width="590px" append-to-body :lock-scroll="false" :visible.sync="dialogVisible" :before-close="beforeClose" @opened="initSelect">
      <el-form ref="form" inline :model="form" :rules="rules" label-width="75px">
        <el-form-item label="登录名" prop="username">
          <el-input v-model="form.username" :disabled="dialogType !== 'add'" style="width: 178px;" />
        </el-form-item>
        <el-form-item label="工号" prop="no">
          <el-input v-model="form.no" style="width: 178px;" />
        </el-form-item>
        <el-form-item label="姓名" prop="nickName">
          <el-input v-model="form.nickName" style="width: 178px;" />
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model.number="form.phone" style="width: 178px;" />
        </el-form-item>
        <el-form-item label="手机" prop="mobile">
          <el-input v-model.number="form.mobile" style="width: 178px;" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" style="width: 178px;" />
        </el-form-item>
        <el-form-item label="类型" prop="userType">
          <el-select v-model="form.userType" placeholder="请选择用户类型" style="width: 178px;">
            <el-option v-for="item in SysUserTypeOptsMixins" :key="item.id" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="状态" prop="isEnable">
          <el-radio-group v-model="form.isEnable" style="width: 178px">
            <el-radio-button :label="true">启用</el-radio-button>
            <el-radio-button :label="false">禁用</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="公司" prop="companyId">
          <treeselect v-model="form.companyId" :load-options="loadCompanys" :options="companys" style="width: 430px;" placeholder="选择归属公司" />
        </el-form-item>
        <el-form-item label="部门" prop="officeId">
          <treeselect v-model="form.officeId" :load-options="loadDepts" :options="depts" style="width: 430px;" placeholder="选择归属部门" />
        </el-form-item>
        <el-form-item label="角色" prop="roles">
          <el-select v-model="form.roles" multiple filterable placeholder="请选择用户角色" style="width: 430px;">
            <el-option v-for="item in roleOpts" :key="item.id" :label="item.name" :value="item.id" />
          </el-select>
        </el-form-item>
        <el-form-item label="本人签名" prop="fileIdList">
          <viewer v-if="image" :images="[image]">
            <img :src="image" width="180" height="48">
          </viewer>
          <el-button type="primary" icon="el-icon-upload" @click="imagecropperShow=true">
            {{ image ? '更换签名': '添加签名' }}
          </el-button>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="beforeClose">取 消</el-button>
        <el-button :loading="loading" type="primary" @click="dialogComfirm('form')">确 定</el-button>
      </div>
    </el-dialog>
    <image-cropper
      v-show="imagecropperShow"
      :key="imagecropperKey"
      :width="180"
      :height="48"
      @close="cropperClose"
      @crop-upload-success="cropSuccess"
    />
  </div>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import { LOAD_CHILDREN_OPTIONS } from '@riophae/vue-treeselect'
import paginationPage from '@/mixins/paginationPage'
import Pagination from '@/components/Pagination'
import { getDeptApi, getListByPidApi } from '@/apis/modules/System/dept'
import { getUserApi, addUserApi, editUserApi, delUserApi, resetUserPasswordApi } from '@/apis/modules/System/user'
import { queryRoleOptsApi } from '@/apis/modules/Common'
import { SysUserTypeMixins } from '@/mixins/dictionaryOpts'
import { deptsOptionsNoCatch, deptsOptions } from '@/mixins/deptsOptions'
import ImageCropper from '@/components/ImageCropper'
import { formUploadFilesMixins } from '@/mixins/upload'
const INIT_FORM = {
  username: '',
  no: '',
  nickName: '',
  userType: '',
  phone: '',
  mobile: '',
  email: '',
  officeId: null,
  companyId: null,
  isEnable: true,
  roles: []
}

export default {
  name: 'SystemUserList',
  components: {
    Pagination,
    Treeselect,
    ImageCropper
  },
  mixins: [paginationPage, SysUserTypeMixins, deptsOptionsNoCatch, deptsOptions, formUploadFilesMixins],
  data() {
    return {
      loading: false,
      deptName: '',
      deptDatas: [],
      defaultProps: {
        children: 'children',
        label: 'name',
        isLeaf: (data, node) => {
          return !node.data.hasleaf
        }
      },
      query: {
        username: '',
        nickName: '',
        companyId: '',
        officeId: ''
      },
      tableData: [],
      dialogType: 'add',
      dialogVisible: false,
      form: INIT_FORM,
      rules: {
        username: [
          { required: true, message: '请输入用户账号登录名', trigger: 'blur' }
        ],
        nickName: [
          { required: true, message: '请输入用户姓名', trigger: 'blur' }
        ],
        userType: [
          { required: true, message: '请选择用户类型', trigger: 'change' }
        ],
        phone: [
          // { required: true, message: '请输入用户电话', trigger: 'blur' }
        ],
        mobile: [
          // { required: true, message: '请输入用户手机号', trigger: 'blur' }
        ],
        email: [
          // { required: true, message: '请输入用户邮箱地址', trigger: 'blur' }
        ],
        officeId: [
          { required: true, message: '请选择用户归属部门', trigger: 'change' }
        ],
        companyId: [
          { required: true, message: '请输入用户归属公司', trigger: 'change' }
        ],
        isEnable: [
          { required: true, message: '请选择账号状态', trigger: 'change' }
        ],
        roles: [
          { required: true, message: '请选择用户所属角色', trigger: 'change' }
        ]
      },
      roleOpts: [],
      companys: [],
      imagecropperShow: false,
      imagecropperKey: 0,
      image: '',
      signatureFileIds: '',
      /* eslint-disable */
      RESET_PW: <%- JSON.stringify(sys.RESET_PW) %>
    }
  },
  watch: {
    filterOriginTreeText(val) {
      this.$refs.originTree.filter(val)
    }
  },
  mounted() {
    this.init()
    this.initDepsMixins({ name: this.deptName })
    Promise.all([
      this.initSysUserTypeOptsMixins(),
      this.initRoleOpts(),
      this.initCompanyOpts()
    ])
  },
  methods: {
    init() {
      return new Promise((resolve, reject) => {
        this.loading = true
        getUserApi({
          page: {
            ...this.pageInfo
          },
          ...this.query
        }).then(res => {
          const { code, data } = res
          if (!code) {
            const { list, ...pageInfo } = data
            this.initPage(pageInfo)
            this.tableData = list.map(item => {
              const { company: { id: companyId, name: companyName }, office: { id: officeId, name: officeName }, roles, signatureFileIds, ...info } = item
              const rolesArr = roles.map(item => {
                return item.id
              })
              const role_show = roles.map(item => {
                return item.name
              })
              let signUrl = ''
              if (signatureFileIds) {
                signUrl = `${process.env.VUE_APP_BASE_API}/sys/file/download/${signatureFileIds}`
              }
              return {
                ...info,
                companyId,
                companyName,
                officeId,
                roles: rolesArr,
                role_show: role_show.join(','),
                officeName,
                signUrl,
                signatureFileIds
              }
            })
          }
          this.loading = false
          resolve(res)
        }).catch(err => {
          this.loading = false
          reject(err)
        })
      })
    },
    dialogComfirm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          const { roles, ...user } = this.form
          this.$set(this.form, 'user', Object.assign(user, { signatureFileIds: this.signatureFileIds }))
          if (this.dialogType === 'add') {
            // 新增用户
            addUserApi({
              roles,
              user
            }).then(res => {
              const { code } = res
              if (!code) {
                this.$notify({
                  title: '成功',
                  message: `新增用户成功，用户的初始密码是${this.RESET_PW}`,
                  type: 'success'
                })
                this.init()
                this.dialogVisible = false
              }
              this.loading = false
            }).catch(err => {
              console.log(err)
              this.loading = false
            })
          } else {
            // 修改用户
            editUserApi({
              roles,
              user
            }).then(res => {
              const { code } = res
              if (!code) {
                this.$notify({
                  title: '成功',
                  message: '修改用户成功',
                  type: 'success'
                })
                this.init()
                this.dialogVisible = false
              }
              this.loading = false
            }).catch(err => {
              console.log(err)
              this.loading = false
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleAdd() {
      this.form = Object.assign({}, { ...INIT_FORM })
      this.dialogType = 'add'
      this.dialogVisible = true
    },
    handleModify(item) {
      this.dialogType = 'updata'
      this.form = Object.assign({}, { ...item })
      this.dialogVisible = true
    },
    handleDelete(item) {
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        lockScroll: false
      }).then(() => {
        if (!item.id) return
        delUserApi({
          id: item.id
        }).then(res => {
          const { code } = res
          if (!code) {
            this.$message({
              message: '删除成功',
              type: 'success'
            })
            this.init()
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    getDeptDatas(node, resolve) {
      const params = {}
      if (typeof node !== 'object') {
        if (node) {
          params['name'] = node
        }
      } else if (node.parentId !== 0) {
        params['id'] = node.data.id
      }
      setTimeout(() => {
        this.initDepsMixins(params)
        // getListByPidApi(params).then(res => {
        //   const { code, data } = res
        //   if (!code) {
        //     if (resolve) {
        //       resolve(data)
        //     } else {
        //       this.deptDatas = data
        //     }
        //   }
        // })
      })
    },
    handleNodeClick(data) {
      const { type, id } = data
      if (type === '1') {
        // 公司
        this.query.companyId = id
        this.query.officeId = ''
      } else if (type === '2') {
        // 部门
        this.query.officeId = id
        this.query.companyId = ''
      } else {
        return
      }
      this.init()
    },
    // 改变状态
    changeEnabled(data, val) {
      this.$confirm(`此操作将${!data.isEnable ? '停用' : '启用'}${data.nickName}的账号, 是否继续`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        lockScroll: false
      }).then(() => {
        editUserApi({
          roles: [],
          user: {
            id: data.id,
            isEnable: data.isEnable
          }
        }).then(res => {
          const { code, msg } = res
          if (!code) {
            this.$message({
              message: '更新成功',
              type: 'success'
            })
            this.init()
          } else {
            data.isEnable = !data.isEnable
            this.$message({
              message: msg,
              type: 'error'
            })
          }
        }).catch(err => {
          data.isEnable = !data.isEnable
          console.log(err.response.data.message)
        })
      }).catch(() => {
        data.isEnable = !data.isEnable
      })
    },
    initcropImage(url, id) {
      if (id) {
        this.image = url
        this.signatureFileIds = id
      } else {
        this.image = ''
        this.signatureFileIds = ''
      }
    },
    cropSuccess(resData) {
      const { code, data } = resData
      if (!code) {
        console.log(data)
        this.imagecropperShow = false
        this.imagecropperKey = this.imagecropperKey + 1
        this.image = `${process.env.VUE_APP_BASE_API}/sys/file/download/${data.id}`
        this.signatureFileIds = data.id
      }
    },
    cropperClose() {
      this.imagecropperShow = false
    },
    initSelect() {
      this.initCompanyOpts(this.dialogType !== 'add')
      this.initcropImage(this.form.signUrl, this.form.signatureFileIds)
    },
    initRoleOpts() {
      return new Promise((resolve, reject) => {
        queryRoleOptsApi({}).then(res => {
          const { code, data } = res
          if (!code) {
            this.roleOpts = data
          }
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    initCompanyOpts(uploadAll, deptName) {
      return new Promise((resolve, reject) => {
        this.initOrigin(uploadAll, deptName)
        getDeptApi({}).then(res => {
          const { code, data } = res
          if (!code) {
            if (uploadAll) {
              // 加载全部机构
              this.companys = JSON.parse(JSON.stringify(data).replace(/name/g, 'label'))
            } else {
              // 只加载顶层机构
              this.companys = data.map(item => {
                return { ...item, label: item.name, children: null }
              })
            }
          }
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    loadCompanys({ action, parentNode, callback }) {
      if (action === LOAD_CHILDREN_OPTIONS) {
        const params = parentNode.id ? { id: parentNode.id } : {}
        getListByPidApi(params).then(res => {
          if (!res.code) {
            let { data } = res
            data = JSON.parse(JSON.stringify(data).replace(/name/g, 'label').replace(/children/g, 'children'))
            parentNode.children = data.map((obj) => {
              if (obj.hasleaf) {
                obj.children = null
              } else {
                delete obj.children
              }
              return obj
            })
          }
          setTimeout(() => {
            callback()
          }, 100)
        })
      }
    },
    // 重置密码
    handleResetPassword(item) {
      this.$confirm(`此操作将重置用户 ${item.nickName} 的登录密码为 ${this.RESET_PW} `, '是否继续', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        lockScroll: false
      }).then(() => {
        if (!item.id) return
        resetUserPasswordApi({
          id: item.id
        }).then(res => {
          const { code } = res
          if (!code) {
            this.$notify({
              title: '重置密码成功',
              message: `用户 ${item.nickName} 的密码已重置为 ${this.RESET_PW}`,
              type: 'success'
            })
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    resetForm(formName) {
      this.query.officeId = ''
      this.$refs[formName].resetFields()
      this.init()
    },
    beforeClose(done) {
      this.dialogVisible = false
      this.loading = false
      this.$refs.form.resetFields()
      this.initcropImage(null, null)
      typeof done === 'function' && done()
    },
    // 上传成功
    uploadFileSuccess(file) {
      this.$message.success('导入成功')
      this.$refs.uploadFile.$refs.upload.clearFiles()
      this.uploadFileList = []
      if (typeof file === 'string') {
        return
      }
      this.init()
    },
    // 导出
    handleExport() {
      let str = ''
      for (const key in this.query) {
        str += `&${key}=${this.query[key]}`
      }
      str = '?' + str.substring(1)
      window.open(`${process.env.VUE_APP_BASE_API}/sys/user/export${str}`)
    },
    // 下载模板
    downloadExcel() {
      window.open(`${process.env.VUE_APP_BASE_API}/sys/user/download`)
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
