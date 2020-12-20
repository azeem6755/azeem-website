import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLodash from 'vue-lodash'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import lodash from 'lodash'
import * as bootstrap from 'bootstrap'

library.add(fas, fab)
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(bootstrap)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueLodash, { name: 'custom' , lodash: lodash })
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
