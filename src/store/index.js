import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import cookies from "vue-cookies";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    userId: cookies.get("user"),
    allTweets: [],
    followTweets: [],
    loginToken: cookies.get("session"),
  },

  mutations: {
    updateAllTweets: function (state, data) {
      state.allTweets = data
    },

    loginUpdate: function (state, data) {
      state.loginToken = data
    },

    loginDelete: function (state) {
      state.loginToken = undefined
    },

    welcomeUpdate: function(state,data) {
      state.loginToken = data
    },

  },
  actions: {
    getAllTweets: function (state) {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {

          }
        })
        .then(response => {
          console.log(response);
          state.commit("updateAllTweets", response.data)
        })
        .catch(error => {
          console.log(error);
        });
    },
  },

  getters: {

    getUserTweets: function (state) {
      return state.allTweets.filter(function (tweet) { return state.userId == tweet.userId }).reverse(state.createdAt)
    },

    getFollowingTweets: (state) => (follows) => {
      return state.allTweets.filter(function (tweet) {
        for (let i = 0; i < follows.length; i++) {
          if (tweet.userId == follows[i].userId) {
            return true
          }
        } return false
      })
    }
  }
});
