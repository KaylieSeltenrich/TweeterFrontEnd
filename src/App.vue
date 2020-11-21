<template>
  <div id="app">
    <page-header> </page-header>
    <div id="header-container">
      <welcome-user v-if="loginToken"> </welcome-user>
      <logout v-if="loginToken"> </logout>
      <navbar> </navbar>
    </div>
    <router-view />

    <div id="footer">
      Website by Kaylie Seltenrich
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import PageHeader from "./components/Header.vue";
import WelcomeUser from "./components/WelcomeUser.vue";
import Logout from "./components/Logout.vue";
import cookies from "vue-cookies";

export default {
  name: "app",
  components: {
    Navbar,
    PageHeader,
    Logout,
    WelcomeUser
  },

  data() {
    return {
      loginToken: cookies.get("session")
    };
  }
};
</script>

<style lang="scss">
* {
  margin: 0%;
  padding: 0%;
}

#footer {
  display: grid;
  grid-template-columns: 1fr;
  align-content: center;
  position: fixed;
  text-align: center;
  bottom: 0;
  width: 100%;
  height: 5vh;
  font-size: 1.5em;
  background-color: rgb(70, 144, 230);
  color: white;
}

.button {
  padding: 2%;
  color: black;
  font-weight: bold;
}
.header {
  font-weight: bolder;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: black;
  font-size: 1.3em;
  margin-bottom: 3%;
}

.pagecontainer {
  margin-top: 2vh;
  margin-bottom: 8vh;
  margin-left: 3vh;
  margin-right: 3vh;
  min-height: 90vh;
}

.container {
  height: 100vh;
  background-color: white;
}

.loggedout {
  position: fixed;
  padding: 5%;
  bottom: 40%;
  font-size: 1.5em;
  text-align: center;
}

#header-container {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
}

.login-and-signup {
  text-align: center;

  p {
    font-size: 1.5em;
    margin: 2vh;
  }

  h2 {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 1.3em;
    margin-top: 5vh;
    margin-left: 35vw;
    margin-right: 35vw;
    padding: 2%;
    border: 1px solid black;
  }
}

.tweets-container {
  border: 1px solid black;
  margin-bottom: 5%;
}

.tweet-container {
  margin-left: 5%;
  margin-right: 5%;
}

.tweet-username {
  font-size: 1.2em;
  font-family: "Spartan", sans-serif;
  margin-bottom: 5%;
  font-weight: bold;
}

.tweet-content {
  font-size: 1.2em;
  margin-bottom: 5%;
}

.like-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: right;
  height: 5vh;
}

.comment-container {
  width: 85%;
  border: 1px solid black;
  overflow-x: scroll;
  margin: 5%;
}

.comment {
  width: 10%;
  position: relative;
  bottom: 7.5vh;
}

.input {
  width: 35vw;
}

.profile-header {
  font-weight: bolder;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: black;
  font-size: 1.3em;
  margin-bottom: 3%;
  margin-top: 5%;
  margin-left: 5%;
}


//Desktop Size

@media only screen and (min-width: 1000px) {
 
  .profile-header {
    font-size: 2em;
    text-align: center;
  }

  .header {
    font-size: 2em;
    text-align: center;
  }

  .loggedout {
    position: fixed;
    font-size: 2.5em;
    text-align: center;
    width: 90%;
    margin: 0;
  }

  .button {
    padding: 2%;
    color: black;
    font-weight: bold;
    font-size: 1.2em;
  }

  .tweet-content {
    font-size: 1.8em;
    text-align: center;
  }

  .tweet-username {
    font-size: 2.3em;
  }

  .date-posted {
    font-size: 1.3em;
  }
}
</style>
