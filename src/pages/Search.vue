<template>
  <div class="search">
    <common-header :title="title"></common-header>
    <search-input @onSearch="onSearch"></search-input>
    <search-scroll-wrapper
      :data="data"
      :noDataTipShow="!noDataTipShow"
    ></search-scroll-wrapper>
  </div>
</template>

<script>
import tools from 'utils/tools';

import CommonHeader from 'components/Header/Common';
import SearchInput from 'components/SearchInput/Index.vue';
import SearchScrollWrapper from 'components/ScrollWrapper/Search.vue'

export default {
  name: 'Search',
  components: {
    CommonHeader,
    SearchInput,
    SearchScrollWrapper,
  },
  data() {
    return {
      title: '商家搜索',
      data: {

      },
      noDataTipShow: 0,
    }
  },
  methods: {
    onSearch(res) {
      if (res && res.status === 0) {
        this.noDataTipShow = 0;
        const data = res.data;
        data.foodDatas = tools.formatJSON(res.data.foodDatas, 'keyword');
        this.data = data;


        for (let item in data) {
          this.noDataTipShow += data[item].length;
        }

      } else {
        this.data = res;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
</style>