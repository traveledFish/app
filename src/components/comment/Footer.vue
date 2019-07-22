<template>
  <ul class="footer">
    <router-link to='/home' tag="li">
      <span class="iconfont icon-shouye"></span>
      <p>首页</p>
    </router-link>
    <router-link to="/classify" tag="li">
      <span class="iconfont icon-fenlei"></span>
      <p>分类</p>
    </router-link>
    <router-link to="/cart" tag="li">
      <span class="iconfont icon-gouwuche"></span>
      <p>购物车</p>
    </router-link>
    <router-link to="/user" tag="li">
      <span class="iconfont icon-yonghu"></span>
      <p>个人</p>
    </router-link>
  </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.footer {
  @include rect(100%,0.5rem);
  @include flexbox();
  // @include float(auto);
  @include background-color(#ddd);
  @include border(1px 0 0 0,#999, solid);
  li {
    @include rect(auto, 100%);
    @include flex();
    @include flexbox();
    @include flex-direction(column);
    @include justify-content(space-around);
    @include text-align(center);
    span {
      @include font-size(0.2rem);
    }
  }
}
</style>
