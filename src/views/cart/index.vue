<template>
  <div class="container">
    <header-def>
      <div slot="header-left"></div>
      <div slot="header-center">购物车</div>
      <div slot="header-right">消息</div>
    </header-def>
    <div class="content">
      <ul class="cartlist">
        <li class="cartitem" v-for='item of cartlist' :key='item.proid' @click="cartItemClick(item.proid)">
          <van-card
            :price="item.price"
            :desc="item.brief"
            :title="item.title"
            :thumb="item.prourl"
          >
            <div slot="tags">
              <van-tag plain type="danger">满300减30</van-tag>
              <van-tag plain type="danger">活动</van-tag>
            </div>
            <div slot="footer">
              <van-stepper v-model="value" />
            </div>
          </van-card>
        </li>
      </ul>
      <div class="recom-title prolist-title">
        <span>看了该商品的人还买了</span>
      </div>
      <pro-list :prolist='recomlist'></pro-list>
    </div>
    <submitbar></submitbar>
  </div>
</template>

<script>
import Vue from 'vue'
import { Card, Stepper, Tag } from 'vant'
import SubmitBar from '../../components/cart/submitbar'
import Prolist from '../../components/comment/prolist'
import Headerdef from '../../components/comment/Header2'
Vue.use(Tag)
Vue.use(Stepper)
Vue.use(Card)
export default {
  data () {
    return {
      cartlist: [],
      recomlist: [],
      value: 1
    }
  },
  components: {
    'submitbar': SubmitBar,
    'pro-list': Prolist,
    'header-def': Headerdef
  },
  mounted () {
    fetch('http://localhost:3000/api/cartfind').then(res => res.json()).then(data => {
      console.log(data)
      this.cartlist = data
    })
    fetch('http://localhost:3000/api/prolist/all').then(res => res.json()).then(data => {
      console.log(data)
      this.recomlist = data[0].data
    })
  },
  methods: {
    cartItemClick (id) {
      this.$router.push({ name: 'detail', params: { id: id } })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/lib/reset.scss';
.container {
  // position: relative;
  .content {
    @include flex-direction(column);
    .cartlist {
      .cartitem {
        @include rect(100%, auto);
        @include margin(0 0 8px 0);
      }
    }
    .recom-title {
      @include rect(100%, 0.4rem);
      @include line-height(0.4rem);
      @include text-align(center);
      @include font-size(18px);
      @include background-color(white);
    }
  }
}
</style>
