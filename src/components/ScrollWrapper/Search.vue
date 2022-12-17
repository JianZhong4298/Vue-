<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <no-data-tip :noDataTipShow="noDataTipShow"> </no-data-tip>

      <div v-if="data.viewDatas && data.viewDatas.length > 0">
        <home-title title="景点结果:"></home-title>
        <view-list :viewDatas="data.viewDatas"></view-list>
      </div>

      <div v-if="data.foodDatas && data.foodDatas.length > 0">
        <home-title title="美食结果:"></home-title>
        <food-list :foodDatas="data.foodDatas"></food-list>
      </div>

      <div v-if="data.massageDatas && data.massageDatas.length > 0">
        <home-title title="按摩结果:"></home-title>
        <massage-list :massageDatas="data.massageDatas"></massage-list>
      </div>

      <div v-if="data.ktvDatas && data.ktvDatas.length > 0">
        <home-title title="KTV结果:"></home-title>
        <ktv-list :ktvDatas="data.ktvDatas"></ktv-list>
      </div>

      <div v-if="data.hotelDatas && data.hotelDatas.length > 0">
        <home-title title="宾馆结果:"></home-title>
        <hotel-list :hotelDatas="data.hotelDatas"></hotel-list>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll';

import HomeTitle from './Sub/HomeTitle';
import ViewList from './ViewList/Index';
import FoodList from './FoodList/Index';
import HotelList from './HotelList/Index';
import MassageList from './MassageList/Index';
import KtvList from './KtvList/Index';

import NoDataTip from './Sub/NoDataTip';

export default {
  name: 'SearchScrollWrapper',
  components: {
    HomeTitle,
    ViewList,
    FoodList,
    HotelList,
    MassageList,
    KtvList,
    NoDataTip
  },
  props: {
    data: Object,
    noDataTipShow: Boolean,
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper);
  },
}
</script>

<style lang="scss" scoped>
</style>