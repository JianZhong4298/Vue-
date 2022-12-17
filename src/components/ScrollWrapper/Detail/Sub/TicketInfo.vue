<template>
  <div class="ticket-info-bd">
    <detail-title icon="icon-intro" title="购票信息"></detail-title>
    <div class="ticketInfo">
      {{ ticketInfo }}
    </div>
  </div>
</template>

<script>
import DetailTitle from './Title.vue';
export default {
  name: 'DetailIntro',
  components: {
    DetailTitle,
  },
  props: {
    ticketInfo: String,
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/mixins.scss";

.ticket-info-bd {
  @include flex-column;
  background: #fff;
  margin-top: 0.1rem;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .ticketInfo {
    padding: 0.1rem 0.15rem;
    font-size: 0.14rem;
    line-height: 0.2rem;
    text-indent: 2em;
    box-sizing: border-box;
  }
}
</style>