import { createStore } from "vuex";

export default createStore({
  state: {
    hostLink: "https://xwash.one/",
    apiLink: process.env.NODE_ENV=="production"?"https://xwash.one/api/":"http://localhost:8082/xWash_war/api/",
    feedbackLink : "https://xwash.one/feedback"
  },
  mutations: {},
  actions: {},
  modules: {},
});
