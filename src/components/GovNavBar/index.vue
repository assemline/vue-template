<template>
  <div class="nav-bar-container">
    <el-menu :default-active="$route.path" class="" mode="horizontal">
      <el-menu-item v-for="item in navList" :key="item.name+item.path" :index="item.path">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    navList: {
      type: Array,
      default: () => {
        return [{
          name: '首页',
          path: '/home-page'
        }, {
          name: '新闻资讯',
          path: '/news'
        }, {
          name: '平台活动',
          path: '/activity'
        }]
      }
    }
  }
}
</script>
<style lang="scss">
.nav-bar-container{
  .el-menu{
    border-bottom: none;
  }
}
</style>

<style lang="scss" scoped>

</style>
