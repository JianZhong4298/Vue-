<template>
  <div class="list-wrapper">
    <massage-list-sub
      :data="item"
      v-for="(item, index) of massageDatas"
      :key="index"
    ></massage-list-sub>
  </div>
</template>

<script>
import MassageListSub from './Sub.vue';

export default {
  name: 'MassageList',
  components: {
    MassageListSub,
  },
  props: {
    massageDatas: Array,
  }
}
</script>

<style lang="scss" scoped>
</style>