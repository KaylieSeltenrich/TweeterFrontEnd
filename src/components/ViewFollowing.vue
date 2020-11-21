<template>
  <div id="viewfollowing-container">
    <h1 class="profile-header">
      People you Follow:
    </h1>
    <div id="follow-container" v-for="follow in follows" :key="follow.userId">
      {{ follow.username }} <br />
      <button class="button" @click="unFollow(follow.userId)">Un-Follow</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "view-following",
  mounted: function() {
    this.viewFollowing();
  },
  data() {
    return {
      userId: "",
      follows: [],
      followers: []
    };
  },
  methods: {
    viewFollowing: function() {
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
        })
        .catch(error => {
          console.log(error);
        });
    },

    unFollow: function(followId) {
      console.log(followId);
      axios
        .request({
          url: "https://tweeterest.ml/api/follows",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            loginToken: cookies.get("session"),
            followId: followId
          }
        })
        .then(response => {
          console.log(response.data);
         
        })
        .catch(error => {
          console.log(error);
        
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#viewfollowing-container {
  overflow-y: scroll;
  height: 30vh;
  width: 100%;
  grid-column: span 2;
  border-top: 1px solid black;
  margin-top: 5%;
  margin-bottom: 8vh;
}
#follow-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 5%;
  margin-right: 5%;
  margin-left: 5%;
}


@media only screen and (min-width: 1000px) {
 #follow-container {
  font-size: 2em;
}
.button {
  font-size: 0.8em;
}

#viewfollowing-container {
  overflow-y: scroll;
  width: 100%;
  height: 50vh;
  grid-column: span 1;
  border: none;
 margin-left: 2%;
}

}
</style>