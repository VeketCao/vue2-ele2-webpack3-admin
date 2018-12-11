/**
 * Created by Veket on 2018/12/7.
 */
import '../../css/base'
import App from '../admin/App/main'
import router from '../admin/Route/main'
import El from '../lib/el/main'
import Lang from '../lang/main'
import '@/icons/main' // icon

El.initElement()
Lang.initLang()

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

if (__PROD__) {
  Vue.config.devtools = false
    Vue.config.productionTip = false
  console.log('[正式环境]')
} else {
  Vue.config.devtools = true
  console.log('[开发环境]')
}
