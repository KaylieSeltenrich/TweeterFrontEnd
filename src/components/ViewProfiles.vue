<template>
  <div>
    <h2 class="header">
      Discover Profiles
   </h2>
    <div id="profile-container">
      <div id="profileuser-container" v-for="user in users" :key="user.userId">
        {{ user.username }} <br />
        {{ user.email }} <br />
        {{ user.birthdate }} <br />
        {{ user.bio }} <br />
        <button class="button" @click="followUser(user.userId)">
          Follow User
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "view-profiles",

  data() {
    return {
      users: [],

    };
  },
  mounted: function() {
    this.showProfiles();
  },
  methods: {
    showProfiles: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/users",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {}
        })
        .then(response => {
          console.log(response.data);
          this.users = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    followUser: function(userId) {
      axios
        .request({
          url: "https://tweeterest.ml/api/follows",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            loginToken: cookies.get("session"),
            followId: userId
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
#profile-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: auto;
  max-height: 40vh;
  overflow: scroll;
}
#profileuser-container {
  display: grid;
  grid-template-rows: 1fr;
  margin: 3%;
  font-size: 0.9em;
  border: 1px solid black;
  padding: 5%;
}

@media only screen and (min-width: 1000px) {
  #profileuser-container {
    margin: 3%;
    font-size: 1.5em;
  }

  .button {
    width: 50%;
    margin-top: 5%;
    font-size: 0.7em;
  }

  #discover-profiles {
    margin-left: 25%;
  }
}
</style>