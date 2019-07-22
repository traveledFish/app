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
      <van-sidebar v-model="activeKey" @change='itemclick'>
        <van-sidebar-item title="推荐专区" />
        <van-sidebar-item title="生活日用" />
        <van-sidebar-item title="家装软饰" />
        <van-sidebar-item title="整理收纳" />
        <van-sidebar-item title="净化除味" />
        <van-sidebar-item title="家纺" />
        <van-sidebar-item title="厨具" />
        <van-sidebar-item title="餐具" />
        <van-sidebar-item title="推荐专区" />
        <van-sidebar-item title="生活日用" />
        <van-sidebar-item title="家装软饰" />
        <van-sidebar-item title="整理收纳" />
        <van-sidebar-item title="净化除味" />
        <van-sidebar-item title="家纺" />
        <van-sidebar-item title="厨具" />
        <van-sidebar-item title="餐具" />
      </van-sidebar>
      <div v-show='showindex === 0' class="itemshow">
        <div class="itemshow-banner">
          <img src="https://yanxuan.nosdn.127.net/58a554fdc56c9d92bce8a8ae17997352.jpg?imageView&thumbnail=260y146&quality=100" alt="">
        </div>
        <ul class="itemshow-list">
          <li v-for='(item, index) of itemlist' :key='index'>
            <div class="itemshow-list-showimg">
              <img src="https://yanxuan.nosdn.127.net/8a1c3b2d2d713f7da64acacedebe47e8.png" alt="">
            </div>
            <div class="itemshow-list-showname">
              夏凉热卖
            </div>
          </li>
          <li>
            <div class="itemshow-list-showimg">
              <img src="https://yanxuan.nosdn.127.net/5a165042f413da1d6a01a25de0a65952.png" alt="">
            </div>
            <div class="itemshow-list-showname">
              主题床品
            </div>
          </li>
          <li>
            <div class="itemshow-list-showimg">
              <img src="https://yanxuan.nosdn.127.net/bef3b6ec3a1d1b8ec3476ec2d5aa7a3a.png" alt="">
            </div>
            <div class="itemshow-list-showname">
              北欧原木
            </div>
          </li>
          <li>
            <div class="itemshow-list-showimg">
              <img src="https://yanxuan.nosdn.127.net/3fc9015f3ccebba3f34b06024b923a98.png" alt="">
            </div>
            <div class="itemshow-list-showname">
              餐厨系列
            </div>
          </li>
           <li>
            <div class="itemshow-list-showimg">
              <img src="https://yanxuan.nosdn.127.net/5a165042f413da1d6a01a25de0a65952.png" alt="">
            </div>
            <div class="itemshow-list-showname">
              主题床品
            </div>
          </li>
          <li>
            <div class="itemshow-list-showimg">
              <img src="https://yanxuan.nosdn.127.net/bef3b6ec3a1d1b8ec3476ec2d5aa7a3a.png" alt="">
            </div>
            <div class="itemshow-list-showname">
              北欧原木
            </div>
          </li>
          <li>
            <div class="itemshow-list-showimg">
              <img src="https://yanxuan.nosdn.127.net/3fc9015f3ccebba3f34b06024b923a98.png" alt="">
            </div>
            <div class="itemshow-list-showname">
              餐厨系列
            </div>
          </li>
        </ul>
      </div>
      <div v-show='showindex === 1' class="itemshow">
        <div class="itemshow-banner">
          <img src="https://gw.alicdn.com/tfs/TB1jB2Ow4naK1RjSZFtXXbC2VXa-720-400.jpg" alt="">
        </div>
        <ul class="itemshow-list">
          <li>
            <div class="itemshow-list-showimg">
              <img src="https://yanxuan.nosdn.127.net/366989e4d730594e86fcd60b5ab19acc.png" alt="">
            </div>
            <div class="itemshow-list-showname">
              收纳
            </div>
          </li>
          <li>
            <div class="itemshow-list-showimg">
              <img src="https://yanxuan.nosdn.127.net/3cbcfe2fab88dc4990705c86b2518567.png" alt="">
            </div>
            <div class="itemshow-list-showname">
              文具
            </div>
          </li>
          <li>
            <div class="itemshow-list-showimg">
              <img src="https://yanxuan.nosdn.127.net/0f79023e7f171c6e0414cd45e1b717fc.png" alt="">
            </div>
            <div class="itemshow-list-showname">
              晾晒除味
            </div>
          </li>
          <li>
            <div class="itemshow-list-showimg">
              <img src="https://yanxuan.nosdn.127.net/33386fcdceac29764fc9d9923150d665.png" alt="">
            </div>
            <div class="itemshow-list-showname">
              毛巾浴巾
            </div>
          </li>
          <li>
            <div class="itemshow-list-showimg">
              <img src="https://yanxuan.nosdn.127.net/959b248bb648a6737ef4eca56e2962f5.png" alt="">
            </div>
            <div class="itemshow-list-showname">
              居家拖鞋
            </div>
          </li>
          <li>
            <div class="itemshow-list-showimg">
              <img src="https://yanxuan.nosdn.127.net/de6518ab55b39bf19610c2b301965f79.png" alt="">
            </div>
            <div class="itemshow-list-showname">
              家庭医疗
            </div>
          </li>
          <li>
            <div class="itemshow-list-showimg">
              <img src="//img14.360buyimg.com/n1/jfs/t15481/151/372637869/239569/21e4f989/5a2f8bd8N43ff1ed3.jpg" alt="">
            </div>
            <div class="itemshow-list-showname">
              服装
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Sidebar, SidebarItem, Search } from 'vant'
import Headerdef from '../../components/comment/Header2'

