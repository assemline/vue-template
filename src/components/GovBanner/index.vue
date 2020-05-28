<template>
  <div class="banner-box">
    <el-carousel class="banner-carousel" :height="height" :arrow="arrow" loop :direction="direction">
      <el-carousel-item v-for="(item,index) in imgList" :key="''+id+index">
        <slot name="content" :item="item">
          <img :src="require('@/assets/home-page/banner/banner-0'+(index+1)+'.png')">
        </slot>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'SmeBanner',
  props: {
    id: String,
    height: {
      type: String,
      default: '400px'
    },
    imgList: Array,
    arrow: String,
    direction: String,
    item: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.banner-box{
    width:100%;
    .banner-carousel{
      width:100%;
    }
    img{
        height: 100%;
        width:100%;
    }
}

</style>
