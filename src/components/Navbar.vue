<template>
  <div id="navbar">
    <router-link to="/login" v-if="!loginToken">Login </router-link>
    <router-link to="/signup" v-if="!loginToken">Signup </router-link>
    <router-link to="/" v-if="loginToken"> Home </router-link>
    <router-link to="/profile" v-if="loginToken"> Profile </router-link>
    <router-link to="/discover" v-if="loginToken"> Discover </router-link>
    <router-link to="/feed" v-if="loginToken"> Feed </router-link>
  </div>
</template>

<script>
export default {
  name: "navigation-bar",

  computed: {
    loginToken() {
      return this.$store.state.loginToken;
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0%;
  padding: 0%;
}

#navbar {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  font-size: 1.5em;
  background-color: rgb(70, 144, 230);
  width: 100%;
  text-align: center;
  align-content: center;
  max-height: 5vh;
  margin-top: 5%;

  a {
    text-decoration: none;
    color: white;
    margin: 5%;
  }
}

@media only screen and (min-width: 1000px) {
  #navbar {
    margin: 0%;
    margin-top: 5%;
    max-height: 7vh;

    a {
      text-decoration: none;
      color: white;
      font-size: 1.5em;
      margin: 5%;
    }
  }
}
</style>