<template>
  <div class="home-nav-bar-container">
    <div class="home-nav-bar-content">
      <gov-nav-bar />
    </div>
  </div>
</template>

<script>
import GovNavBar from '@/components/GovNavBar'
export default {
  components: { GovNavBar }
}
</script>

<style lang="scss" scoped>
.home-nav-bar-container{
  border-bottom: 1px solid #eee;
  .home-nav-bar-content{
    width:1200px;
    margin:0 auto;
  }
}
</style>
