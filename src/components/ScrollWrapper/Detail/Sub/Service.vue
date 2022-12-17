<template>
  <div class="service-bd">
    <detail-title title="商家服务" icon="icon-service"></detail-title>
    <div class="service-content">
      <p>停车场:{{ service.parking ? "有" : "无" }}</p>
      <p>WIFI:{{ service.wifi ? "有" : "无" }}</p>
    </div>
  </div>
</template>

<script>
import DetailTitle from './Title.vue';
export default {
  name: 'DetailService',
  props: {
    service: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  components: {
    DetailTitle,
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/mixins.scss";

.service-bd {
  @include flex-column;
  background: #fff;
  margin-top: 0.1rem;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .service-content {
    padding: 0.1rem 0.15rem;
    font-size: 0.14rem;
    line-height: 0.2rem;
    box-sizing: border-box;
  }
}
</style>