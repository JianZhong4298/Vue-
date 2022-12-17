<template>
  <div class="price-bd">
    <span class="iconfont icon-price"></span>
    <span class="price-text">￥{{ price || 0 }}元起</span>
  </div>
</template>

<script>
export default {
  name: 'DetailPrice',
  props: {
    price: {
      type: Number,
      default() {
        return 0;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/variables.scss";
.price-bd {
  display: flex;
  height: 0.44rem;
  padding: 0.03rem 0.15rem 0;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  line-height: 0.39rem;
  box-sizing: border-box;
}

.icon-price {
  font-size: 0.18rem;
  color: #000;
}

.price-text {
  font-size: 0.16rem;
  margin-left: 0.1rem;
  color: $defaultOrange;
}
</style>