<template>
  <div class="container">
    <header-def>
      <div slot="header-left"></div>
      <div slot="header-center">商品详情</div>
      <div slot="header-right">分享</div>
    </header-def>
    <div class="content">
      <!-- 轮播图 -->
      <van-swipe :autoplay="2000" indicator-color="white">
        <van-swipe-item>
          <img :src="prodetail.prourl1" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img :src="prodetail.prourl2" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img :src="prodetail.prourl3" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img :src="prodetail.prourl4" alt="">
        </van-swipe-item>
      </van-swipe>
      <!-- 价格 -->
      <price :pricenum="prodetail.price*1"></price>
      <!-- 活动 -->
      <div class="prom">
        <div class="prom1">
          <span>领券：</span>
          <div class="tip">
            <van-tag color="#f2826a" plain>新人立减15元</van-tag>
          </div>
          <span class="iconfont icon-Downarrow"></span>
        </div>
        <div class="prom2">
          <span>购物返: </span>
          <div class="tip">
            <van-tag color="#f2826a" plain>新用户最多可返￥6.6元</van-tag>
          </div>
          <span class="iconfont icon-Downarrow"></span>
        </div>
        <!-- <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 15px' }">
          文本
        </van-divider> -->
        <!-- <optionlist :optionlist = 'data'>
          <p slot='tip'>新用户下单立减15元</p>
        </optionlist> -->
      </div>
      <!-- 选项信息 -->
      <div class="optioninfo">
        <div class="option1">
          <span>请选择规格数量</span>
          <div class="tip"></div>
          <span class="iconfont icon-Downarrow"></span>
        </div>
        <div class="option2">
          <span>配送：</span>
          <div class="tip">
            <van-tag color="#f2826a" plain>请选择配送地址</van-tag>
          </div>
          <span class="iconfont icon-Downarrow"></span>
        </div>
        <div class="option3">
          <span>服务:</span>
          <div class="tip">
            <span class="dot"></span>
            <span>支持30天无忧退换货</span>
            <span class="dot"></span>
            <span>48小时快速退款</span>
            <span class="dot"></span>
            <span>满88元免费邮</span>
          </div>
          <span class="iconfont icon-Downarrow"></span>
        </div>
      </div>
      <!-- 评价 -->
      <rating-box></rating-box>
      <!-- 详情 -->
      <pro-display :displaylist='imglist'></pro-display>
      <!-- 推荐 -->
      <div class="recom-title prolist-title">
        <span>猜您喜欢</span>
      </div>
      <pro-list :prolist="recomlist"></pro-list>
      <div class="aaa">
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem, Icon, Tag } from 'vant'
// import optionlist from '@/components/comment/optionbar'
import ratingBox from '../../components/detail/ratingBox'
import price from '../../components/detail/price'
import prodisplay from '../../components/detail/prodisplay'
import prolist from '../../components/comment/prolist'
import Headerdef from '../../components/comment/Header2'

Vue.use(Tag)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Icon)
export default {
  data () {
    return {
      prodetail: {},
      // prolist: [],
      recomlist: [],
      imglist: []
    }
  },
  components: {
    'rating-box': ratingBox,
    'price': price,
    'pro-display': prodisplay,
    'pro-list': prolist,
    'header-def': Headerdef
  },
  mounted () {
    console.log(this.$route)
    const { params: { id } } = this.$route
    fetch(`http://localhost:3000/api/prolist?id=${id}`).then(res => res.json()).then(data => {
      console.log(data)
      this.prodetail = data[0].data[0]
      this.imglist = [this.prodetail.prourl1, this.prodetail.prourl2, this.prodetail.prourl3, this.prodetail.prourl4, this.prodetail.prourl5]
      console.log(this.prodetail)
      this.$store.commit({
        type: 'reset',
        prodetail: this.prodetail
      })
    })
    fetch('http://localhost:3000/api/prolist/all').then(res => res.json()).then(data => {
      console.log(data)
      this.recomlist = data[0].data
    })
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.container {
  @include background-color(#eee);
  .header {
    @include background-color(#DD001B);
  }
  .content {
    .van-swipe {
      // @include margin(0 0 0.1rem 0);
      .van-swipe__track {
        .van-swipe-item{
          @include rect(100%,5rem);
          img {
            @include rect(100%,100%);
          }
        }
      }
    }
  }
}
.content {
  .prom {
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
      .tip {
        @include flex();
      }
    }
    .prom2 {
      @include border(none);
    }
  }
}
// 选择列表样式
.content {
  .optioninfo {
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
      .tip {
        @include flex();
        color: #bbb;
      }
    }
    .option3 {
      @include rect(100%, auto);
      @include border(none);
      @include padding(3px 0);
      .tip {
        @include line-height(normal);
        .dot {
          display:inline-block;
          @include rect(6px, 6px);
          @include background-color(#B4282D);
          @include border-radius(3px);
        }
      }
    }
  }
}
.content {
  .aaa {
    @include rect(100%, 1rem);
    @include background-color(white);
  }
}
// display样式
.content {
  .display {
    @include rect(100%, auto);
    @include margin(0 0 0.1rem 0);
    .display-header {
      @include rect(100%, 0.4rem);
      @include line-height(0.4rem);
      @include background-color(white);
      @include font-size(18px);
      @include text-align(center);
    }
    .display-list {
      @include rect(100%, auto);
      @include flexbox();
      @include flex-direction(column);
      li {
        @include rect(100%, auto);
        img {
          @include rect(100%,100%);
        }
      }
    }
  }
}
// 推荐样式
.content {
  .recom-title {
    @include rect(100%, 0.4rem);
    @include line-height(0.4rem);
    @include text-align(center);
    @include font-size(18px);
    @include background-color(white);
  }
}
</style>
