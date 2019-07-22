<template>
  <div class="ratebox">
    <div class="title">
      <span>用户评价</span>
      <div class="tip"></div>
      <span class="iconfont icon-Downarrow"></span>
    </div>
    <div class="rating">
      <div class="rating-header">
        <div class="pic">
          <img src="//img14.360buyimg.com/n1/jfs/t14995/299/502330120/306901/f02cd9ff/5a2f8bd8Ne73378de.jpg" alt="头像">
        </div>
        <div class="name">zl****</div>
        <rating-star :grade='getgrade'></rating-star>
        <span class="arrow iconfont icon-Downarrow"></span>
      </div>
      <div class="rating-cont">
        <div class="time"></div>
        <div class="text">
          <span>adfjsdjlfdsjlfjsadfasfasfdasfagfdfjfdlfjasd</span>
        </div>
        <ul class="piclist">
          <li><img src="//img14.360buyimg.com/n1/jfs/t14995/299/502330120/306901/f02cd9ff/5a2f8bd8Ne73378de.jpg" alt=""></li>
          <li><img src="//img14.360buyimg.com/n1/jfs/t14995/299/502330120/306901/f02cd9ff/5a2f8bd8Ne73378de.jpg" alt=""></li>
          <li><img src="//img14.360buyimg.com/n1/jfs/t14995/299/502330120/306901/f02cd9ff/5a2f8bd8Ne73378de.jpg" alt=""></li>
          <li><img src="//img14.360buyimg.com/n1/jfs/t14995/299/502330120/306901/f02cd9ff/5a2f8bd8Ne73378de.jpg" alt=""></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from '../comment/Rating'
export default {
  data () {
    return {
      getgrade: 2
    }
  },
  components: {
    'rating-star': Rating
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.ratebox {
  @include rect(100%, auto);
  @include background-color(white);
  @include padding(0 10px);
  @include margin(0 0 0.1rem 0);
  &>div {
    @include rect(100%,0.4rem);
    // @include text-align(center);
    @include line-height(0.4rem);
    @include flexbox();
    @include border(0 0 1px 0, #bbb, solid);
    // @include background-color(orange);
    .tip {
      @include flex();
      color: #bbb;
    }
  }
  .title {

  }
  .rating {
    @include rect(100%, auto);
    @include border(none);
    @include padding(3px 0);
    @include flex-direction(column);
    .rating-header {
      @include line-height(0.6rem);
      @include flexbox();
      .pic {
        @include rect(0.5rem, 0.5rem);
        @include border-radius(0.25rem);
        @include overflow(hidden);
        img {
          float:left;
          @include rect(100%, 100%);
        }
      }
      .name {
        @include margin(0 10px);
      }
      .arrow {
        // float: right;
      }
    }
    .rating-cont {
      @include rect(100%, auto);
      .time {
      }
      .text {
        // @include line-height(0.16rem);
      }
      .piclist {
        // @include rect();
        @include flexbox();
        @include padding(5px 0);
        li {
          @include rect(0.8rem, 0.8rem);
          @include margin(0 8px 0 0);
          img {
            @include rect(100%, 100%);
          }
        }
      }
    }
  }
}
</style>
