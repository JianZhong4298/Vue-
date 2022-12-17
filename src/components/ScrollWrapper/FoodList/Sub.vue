<template>
  <div class="food-item">
    <router-link
      :to="{ path: '/detail', query: { field: 'food', id: data.id } }"
    >
      <div class="img">
        <img class="food-img" :src="data.img" :alt="data.name" />
      </div>

      <div class="info">
        <h1 class="title">{{ data.name }}</h1>
        <p class="stars">
          <stars :starNum="+data.star"></stars>
          <span class="price">￥{{ data.default_price }}/人</span>
        </p>
        <p class="keyword">
          <span class="badge" v-for="(item, i) of data.keyword" :key="i">
            {{ item }}
          </span>
        </p>
        <p class="others">
          <span class="item">{{ data.field }}</span>
          <span class="item">{{ data.area }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import Stars from "../Sub/Stars.vue";
export default {
  name: 'FoodListSub',
  props: {
    data: Object,
  },
  components: {
    Stars,
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/mixins.scss";
.food-item {
  position: relative;
  display: flex;
  border-bottom: 1px solid #ddd;
  background-color: #fff;

  .img {
    width: 1.2rem;
    height: 1.2rem;
    padding: 0.1rem;
    box-sizing: border-box;

    .food-img {
      width: 100%;
      height: 100%;
    }
  }

  .info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0.1rem 0.1rem 0 1.2rem;

    box-sizing: border-box;

    .title {
      @include ellipsis;
      font-size: 0.18rem;
      color: #000;
      line-height: 0.2rem;
    }

    .stars {
      font-size: 0.14rem;
      line-height: 0.3rem;

      .price {
        color: #333;
      }
    }

    .keyword {
      height: 0.3rem;
      line-height: 0.2rem;
      overflow: hidden;

      .badge {
        margin-left: 0.05rem;
        padding: 0 0.05rem;
        color: rgb(190, 158, 77);
        background-color: rgb(251, 244, 228);
        font-size: 0.14rem;
      }
    }

    .others {
      display: flex;
      justify-content: space-between;
      font-size: 0.14rem;
      line-height: 0.25rem;
    }
  }
}
</style>