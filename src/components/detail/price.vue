<template>
  <div class="price">
    <div class="pricenum">
      <span class="s1">￥</span>
      <span class="s2">{{ pricenum }}</span>
      <span class="s3">￥{{ pricenum + 20 }}</span>
    </div>
    <div class="tip">
      好货一口价 >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pricenum: Number
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.price {
  @include rect(100%, 0.9rem);
  @include background-color(white);
  @include margin(0 0 0.1rem 0);
  .pricenum {
    .s1 {
      @include font-size(0.2rem);
      @include color(#B4282D);
    }
    .s2 {
      @include font-size(0.36rem);
      @include color(#B4282D);
    }
    .s3 {
      @include font-size(0.2rem);
      text-decoration:line-through;
      @include color(#aaa);
    }
  }
  .tip {
    @include border(1px, #B4282D, solid);
    @include color(#B4282D);
    display: inline-block;
    @include margin(0 5px 5px 5px);
    @include padding(3px 6px);
  }
}
</style>
