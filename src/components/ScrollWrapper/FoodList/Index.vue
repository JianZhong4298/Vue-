<template>
  <div class="list-wrapper">
    <food-list-sub
      v-for="(item, index) of foodDatas"
      :data="item"
      :key="index"
    ></food-list-sub>
  </div>
</template>

<script> 
import FoodListSub from './Sub';

export default {
  name: "FoodList",
  props: {
    foodDatas: Array,
  },
  components: {
    FoodListSub
  },
}

</script>

<style lang="scss" scoped>
</style>