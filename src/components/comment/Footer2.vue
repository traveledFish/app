<template>
  <van-tabbar route active-color="#B4282D" inactive-color="#7D7E80">
    <van-tabbar-item
      replace
      to="/home"
      icon="wap-home"
    >
      首页
    </van-tabbar-item>
    <van-tabbar-item
      replace
      to="/classify"
      icon="apps-o"
    >
      分类
    </van-tabbar-item>
    <van-tabbar-item
      replace
      to="/cart"
      icon="shopping-cart-o"
    >
      购物车
    </van-tabbar-item>
    <van-tabbar-item
      replace
      to="/user"
      icon="contact"
    >
      个人
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabbarItem, Icon } from 'vant'

Vue.use(Icon)
Vue.use(Tabbar).use(TabbarItem)
export default {

}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
// .footer {
//   @include rect(100%,0.5rem);
//   @include flexbox();
//   // @include float(auto);
//   @include background-color(#ddd);
//   @include border(1px 0 0 0,#999, solid);
//   li {
//     @include rect(auto, 100%);
//     @include flex();
//     @include flexbox();
//     @include flex-direction(column);
//     @include justify-content(space-around);
//     @include text-align(center);
//     span {
//       @include font-size(0.2rem);
//     }
//   }
// }
</style>
