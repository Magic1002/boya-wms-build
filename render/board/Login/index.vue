<template>
  <div class="login-container">
    <el-form ref="loginForm" class="login-form" auto-complete="on" :model="loginForm" :rules="loginRules" label-position="left">
      <%- board.boardLoginTitle %>

      <el-form-item prop="username">
        <span class="svg-container svg-container_login">
          <svg-icon icon-class="user" />
        </span>
        <el-input v-model.trim="loginForm.username" name="username" type="text" auto-complete="on" placeholder="请输入用户名" />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          v-model.trim="loginForm.password"
          name="password"
          :type="pwdType"
          auto-complete="on"
          placeholder="请输入密码"
          @keyup.enter.native="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="pwdType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          style="width:100%;"
          :loading="loading"
          @keyup.enter.native="handleLogin"
          @click.native.prevent="handleLogin"
        >
          点击登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { isvalidUsername } from '@/utils/validate'
import JSEncrypt from 'jsencrypt'
import Settings from '@/settings'

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
      callback()
    }
    const validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入登录密码'))
      } else if (value.length < 5) {
        callback(new Error('密码不能小于6位'))
      } else {
        callback()
      }
    }
    return {
      title: Settings.title,
      /* eslint-disable */
      loginForm: <%- JSON.stringify(board.boardLoginForm) %>,
      loginRules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur',
            validator: validateUsername
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
            validator: validatePass
          }
        ]
      },
      loading: false,
      pwdType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
        }
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    getRsaCode(str) {
      const pubKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCTxGuUIQ0+8WcFO3Z5m1blMlbmaJbsC8Er0s0bVZANUS8pEkXm4jUI2Y9A34eWPm95BOo323UYO0rr3fMgVZigcW7xSYOlnhyP7cOyzebczYepixEAUwz1CBXzJEHp3i02IHvsY5j0+zVWtDVX7tQdjkVfMZTyeBUZNBvAfTz0GQIDAQAB'
      const encryptStr = new JSEncrypt()
      encryptStr.setPublicKey(pubKey)
      return encryptStr.encrypt(str.toString())
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          const password = this.getRsaCode(this.loginForm.password)
          const loginForm = { ...this.loginForm, password }
          this.$store
            .dispatch('Login', loginForm)
            .then((response) => {
              const { data } = response
              if (data.resetPwd) {
                this.$router.push({
                  name: 'ResetPwd',
                  redirect: this.redirect
                })
              } else {
                this.$router.push({
                  path: this.redirect || '/',
                  replace: true
                })
              }

              this.loading = false
            })
            .catch(err => {
              console.log(err)
              this.loginForm.password = ''
              this.loading = false
            })
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;
/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
  .title-wrapper{
    margin: 0px auto 40px auto;
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    color: $light_gray;
    // margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  // 添加登录的样式
  .sms-code {
    img {
      height: 47px;
    }
  }
}
/* eslint-disable */
<%- board.boardLoginStyle %>
</style>
