<template>
  <div class="detail-wrapper">
    <detail-name :name="name"></detail-name>
    <detail-stars :starNum="starNum" :score="score"></detail-stars>
    <detail-address :address="address"></detail-address>
    <detail-price :price="price"></detail-price>
    <detail-open-date-time :datetime="datetime"></detail-open-date-time>
    <detail-recom :content="content"></detail-recom>
    <detail-comment-keyword
      :commentKeyword="commentKeyword"
    ></detail-comment-keyword>
  </div>
</template>

<script>
import DetailName from './Sub/name';
import DetailStars from './Sub/Stars';
import DetailAddress from './Sub/address';
import DetailPrice from './Sub/Price';
import DetailOpenDateTime from './Sub/OpenDateTime';
import DetailRecom from './Sub/Recom';
import DetailCommentKeyword from './Sub/CommentKeyWord';

export default {
  name: 'DetailFood',
  props: {
    name: String,
    starNum: Number,
    score: String,
    address: String,
    price: Number,
    datetime: String,
    content: String,
    commentKeyword: Array,
  },
  components: {
    DetailName,
    DetailStars,
    DetailAddress,
    DetailPrice,
    DetailOpenDateTime,
    DetailRecom,
    DetailCommentKeyword,
  },
}
</script>

<style>
</style>