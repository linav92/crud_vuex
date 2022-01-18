import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    posts: [],
    loading: true
  },
  mutations: {
    addData(state, data) {
      state.posts = data;
    },

    changeLoading(state, data) {
      state.loading = data;
    }
  },
  actions: {
    getPost(context) {
      context.commit("changeLoading", true);

      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          console.log("Actualizando lista de posts");
          context.commit("addData", response.data);
          setTimeout(() => {
            context.commit("changeLoading", false);
          }, 2000);
        });
    }
  },
  modules: {}
 
});

export default store;