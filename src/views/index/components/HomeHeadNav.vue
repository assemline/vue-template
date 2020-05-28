<template>
  <div class="head-nav-container">
    <div class="head-nav-content clearfix">
      <ul class="head-nav-list f-right">
        <li v-for="item in navList" :key="item.name+item.path" class="head-nav-item">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    navList: {
      type: Array,
      default: () => {
        return [{
          name: '登录',
          path: '/login'
        }, {
          name: '注册',
          path: '/login'
        }, {
          name: '帮助中心',
          path: '/login'
        }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.head-nav-container{
  background:#eee;
  .head-nav-content{
    width:1200px;
    margin:0 auto;
    .head-nav-list{
      margin-block-start: 0.5em;
      margin-block-end: 0.5em;
      .head-nav-item{
        display: inline-block;
        padding:0 10px;
        border-right:1px solid #8a8585;
        &:last-of-type{
          border-right: none;
        }
      }
    }
  }
}

</style>
