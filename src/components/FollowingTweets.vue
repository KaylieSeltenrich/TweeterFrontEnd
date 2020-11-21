<template>
  <div class="pagecontainer">
    <h1 class="header">People you follow Tweets:</h1>
    <follow-tweets v-if="ready" :tweets="tweets"> </follow-tweets>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import FollowTweets from "../components/FollowTweets.vue";

export default {
  name: "following-tweets",
  components: {
    FollowTweets
  },
  data() {
    return {
      userId: cookies.get("user"),
      follows: [],
      tweets: [],
      ready: false
    };
  },
  mounted: function() {
    this.getFollowingTweets();
  },
  methods: {
    getTweets: function() {
      this.$store.dispatch("getAllTweets");
    },

    getFollowingTweets: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/follows",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          params: {
            userId: cookies.get("user")
          }
        })
        .then(response => {
          console.log(response.data);
          this.follows = response.data;
          for (let i = 0; i < this.follows.length; i++) {
            console.log(i);
            axios
              .request({
                url: "https://tweeterest.ml/api/tweets",
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
                },
                params: {
                  userId: this.follows[i].userId
                }
              })
              .then(response => {
                this.tweets = this.tweets.concat(response.data);
                this.ready = true;
              });
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 1000px) {
  .header{
    margin-top: 5%;
  }
}
</style>