import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

import App from '../h5_app/App/main'

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})
