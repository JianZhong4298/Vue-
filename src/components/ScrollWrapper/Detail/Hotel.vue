<template>
  <div class="hotel-wrapper">
    <detail-name :name="name"></detail-name>
    <detail-stars :starNum="starNum" :score="score"></detail-stars>
    <detail-address :address="address"></detail-address>
    <detail-price :price="price"></detail-price>
    <detail-service :service="service"></detail-service>
  </div>
</template>

<script>
import DetailName from './Sub/name';
import DetailStars from './Sub/Stars';
import DetailAddress from './Sub/address';
import DetailPrice from './Sub/Price';
import DetailService from './Sub/Service'

export default {
  name: 'DetailFood',
  props: {
    name: String,
    starNum: Number,
    score: String,
    address: String,
    price: Number,
    service: Object,
  },
  components: {
    DetailName,
    DetailStars,
    DetailAddress,
    DetailPrice,
    DetailService,
  },
}
</script>

<style>
</style>