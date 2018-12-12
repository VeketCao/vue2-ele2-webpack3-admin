/**
 * Created by Veket on 2018/12/7.
 */
import '../../css/base'
import App from '../admin/App/main'
import router from '../admin/Route/main'
import El from '../lib/el/main'
import i18n from '../lang/main'
import '@/icons/main' // icon

/********mock*********************/
//import Mock from '../mock/main';
/**********************************/

El.initElement(i18n)
new Vue({
    el:'#app',
    i18n,
    router,
    render: h => h(App)
})

Vue.config.productionTip = false