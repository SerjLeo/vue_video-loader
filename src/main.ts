import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Vuelidate from 'vuelidate'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
