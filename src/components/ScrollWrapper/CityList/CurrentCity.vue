<template>
  <div class="current-city">
    <span>当前城市:</span>
    <router-link :to="{ name: path }">
      <span class="iconfont icon-positioning"></span>
      <span class="city">{{ cityName }}</span>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "CurrentCity",
  data() {
    return {
      path: 'Index'
    }
  },
  computed: {
    ...mapState(['cityName'])
  },
}
</script>

<style lang="scss" scoped>
@import "~styles/mixins.scss";
@import "~styles/variables.scss";

.current-city {
  @include flex-row;
  align-items: center;
  height: 0.5rem;
  padding-left: 0.15rem;
  background: #fff;
  border-bottom: 1px solid #ddd;
  font-size: 0.16rem;

  .iconfont {
    padding: 0 0.05rem;
    vertical-align: 0.005rem;
    color: $defaultBgColor;
  }

  .city {
    line-height: 1rem;
  }
}
</style>