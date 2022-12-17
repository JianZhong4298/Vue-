<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <detail-swiper :picDatas="detailData.pics"></detail-swiper>
      <div v-if="!errorShow">
        <detail-food
          v-if="field === 'food'"
          :name="detailData.name"
          :starNum="+detailData.star"
          :score="detailData.score"
          :address="detailData.address"
          :price="+detailData.default_price"
          :datetime="detailData.open_datetime"
          :content="detailData.recom"
          :commentKeyword="detailData.comment_keyword"
        ></detail-food>

        <detail-view
          v-if="field === 'view'"
          :name="detailData.name"
          :starNum="+detailData.star"
          :score="detailData.score"
          :address="detailData.address"
          :price="+detailData.default_price"
          :datetime="detailData.open_datetime"
          :tip="detailData.tip"
          :intro="detailData.intro"
          :ticketInfo="detailData.ticket_info"
        ></detail-view>

        <detail-hotel
          v-if="field === 'hotel'"
          :name="detailData.name"
          :starNum="+detailData.star"
          :score="detailData.score"
          :address="detailData.address"
          :price="+detailData.default_price"
          :service="detailData.service"
        ></detail-hotel>

        <detail-massage
          v-if="field === 'massage'"
          :name="detailData.name"
          :starNum="+detailData.star"
          :score="detailData.score"
          :address="detailData.address"
          :price="+detailData.default_price"
          :datetime="detailData.open_datetime"
          :service="detailData.service"
          :commentKeyword="detailData.comment_keyword"
        ></detail-massage>

        <detail-ktv
          v-if="field === 'ktv'"
          :name="detailData.name"
          :starNum="+detailData.star"
          :score="detailData.score"
          :address="detailData.address"
          :price="+detailData.default_price"
          :service="detailData.service"
        ></detail-ktv>
      </div>
    </div>
    <error :errorShow="errorShow"></error>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import DetailSwiper from './Sub/Swiper';
import DetailFood from './Detail/Food';
import DetailView from './Detail/View';
import DetailHotel from './Detail/Hotel';
import DetailMassage from './Detail/Massage.vue';
import DetailKtv from './Detail/Ktv.vue';

import { DetailModel } from "models/detail";
import tools from 'utils/tools';
import Error from './Sub/Error';

export default {
  name: 'DetailScrollWrapper',
  components: {
    DetailSwiper,
    DetailFood,
    DetailView,
    DetailHotel,
    DetailMassage,
    DetailKtv,
    Error,
  },
  mounted() {
    this.field = this.$route.query.field;
    this.id = this.$route.query.id;
    this.scroll = new BetterScroll(this.$refs.wrapper);
    this.getDetail(this.field, this.id);
  },
  data() {
    return {
      field: '',
      id: 0,
      errorShow: false,
      detailData: {
      },
      currentField: '',
      currentId: 0,
    }
  },
  activated() {
    this.field = this.$route.query.field;
    this.id = this.$route.query.id;
    if ((this.currentId !== this.id) || (this.currentField !== this.field)) {
      this.currentId = this.id;
      this.currentField = this.field;
      this.getDetail(this.field, this.id);
    }
  },
  methods: {
    getDetail(field, id) {
      const detailModel = new DetailModel();
      detailModel.getDetail(field, id).then((res) => {
        if (res && res.status === 0) {
          this.errorShow = false;
          const data = res.data;

          data.pics && (data.pics = tools.jsonToArr(data.pics));
          data.comment_keyword && (data.comment_keyword = tools.strToArr(data.comment_keyword, ','));
          data.recom && (data.recom = tools.replaceToSpace(data.recom));
          data.service && (data.service = tools.jsonToArr(data.service));
          this.detailData = data;
        } else {
          this.errorShow = true;
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>