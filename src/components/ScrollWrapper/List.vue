<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="sroll-content">
      <view-list
        v-if="field === 'view'"
        :viewDatas="listDatas[cityId]"
      ></view-list>
      <hotel-list
        v-if="field === 'hotel'"
        :hotelDatas="listDatas[cityId]"
      ></hotel-list>
      <food-list
        v-if="field === 'food'"
        :foodDatas="listDatas[cityId]"
      ></food-list>
      <massage-list
        v-if="field === 'massage'"
        :massageDatas="listDatas[cityId]"
      ></massage-list>
      <ktv-list v-if="field === 'ktv'" :ktvDatas="listDatas[cityId]"></ktv-list>

      <loading :loadingShow="loadingShow"> </loading>
      <error :errorShow="errorShow"></error>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll';
import { mapState } from 'vuex';
import { ListModel } from 'models/list';
import tools from 'utils/tools';
import Loading from 'components/ScrollWrapper/Sub/Loading';
import Error from 'components/ScrollWrapper/Sub/Error';


import ViewList from './ViewList/Index';
import FoodList from './FoodList/Index';
import HotelList from './HotelList/Index';
import MassageList from './MassageList/Index';
import KtvList from './KtvList/Index';


export default {
  name: 'ListScrollWrapper',
  components: {
    ViewList,
    FoodList,
    HotelList,
    MassageList,
    KtvList,
    Loading,
    Error,
  },
  data() {
    return {
      listDatas: [],
      errorShow: false,
      loadingShow: true,
    }
  },
  computed: {
    ...mapState(['cityId', 'field'])
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper);
    this.getListDatas(this.cityId, this.field)
  },
  methods: {
    getListDatas(cityId, field) {
      if (!this.listDatas[cityId]) {
        this.loadingShow = true;
        this.errorShow = false;
        const listModel = new ListModel();
        listModel.getListDatas(cityId, field).then(res => {
          if (res && res.status === 0) {
            this.listDatas[cityId] = tools.formatJSON(res.data, 'keyword');
            this.loadingShow = false;
          } else {
            this.loadingShow = false;
            this.errorShow = true;
          }
        })
      }
    }
  },
  watch: {
    cityId() {
      this.getListDatas(this.cityId, this.field);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>