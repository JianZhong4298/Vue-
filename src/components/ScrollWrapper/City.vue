<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <city-list></city-list>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll';
import CityList from './CityList/Index'
export default {
  name: 'CityScrollWrapper',
  components: {
    CityList,
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper);
  }
}
</script>

<style>
</style>