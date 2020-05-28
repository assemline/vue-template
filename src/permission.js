import router from './router'
import { constantRoutes } from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

// const whiteList = ['/login'] // no redirect whitelist
// 白名单 不需要重定向
const whiteList = []
getWhiteList(constantRoutes, whiteList)
function getWhiteList(routerList, target) {
  routerList.forEach(router => {
    if (router.children) {
      getWhiteList(router.children, target)
      target.push(router.path)
    } else {
      target.push(router.path)
    }
  })
}

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      const hasGetUserInfo = store.getters.name
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          // get user info
          await store.dispatch('user/getInfo')

          next()
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) === -1) {
      // in the free login whitelist, go directly
      next(`/login?redirect=${to.path}`)
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
