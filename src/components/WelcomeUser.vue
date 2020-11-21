<template>
  <div>
    <div id="welcome-message" v-if="loginToken">Welcome, {{ user }}</div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  data() {
    return {
      user: "",
    };
  },
   computed: {
    loginToken() {
      return this.$store.state.loginToken 
    }
  },
  mounted: function() {
    this.getUsername();
  },
  methods: {
    getUsername: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/users",
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
          this.$store.commit("welcomeUpdate",this.loginToken);
          this.user = response.data[0].username;
          
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>


<style lang="scss" scoped>
#welcome-message {
  text-align: center;
  float: left;
  font-size: 1.3em;
  font-weight: bold;
  margin-top: 5%;
  margin-left: 3%;
}


@media only screen and (min-width: 700px) {
  #welcome-message {
  margin-top: 7%;
  margin-left: 7%;
}
}

//Desktop Size
@media only screen and (min-width: 1000px) {
#welcome-message {
 position: relative;
 left: 30%;
 width: 50%;
 font-size: 2em;
 margin: 0;
 margin-top: 1%;

}
  
}
</style>