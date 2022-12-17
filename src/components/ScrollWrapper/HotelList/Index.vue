<template>
  <div class="list-wrapper">
    <hotel-list-sub
      v-for="(item, index) of hotelDatas"
      :key="index"
      :data="item"
    ></hotel-list-sub>
  </div>
</template>

<script>
import HotelListSub from "./Sub.vue"

export default {
  name: "HotelList",
  props: {
    hotelDatas: Array,
  },
  components: {
    HotelListSub,
  }
}
</script>

<style lang="scss" scoped>
</style>