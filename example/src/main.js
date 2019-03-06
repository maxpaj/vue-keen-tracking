import "es6-promise/auto";
import Vue from "vue";
import App from "./App.vue";
import VueKeen from "../../src/";
import Vuex from "vuex";
import VueRouter from "vue-router";

const config = require("./keen-config.json");

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/"
    },
    {
      path: "/page1"
    },
    {
      path: "/page2"
    }
  ]
});

const store = new Vuex.Store({
  actions: {
    increment: ({ commit }) => {
      commit("increment");
    }
  },
  state: {
    incremented: 0
  },
  mutations: {
    increment(state) {
      state.incremented++;
    }
  },
  getters: {
    incremented(state) {
      return state.incremented;
    }
  }
});

Vue.use(VueKeen, {
  projectId: config.projectId,
  writeKey: config.writeKey,
  autoTracking: true,
  trackVuex: {
    store,
    mutations: true,
    actions: true
  },
  trackRoutes: {
    router
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
