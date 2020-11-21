<template>
  <div class="pagecontainer">
    <div v-if="loginToken">
      <div id="button-container">
        <view-profiles v-if="!showCreateTweet"> </view-profiles>
        <button class="button" v-if="!showCreateTweet" @click="showCreateTweet = !showCreateTweet">
          Create a Tweet
        </button>
        <button class="button" id="return" v-if="showCreateTweet" @click="showCreateTweet = !showCreateTweet">
          Return
          </button>
      </div>
      <div v-if="showCreateTweet == true" id="create-tweet-container">
        <create-tweets> </create-tweets>
      </div>

      <all-tweets> </all-tweets>
    </div>
    <div class="loggedout" v-else>
      You shouldn't be here! Please Login or Signup to access this page.
    </div>
  </div>
</template>

<script>
import ViewProfiles from "../components/ViewProfiles.vue";
import AllTweets from "../components/AllTweets.vue";
import CreateTweets from "../components/CreateTweets.vue";
import cookies from "vue-cookies";

export default {
  name: "discover-page",

  components: {
    ViewProfiles,
    AllTweets,
    CreateTweets
  },

  data() {
    return {
      loginToken: cookies.get("session"),
      showCreateTweet: false
    };
  },
};
</script>

<style lang="scss" scoped>

.button {
    width: 50%;
    margin-left: 25%;
    height: 5vh;
    margin-top: 10%;
  }
  #return {
    margin-top: 0;
  }

@media only screen and (min-width: 1000px) {
  #button-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

  .button {
    width: 50%;
    margin-left: 20%;
    height: 5vh;
    margin-top: 20%;
    padding: 0%;
  }
  #return {
    margin-left: 75%;
  }
}
</style>