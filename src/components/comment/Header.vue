<template>
  <van-nav-bar
    title="标题"
    left-text=""
    right-text="消息"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>

<script>
import Vue from 'vue'
import { NavBar } from 'vant'

Vue.use(NavBar)
export default {

}
</script>
