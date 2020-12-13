import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import * as bootstrap from 'bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(bootstrap)
library.add(faSpinner)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueLodash, { name: 'custom' , lodash: lodash })
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
