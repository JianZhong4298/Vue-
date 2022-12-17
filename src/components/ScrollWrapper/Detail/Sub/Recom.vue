<template>
  <div class="recom-bd">
    <detail-title title="推荐菜品" icon="icon-recom"></detail-title>
    <div class="content">{{ content }}</div>
  </div>
</template>

<script>
import DetailTitle from './Title.vue';
export default {
  name: 'DetailRecom',
  props: {
    content: {
      type: String,
      default() {
        return '加载中...';
      },
    },
  },
  components: {
    DetailTitle,
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/mixins.scss";

.recom-bd {
  @include flex-column;
  background: #fff;
  margin-top: 0.1rem;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .content {
    padding: 0.1rem 0.15rem;
    font-size: 0.14rem;
    line-height: 0.2rem;
    text-indent: 2em;
    box-sizing: border-box;
  }
}
</style>