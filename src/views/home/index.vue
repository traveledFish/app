<template>
  <div class="container">
    <header-def>
      <div slot="header-left"></div>
      <div slot="header-center">
        <van-search placeholder="请输入搜索关键词" v-model="value" />
      </div>
      <div slot="header-right">消息</div>
    </header-def>
    <div class="content">
      这里是首页内容
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Search } from 'vant'
import Headerdef from '../../components/comment/Header2'

Vue.use(Search)
export default {
  components: {
    'header-def': Headerdef
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.container {
  .header {
    @include background-color(#B4282D);
    .header-center {
      &>div {
        @include rect(100%, 100%);
        @include border-radius(5px);
        @include overflow(hidden);
        .van-search {
          @include rect(auto, 100%)
        }
      }
    }
  }
}
</style>
