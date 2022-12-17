<template>
  <div class="list">
    <common-header :title="title"></common-header>
    <tab></tab>
    <list-scroll-wrapper> </list-scroll-wrapper>
  </div>
</template>

<script>
import CommonHeader from 'components/Header/Common';
import ListScrollWrapper from "components/ScrollWrapper/List.vue";
import Tab from 'components/Tab';

import { mapState } from 'vuex';
import fieldDatas from 'data/fields';

export default {
  name: 'List',
  components: {
    CommonHeader,
    ListScrollWrapper,
    Tab,
  },
  computed: {
    ...mapState(['field']),
    title() {
      if (this.field) {
        return fieldDatas.filter(item => item.field === this.field)[0].iconText + '列表';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>