<template>
  <ul class="rating-star" >
    <li class="iconfont icon-sc" :class = "grade > 0.5 ? 'show' : ''"></li>
    <li class="iconfont icon-sc" :class = "grade > 1.5 ? 'show' : ''"></li>
    <li class="iconfont icon-sc" :class = "grade > 2.5 ? 'show' : ''"></li>
    <li class="iconfont icon-sc" :class = "grade > 3.5 ? 'show' : ''"></li>
    <li class="iconfont icon-sc" :class = "grade > 4.5 ? 'show' : ''"></li>
  </ul>
</template>

<script>
export default {
  props: {
    grade: Number
  },
  mounted () {
    // console.log(this.grade)
    // console.log(typeof (this.grade))
  }
}
</script>

<style lang="scss">
@import "@/lib/reset.scss"; // 这里只需要引入reset即可，因为在其里边引入了其他所有scss文件
.rating-star {
  // @include rect(auto,auto);
  @include flex();
  @include flexbox();
  // @include flex-direction();
  li {
    color:#999;
  }
  .show {
    color:yellow;
  }
}
</style>
