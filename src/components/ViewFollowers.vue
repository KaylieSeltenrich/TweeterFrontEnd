<template>
  <div id="viewfollowers-container">
    <h1 class="profile-header">Your Followers:</h1>
    <div id= "followers-container" v-for="follower in followers" :key="follower.userId">
      {{ follower.username }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "view-followers",
  data() {
    return {
      userId: "",
      followers: []
    };
  },
  mounted: function() {
    this.viewFollowers();
  },
  methods: {
    viewFollowers: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/followers",
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
          this.followers = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#viewfollowers-container {
    overflow-y: scroll;
    max-height: 30vh;
    margin-top: 10%;
}

#followers-container {
    margin-left: 5%;
}

.header {
    margin-left: 5%;
}

@media only screen and (min-width: 1000px) {
#viewfollowers-container {
    overflow-y: scroll;
    max-height: 50vh;
    margin-top: 10%;
    font-size: 2em;
}
.profile-header {
  font-size: 1em;
}
}
</style>