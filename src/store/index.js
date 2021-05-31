import { createStore } from "vuex";

export default createStore({
  state: {
    hostLink: "http://xwash.one/",
    apiLink: process.env.NODE_ENV=="production"?"http://xwash.one/api/":"http://localhost:8082/xWash_war/api/",
    feedbackLink : "http://xwash.one/feedback"
  },
  mutations: {},
  actions: {},
  modules: {},
});
