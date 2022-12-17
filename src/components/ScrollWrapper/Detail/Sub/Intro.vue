<template>
  <div class="intro-bd">
    <detail-title icon="icon-intro" title="详细介绍"></detail-title>
    <div class="intro">
      {{ intro }}
    </div>
  </div>
</template>

<script>
import DetailTitle from './Title.vue';
export default {
  name: 'DetailIntro',
  components: {
    DetailTitle,
  },
  props: {
    intro: String,
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/mixins.scss";

.intro-bd {
  @include flex-column;
  background: #fff;
  margin-top: 0.1rem;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .intro {
    padding: 0.1rem 0.15rem;
    font-size: 0.14rem;
    line-height: 0.2rem;
    text-indent: 2em;
    box-sizing: border-box;
  }
}
</style>