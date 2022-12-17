<template>
  <header class="header">
    <h1>{{ title }}</h1>
    <back-ward></back-ward>
  </header>
</template>

<script>
import BackWard from './Sub/BackWard';
export default {
  components: { BackWard },
  comments: {
    BackWard,
  },
  props: {
    title: {
      type: String,
      default() {
        return '一线生活通'
      }
    }
  },
  name: 'CommonHeader',
}
</script>

<style lang='scss' scoped>
@import "~styles/mixins.scss";
@import "~styles/variables.scss";
.header {
  position: relative;
  @include flex-row;
  @include vh-center;
  height: $headerHeight;
  background-color: $defaultBgColor;

  h1 {
    font-size: 0.18rem;
  }
}
</style>