<template>
  <van-goods-action class="footer">
    <van-goods-action-icon
      icon="chat-o"
      text="客服"
    />
    <van-goods-action-icon
      info="5"
      icon="cart-o"
      text="购物车"
      @click='goCart'
    />
    <van-goods-action-icon
      icon="shop-o"
      text="店铺"
    />
    <van-goods-action-button
      type="warning"
      text="加入购物车"
      @click='addCart'
    />
    <van-goods-action-button
      type="danger"
      text="立即购买"
    />
  </van-goods-action>
</template>

<script>
import Vue from 'vue'
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant'
Vue.use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton)
export default {
  methods: {
    addCart () {
      var proinfo = this.$store.state.proinfo
      fetch('http://localhost:3000/api/cartinsert ', {
        method: 'post',
        headers: { // 看后端的接口
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'proid=' + proinfo.proid + '&prourl=' + proinfo.prourl + '&title=' + proinfo.title + '&price=' + proinfo.price + '&brief=' + proinfo.brief
      }).then(res => res.json()).then(data => {
        console.log(data)
      })
    },
    goCart () {
      this.$router.push('/cart')
    }
    // onClickButton () {
    //   console.log('')
    // }
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.van-goods-action {
  @include rect(100%, 0.5rem);
}
</style>
