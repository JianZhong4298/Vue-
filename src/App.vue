<template>
  <div id="app">
    <keep-alive include="Index,Detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  components: {

  }
}
</script>

<style lang="scss" scoped>
html,
body,
.conatiner,
#app {
  height: 100%;
}
</style>
