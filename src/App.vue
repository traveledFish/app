<template>
  <div id="app">
      <router-view></router-view>
      <!-- <router-view name='submitbar'></router-view> -->
      <router-view name='footer'></router-view>
  </div>
</template>

<style lang="scss">
@import '@/lib/reset.scss';
#app {
  @include rect(100%,100%);
  @include flexbox();
  @include flex-direction(column);
  .container {
    @include flex();
    @include rect(100%,auto);
    @include flexbox();
    @include flex-direction(column);
    .header {
      @include rect(100%,0.4rem);
      // @include background-color(#DD001B);
      @include border(0 0 1px 0, #ccc, solid);
      @include flexbox();
      @include font-size(16px);
    }
    .content {
      @include flex();
      @include rect(100%, auto);
      @include overflow(auto);
    }
  }
  // .van-submit-bar {
  //   @include rect(100%, 0.5rem);
  // }
  .footer {
    @include rect(100%, 0.5rem);
  }
  // .van-goods-action {
  //   // @include flex();
  //   @include rect(100%, 1rem);
  // }
}
</style>
