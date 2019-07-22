<template>
  <div class="recom prolist">
    <ul class="recom-list prolist-ls">
      <router-link class="proitem" tag="li" :to="{ name:'detail',params: { id: item.proid } }" v-for='(item, index) of prolist' :key='index'>
        <div class="pro-img">
          <img :src="item.prourl" alt="">
        </div>
        <div class="pro-brief">
          <span>{{ item.brief }}</span>
        </div>
        <div class="pro-info">
          <div class="info-title">
            <span>{{ item.title }}</span>
          </div>
          <div class="info-price">
            ￥
            <span>{{ item.price }}</span>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  // data () {

  // },
  props: {
    prolist: Array
  }
  // components: {

  // },
  // mounted () {

  // }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.content {
  @include background-color(#e0e0e0);
  .recom {
    @include rect(100%, auto);
    .recom-list {
      @include rect(100%, auto);
      @include flexbox();
      @include flex-wrap(wrap);
      li {
        flex-grow:1;
        @include rect(1.5rem,2.6rem);
        @include background-color(white);
        .pro-img {
          @include rect(100%, 1.8rem);
          @include background-color(lightgreen);
          position: relative;
          img {
            @include rect(100%, 1.8rem);
            @include background-color(white);
          }
        }
        .pro-brief {
          @include rect(100%, 0.2rem);
          @include line-height(0.2rem);
          @include padding(0 5px);
          @include background-color(#C1F2A0);
          // @include overflow(hidden);
          // position: absolute;
          // bottom: 0;
          // left: 0;
          @include color(#222);
          span {
            display: block;
            @include rect(100%, 0.2rem);
            @include line-height(0.2rem);
            overflow: hidden;
            text-overflow: ellipsis;
            @include color(#648150);
          }
        }
        .pro-info {
          @include rect(100%,auto);
          @include padding(0 10px);
          .info-title {
            @include rect(100%, 0.3rem);
            @include line-height(0.3rem);
            @include overflow(hidden);
            @include color(#222);
          }
          .info-price {
            @include rect(100%, 0.3rem);
            @include line-height(0.2rem);
            @include color(#dd001d);
            @include overflow(hidden);
          }
        }
      }
      li:nth-child(odd) {
        @include margin(0 10px 10px 0);
      }
    }
  }
}
</style>
