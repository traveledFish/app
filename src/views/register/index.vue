<template>
  <div class="container">
    <header-def>
      <div slot="header-left" @click="onClickLeft"></div>
      <div slot="header-center">注册</div>
      <div slot="header-right" @click="onClickRight">登录</div>
    </header-def>
    <div class="content">
      <div class="logo">
        <img src="../../../public/img/logo.png" alt="">
      </div>
      <div class="register-input">
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
          <van-field
            v-model="sms"
            center
            clearable
            label="短信验证码"
            placeholder="请输入短信验证码"
          >
            <van-button slot="button" size="small" type="primary" @click="idcclick">发送验证码</van-button>
          </van-field>
        </van-cell-group>
      </div>
      <div class="register-button">
        <van-button type="primary" size="large" @click="regclick">注册</van-button>
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
      password: '',
      sms: '123456',
      code: '123456'
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
        if ((/^1[3456789]\d{9}$/.test(this.username))) {
          return ''
        } else {
          return '手机号格式错误'
        }
      }
    },
    passwordState () {
      if (this.password === '') {
        return ''
      } else {
        if (this.password.length >= 5) {
          return ''
        } else {
          return '密码格式错误'
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
      Dialog.confirm({
        title: '提示',
        message: 'replace login  跳转至***'
      }).then(() => {
        this.$router.replace('/login')
      })
      // this.$router.replace('/login') // !!!重点注意
    },
    idcclick () {
      fetch('https://www.daxunxun.com/users/sendCode?tel=' + this.username).then(res => res.json()).then(data => {
        console.log(data)
        if (data === 0) {
          Toast('验证码获取失败')
        } else if (data === 1) {
          Toast('该用户已注册')
        } else {
          this.code = data.code
        }
      }) // 在这个fetch调用后台接口时，会实现向提交的手机号发送一条验证码短信的功能，并且会向前端返回验证码数据。其实该接口在发送验证码之前会比对数据库，看该电话号码是否已注册，如果已注册，那么不执行发送验证码步骤，直接返回信息“1”
    },
    regclick () {
      // 判断如果用户名格式正确，密码格式正确，验证码正确，那就向后台发送注册信息
      if (this.passwordIcon === 'checked' && this.usernameIcon === 'checked' && this.sms === this.code) {
        console.log('提交了注册信息')
        fetch('https://www.daxunxun.com/users/register', {
          method: 'post',
          headers: { // 看后端的接口
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: 'username=' + this.username + '&password=' + this.password
        }).then(res => res.json()).then(data => {
          console.log('注册结果：')
          console.log(data)
          if (data === 1) {
            console.log('注册成功')
            Dialog.confirm({
              title: '提示',
              message: '注册成功，是否跳转至***'
            }).then(() => {
              this.$router.push('/login')
            }).catch(() => {
              // on cancel
            })
          } else {
            if (data === 2) {
              console.log('该用户已注册')
              Toast('该用户已注册')
            } else {
              console.log('注册失败')
              Toast('注册失败')
            }
          }
        })
      } else {
        if (this.usernameIcon !== 'checked') {
          console.log('手机号格式不对，无法注册')
          Toast('手机号格式不对，无法注册')
        } else {
          if (this.passwordIcon !== 'checked') {
            console.log('密码格式不对，无法注册')
            Toast('密码格式不对，无法注册')
          } else {
            console.log('验证码不对，无法注册')
            Toast('验证码不对，无法注册')
          }
        }
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
    .register-input {
      @include rect(100%, auto);
      @include margin(0 0 10px 0);
    }
    .register-button {
      @include rect(100%, auto);
      // @include padding(0 20px);
    }
  }
}
</style>
