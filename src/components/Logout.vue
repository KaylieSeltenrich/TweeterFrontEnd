<template>
  <div>
    <button class="button" v-if="loginToken" id="log-out" @click="logOut">
      Log Out
    </button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "logout-user",

  computed: {
    loginToken() {
      return this.$store.state.loginToken;
    }
  },

  methods: {
    logOut: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/login",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            loginToken: this.loginToken
          }
        })
        .then(response => {
          console.log(response);
          cookies.remove("session");
          cookies.remove("user");
          this.$store.commit("loginDelete");
          this.$router.push("/login");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#log-out {
  padding: 2%;
  float: right;
  font-size: 0.9em;
  margin: 3%;
}

@media only screen and (min-width: 1000px) {
 
  #log-out {
  margin: 0;
  margin-bottom: 0.5%;
  margin-right: 5%;
  margin-top: 0.5%;
    font-size: 1.2em;
    padding: 1%;
    width: 20%;
   
  }

}
</style>