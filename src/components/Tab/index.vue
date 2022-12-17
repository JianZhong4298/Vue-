<template>
  <nav class="tab">
    <tab-sub v-for="(item, index) of cityDatas" :key="index" :cityInfo="item">
    </tab-sub>
  </nav>
</template>

<script>
import TabSub from './Sub';
import cityDatas from 'data/cities';

export default {
  name: 'Tab',
  components: {
    TabSub
  },
  data() {
    return {
      cityDatas
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/mixins.scss";

.tab {
  @include flex-row;
  flex-wrap: no-wrap;
  height: 0.44rem;
  background: #fff;
  border-bottom: 1px solid #ddd;
}
</style>