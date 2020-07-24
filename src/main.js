import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/style.css";

Vue.config.productionTip = false;

Vue.use(require("vue-cookies"));
window.loggedIn = !!Vue.$cookies.get("token");

router.beforeEach((to, from, next) => {
  if (to.path == "/") {
    if (!window.loggedIn) {
      next("/login");
    }

    next();
  }

  if (to.path == "/login") {
    if (!window.loggedIn) {
      next();
    }

    next("/login");
  }

  next();
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
