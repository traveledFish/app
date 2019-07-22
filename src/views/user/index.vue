<template>
  <div class="container">
    <header class="header">这里是用户页头部</header>
    <div class="content">
      这里是用户页内容
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
export default {
  beforeRouteEnter (to, from, next) { // ???????????????????
    // console.log(to.name)
    next(vm => {
      const { $store: { state: { loginstate } } } = vm
      if (loginstate === 'ok') {
        next('')
      } else {
        next('/nologin')
      }
    })
  }
}
</script>
