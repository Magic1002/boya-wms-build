<template>
  <div class="login-container-wrapper">
    <div class="main-board">
      <div class="login-container">
        <div class="bg-left">
          <img src="@/assets/logo.jpg" alt="">
        </div>
        <div class="bg-right">
          <el-form ref="loginForm" class="login-form" auto-complete="on" :model="loginForm" :rules="loginRules" label-position="left">
            <el-row class="title-wrapper">
              <h3 class="title">{{ title }}</h3>
            </el-row>

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

            <div class="el-form-item-remember">
              <el-checkbox v-model="isRemember">记住用户名</el-checkbox>
            <!-- <el-button type="text">立即申请</el-button> -->
            </div>

            <el-form-item>
              <el-button
                type="primary"
                style="width:100%;height:42px"
                :loading="loading"
                @keyup.enter.native="handleLogin"
                @click.native.prevent="handleLogin"
              >
                点击登录
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="banner">
        <img src="@/assets/login/img1-v1.jpeg" alt="">
        <img src="@/assets/login/img2-v1.jpeg" alt="">
        <img src="@/assets/login/img3-v1.jpeg" alt="">
      </div>
    </div>
    <div class="login-container-wrapper-bt" />
  </div>
</template>

<script>
// import { isvalidUsername } from '@/utils/validate'
import JSEncrypt from 'jsencrypt'
import Settings from '@/settings'
import Cookies from 'js-cookie'
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
      loginForm: {
        username: '',
        password: ''
      },
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
            trigger: 'blur',
            validator: validatePass
          }
        ]
      },
      loading: false,
      pwdType: 'password',
      redirect: undefined,
      // 是否记住用户名
      isRemember: false
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
    },
    isRemember: {
      handler: function(val) {
        if (val) {
          Cookies.set('username', this.loginForm.username)
        } else {
          Cookies.remove('username')
        }
      },
      immediate: true
    }
  },
  moutend() {
    const username = Cookies.get('username')
    if (username) {
      this.loginForm.username = username
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
              if (response.code === 407 || data.resetPwd) {
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

<style  lang="scss" scoped>
$bg: #fff;
$dark_gray: #889aa4;
$light_gray: #eee;
/* reset element-ui css */
.login-container-wrapper {
  width: 100vw;
  height: 100vh;
  min-width: 1200px;
  min-height: 800px;
  // background: #2d3a4b;
  position: relative;
  transition: background .5s ease-in;
  background: url("../../assets/login/bg-v1.jpg") no-repeat center center;
  background-size: cover;
}
.main-board{
  position: absolute;
  padding-top: 1px;
  // height: 100%;
  top: 50%;
  left: 140px;
  margin-top: -380px;
}
.login-container {
  width: 850px;
  height: 500px;
  margin-left: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 25px;
  box-shadow: 0px 0px 10px #003050;
  padding:0;
  overflow: hidden;
  .bg-right{
    width: 425px;
    background: #fff;
    height: 500px;
    padding-top: 1px;
  }
  /deep/{
    .el-input {
      display: inline-block;
      height: 40px;
      width: 300px;
      input {
        background: transparent;
        border: 0px;
        appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: #666;
        height: 40px;
        &:-webkit-autofill {
          box-shadow: 0 0 0px 1000px #f7f9fc inset !important;
          -webkit-text-fill-color: #999999 !important;
        }
        &::placeholder{
          color: #a0a0a0;
        }
      }
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      // background: rgba(0, 0, 0, 0.1);
      background: #e6eaf3;;
      border-radius: 5px;
      color: #454545;
    }
    .el-form-item__content{
      line-height: 32px;
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
  }
  .el-form-item-remember {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
  }

  .bg-left {
    width: 425px;
    height: 500px;
    background: rgba(56, 76, 108, .4);
    display: flex;
    justify-content: center;
    img {
      width: 170px;
      filter: drop-shadow(3px 5px 2px rgba(0,0,0,.3));
      display: block;
      object-fit: contain;
    }
  }
  .login-form {
    padding: 95px 35px 15px 35px;
    margin: 0 auto;
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    color: #666;
    /* &_login {
      font-size: 20px;
    } */
  }
  .title-wrapper{
    margin: 0px auto 50px;
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    color: #084296;
    // margin: 0px auto 40px auto;
    text-align: center;
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
.banner{
  display: flex;
  margin-top: 100px;
  img{
    display: block;
    margin-right: 60px;
    width: 305px;
    height: 167px;
    border: #fff solid 4px;
    border-radius: 2px;
    box-shadow: 0px 0px 2px rgba(0,0,0,.3), 5px 8px 5px rgba(0,0,0,.3);
    &:last-child{
      margin-right: 0;
    }
  }
}
</style>
