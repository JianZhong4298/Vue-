<template>
  <div class="list-wrapper">
    <current-city></current-city>
    <city-list-sub
      v-for="(item, index) of cityList"
      :cityInfo="item"
      :key="index"
    >
    </city-list-sub>
  </div>
</template>

<script>
import CityListSub from "./Sub.vue"
import CurrentCity from './CurrentCity.vue';
import cityList from 'data/cities';

export default {
  data() {
    return {
      cityList,
    }
  },
  components: {
    CurrentCity,
    CityListSub,
  }
}
</script>

<style lang="scss" scoped>
</style>