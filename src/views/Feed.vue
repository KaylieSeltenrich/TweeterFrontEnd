<template>
  <div class="pagecontainer">
    <div v-if="loginToken">
      <following-tweets> </following-tweets>
    </div>
    <div class="loggedout" v-else>
      You shouldn't be here! Please Login or Signup to access this page.
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import FollowingTweets from "../components/FollowingTweets.vue";

export default {
  name: "feed-page",
  components: {
    FollowingTweets
  },

  data() {
    return {
      loginToken: cookies.get("session")
    };
  }
};
</script>

<style lang="scss" scoped>
</style>