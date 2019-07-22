<template>
  <div class="display">
    <div class="display-header">商品详情</div>
    <ul class="display-list">
      <li v-for="(item, index) of displaylist" :key='index'>
        <img :src="item" alt="商品图片">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    displaylist: Array
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.display {

}
</style>
