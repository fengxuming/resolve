import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import route from './routes/resolve-router';
import Resource from 'vue-resource';
// import ElementUI from 'element-ui';
import VueLocalStorage from 'vue-localstorage'
// import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;


const router = new VueRouter({
  routes:route
})

Vue.use(VueRouter);
Vue.use(Resource);
// Vue.use(ElementUI);
Vue.use(VueLocalStorage)

Vue.http.headers.common['token'] = Vue.localStorage.get("token","");
Vue.http.options.root = process.env.VUE_APP_HTTP_ROOT;


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
