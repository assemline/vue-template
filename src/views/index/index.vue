<template>
  <div class="web-container">
    <home-head-nav />
    <home-nav-bar />
    <router-view />
    <gov-foot />
  </div>
</template>

<script>
import HomeHeadNav from './components/HomeHeadNav'
import HomeNavBar from './components/HomeNavBar'
import GovFoot from '@/components/GovFoot'
export default {
  components: { HomeHeadNav, GovFoot, HomeNavBar }
}
</script>

<style>

</style>