Vue.use(Search)
Vue.use(Sidebar)
Vue.use(SidebarItem)
export default {
  data () {
    return {
      activeKey: 0,
      showindex: 0,
      itemlist: []
    }
  },
  mounted () {
    fetch('http://localhost:3000/api/classify').then(res => res.json()).then(data => {
      console.log(data)
    })
  },
  components: {
    'header-def': Headerdef
  },
  methods: {
    itemclick (index) {
      this.showindex = index
      console.log(this.showindex)
      // !!!!!!!!!!!!!!!!!!!!!!!!!!!
      // switch (this.activeKey) {
      //   case 0: this.a = true
      //     break
      //   case 1: this.b = true
      //     break
      //   default: this.c = true
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/lib/reset.scss';
.container {
  .header {
    @include background-color(white);
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
  .content {
    @include flexbox();
    @include flex-direction(row);
    // @include flex-wrap(nowrap);
    // position: relative;
    .van-sidebar {
      @include rect(0.85rem, 100%);
      @include overflow(auto);
      .van-sidebar-item {
        color: #222;
      }
    }
    .itemshow {
      // @include flex();
      @include rect(1rem, 100%);
      flex-grow:1;
      // position: absolute;
      // top: 0;
      // left: 0.85rem;
      @include padding(10px);
      @include background-color(white);
      .itemshow-banner {
        @include rect(100%, 1.5rem);
        @include margin(0 0 10px 0);
        img {
          @include rect(100%, 100%);
        }
      }
      .itemshow-list {
        @include rect(100%, auto);
        @include flexbox();
        @include flex-wrap(wrap);
        li {
          @include rect(0.6rem, 0.9rem);
          @include margin(0 5px 0 0);
          // @include background-color(lightgreen);
          .itemshow-list-showimg {
            @include rect(0.6rem, 0.6rem);
            @include border-radius(0.1rem);
            @include overflow(hidden);
            img {
              @include rect(100%, 100%);
            }
          }
          .itemshow-list-showname {
            @include rect(100%, 0.3rem);
            @include line-height(0.3rem);
            @include text-align(center);
          }
        }
      }
    }
  }
}
</style>
