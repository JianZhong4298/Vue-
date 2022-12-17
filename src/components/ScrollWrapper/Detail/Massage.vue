<template>
  <div class="massage-wrapper">
    <detail-name :name="name"></detail-name>
    <detail-stars :starNum="starNum" :score="score"></detail-stars>
    <detail-address :address="address"></detail-address>
    <detail-price :price="price"></detail-price>
    <detail-open-date-time :datetime="datetime"></detail-open-date-time>
    <detail-comment-keyword
      :commentKeyword="commentKeyword"
    ></detail-comment-keyword>
    <detail-service :service="service"></detail-service>
  </div>
</template>

<script>
import DetailName from './Sub/name';
import DetailStars from './Sub/Stars';
import DetailAddress from './Sub/address';
import DetailPrice from './Sub/Price';
import DetailOpenDateTime from './Sub/OpenDateTime';
import DetailService from './Sub/Service.vue';
import DetailCommentKeyword from './Sub/CommentKeyWord';

export default {
  name: 'DetailMassage',
  props: {
    name: String,
    starNum: Number,
    score: String,
    address: String,
    price: Number,
    datetime: String,
    service: Object,
    commentKeyword: Array,
  },
  components: {
    DetailName,
    DetailStars,
    DetailAddress,
    DetailPrice,
    DetailOpenDateTime,
    DetailService,
    DetailCommentKeyword,
  },
}
</script>

<style>
</style>