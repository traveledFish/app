<template>
  <div class="container">
    <header-def>
      <div slot="header-left" @click="onClickLeft"></div>
      <div slot="header-center">登录</div>
      <div slot="header-right" @click="onClickRight">注册</div>
    </header-def>
    <div class="content">
      <div class="logo">
        <img src="../../../public/img/logo.png" alt="">
      </div>
      <div class="login-input">
        <van-cell-group>
          <van-field
            v-model="username"
            required
            clearable
            label="用户名"
            :right-icon="usernameIcon"
            placeholder="请输入用户名"
            :error-message="usernameState"
          />

          <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
            :right-icon="passwordIcon"
            :error-message="passwordState"
          />
        </van-cell-group>
      </div>
      <div class="login-button">
        <van-button type="primary" size="large" @click="loginclick">登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Field, Cell, CellGroup, Button, Toast, Dialog } from 'vant'
import Headerdef from '../../components/comment/Header2'

Vue.use(Button)
Vue.use(Cell).use(CellGroup)
Vue.use(Field)
Vue.use(Toast)
Vue.use(Dialog)
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    'header-def': Headerdef
  },
  computed: {
    usernameState () {
      if (this.username === '') {
        return ''
      } else {
        if (!(/^1[3456789]\d{9}$/.test(this.username))) {
          return '用户名格式错误'
        } else {
          return ''
        }
      }
    },
    usernameIcon () {
      if (this.username === '') {
        return ''
      } else {
        if (this.usernameState !== '') {
          return ''
        } else {
          return 'checked'
        }
      }
    },
    passwordState () {
      if (this.password === '') {
        return ''
      } else {
        if (this.password.length < 5) {
          return '密码格式错误'
        } else {
          return ''
        }
      }
    },
    passwordIcon () {
      if (this.password === '') {
        return ''
      } else {
        if (this.passwordState !== '') {
          return ''
        } else {
          return 'checked'
        }
      }
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    onClickRight () {
      this.$router.replace('/register')
    },
    loginclick () {
      // console.log('click')
      if (this.passwordIcon === 'checked' && this.usernameIcon === 'checked') {
        // console.log('fetch')
        fetch('https://www.daxunxun.com/users/login', {
          method: 'post',
          headers: { // 看后端的接口
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: 'username=' + this.username + '&password=' + this.password
        }).then(res => res.json()).then(data => {
          console.log(data)
          if (data === 1) {
            Dialog.confirm({
              title: '提示',
              message: '登录成功，是否跳转至***'
            }).then(() => {
              this.$store.commit('changeLoginstate', 'ok')
              this.$router.back() // 这里可能会改
            }).catch(() => {
              // on cancel
            })
          } else {
            if (data === -1) {
              Dialog.confirm({
                title: '提示',
                message: '登录失败，密码不正确'
              }).then(() => {
                // on confirm
              }).catch(() => {
                // on cancel
              })
            } else {
              if (data === 2) {
                Dialog.confirm({
                  title: '提示',
                  message: '登录失败，没有该用户'
                }).then(() => {
                  // on confirm
                }).catch(() => {
                  // on cancel
                })
              } else {
                Dialog.confirm({
                  title: '提示',
                  message: '登录失败'
                }).then(() => {
                  // on confirm
                }).catch(() => {
                  // on cancel
                })
              }
            }
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/lib/reset.scss';
.container {
  .content {
    @include padding(10px);
    @include rect(100%, 100%);
    @include background-color(white);
    .logo {
      @include rect(2rem, auto);
      @include margin(0 auto);
      @include line-height(1.5rem);
      img {
        @include rect(2rem,auto);
      }
    }
    .login-input {
      @include rect(100%, auto);
      @include margin(0 0 10px 0);
    }
    .login-button {
      @include rect(100%, auto);
      // @include padding(0 20px);
    }
  }
}
</style>
