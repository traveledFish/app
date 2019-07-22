<template>
  <header class="header">
      <div class="header-left" @click="onClickLeft">
        <span class="iconfont icon-leftarrow"></span>
        <slot name="header-left"></slot>
      </div>
      <div class="header-center">
        <slot name="header-center"></slot>
      </div>
      <div class="header-right">
        <slot name="header-right"></slot>
      </div>
  </header>
</template>

<script>
export default {
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    onClickRight () {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.header {
  @include rect(100%, 0.4rem);
  // @include padding(0 10px);
  // @include background-color(#DD001B);
  .header-left {
    @include rect(0.5rem, 0.4rem);
    @include line-height(0.4rem);
    @include text-align(center);
    @include color(black);
  }
  .header-center {
    @include rect(auto, 0.4rem);
    @include line-height(0.4rem);
    @include flex();
    @include text-align(center);
    &>div {
      @include rect(100%, 100%);
      @include border-radius(5px);
      @include overflow(hidden);
      .van-search {
        @include rect(auto, 100%)
      }
    }
  }
  .header-right {
    @include rect(0.5rem, 0.4rem);
    @include line-height(0.4rem);
    @include color(black);
    @include text-align(center);
  }
}
</style>
