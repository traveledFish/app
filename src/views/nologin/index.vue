<template>
  <div class="nologin">
    <div class="nologin-header">
      <div class="nologin-close" @click="quitNologin">
        <span class="iconfont icon-close"></span>
      </div>
      <div class="logo">
        <img src="../../../public/img/logo.png" alt="">
      </div>
    </div>
    <div class="nologin-banner">
      <img src="https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg" alt="">
    </div>
    <div class="nologin-button">
      <div class="phonelogin" @click="loginclick">
        <van-button icon="envelop-o" type="primary">手机号登录</van-button>
      </div>
      <div class="emaillogin" @click="loginclick">
        <van-button icon="envelop-o" type="primary">邮箱登录</van-button>
      </div>
      <div class="regtip" @click="regclick">
        <span>手机号快捷注册</span>
        <span class="iconfont icon-Downarrow"></span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'vant'
Vue.use(Button)
export default {
  methods: {
    quitNologin () {
      this.$router.push('/home')
    },
    regclick () {
      this.$router.push('/register')
    },
    loginclick () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/lib/reset.scss';
.nologin {
  @include rect(100%, 100%);
  @include padding(10px);
  .nologin-header {
    @include rect(100%, 1.5rem);
    @include flexbox();
    @include justify-content(center);
    // @include text-align(center);
    @include align-content(center);
    .nologin-close {
      @include rect(0.5rem,0.5rem);
      @include line-height(0.2rem);
      @include font-size(0.2rem);
      position:absolute;
      top: 10px;
      left: 10px;
    }
    .logo {
      @include rect(2rem, auto);
      @include line-height(1.5rem);
      img {
        @include rect(2rem,auto);
      }
    }
  }
  .nologin-banner {
    @include rect(100%, 3rem);
    @include margin(0 0 10px 0);
    @include background-color(lightgreen);
    img {
      @include rect(100%,100%);
    }
  }
  .nologin-button {
    .van-button {
      @include rect(100%,0.4rem);
      @include line-height(0.4rem);
      @include border-radius(3px);
    }
    .phonelogin {
      @include rect(100%, 100%);
      @include margin(0 0 10px 0);
      @include text-align(center);
    }
    .emaillogin {
      @include rect(100%, 100%);
      @include text-align(center);
      .van-button {
        @include rect(100%,auto);
        @include border-radius(3px);
        @include background-color(white);
        @include color(#dd001d);
      }
    }
    .regtip {
      @include rect(100%, 0.2rem);
      @include text-align(center);
      @include color(#222);
    }
  }
}
</style>
