<template>
  <van-submit-bar
    :price="3050"
    button-text="提交订单"
    @submit="onSubmit"
  />
</template>

<script>
import Vue from 'vue'
import { SubmitBar } from 'vant'

Vue.use(SubmitBar)
export default {
  methods: {
    onSubmit () {
      console.log('111')
    }
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.van-submit-bar {
  position: fixed;
  bottom: 0.5rem;
  left: 0;
  border-bottom: 1px solid #aaa;
  border-top: 1px solid #aaa;
  // @include border(1px 0, #aaa, solid) // !!!!!这个scss库的border是个坑，会设定position:relative;相对定位
}
</style>
