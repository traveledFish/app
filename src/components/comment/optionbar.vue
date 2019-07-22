<template>
  <ul class="optionlist" >
    <li class="optionitem" v-for='(item, index) of optionlist' :key="index">
      <span class="itemtitle">{{ item.title }}</span>
      <slot name="tip"></slot>
      <span class="arrow"></span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    optionlist: Array
  }
}
</script>

<style lang="scss">

</style>
