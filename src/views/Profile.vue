<template>
  <div class="pagecontainer">
    <div v-if="loginToken">
      <div id="profile-container">
        <update-profile> </update-profile>
        <delete-profile> </delete-profile>
        <view-following> </view-following>
      </div>
    </div>
    <div class="loggedout" v-else>
      You shouldn't be here! Please Login or Signup to access this page.
    </div>
  </div>
</template>

<script>
import UpdateProfile from "../components/UpdateProfile.vue";
import DeleteProfile from "../components/DeleteProfile.vue";
import ViewFollowing from "../components/ViewFollowing.vue";
import cookies from "vue-cookies";

export default {
  name: "profile-page",

  components: {
    UpdateProfile,
    DeleteProfile,
    ViewFollowing,
  },

  data() {
    return {
      loginToken: cookies.get("session")
    };
  }
};
</script>

<style lang="scss" scoped>
#profile-container {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  border: 1px solid black;
}

.pagecontainer {
  height: 90vh;
}

@media only screen and (min-width: 1000px) {

#profile-container {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  border: 1px solid black;
  width: 80%;
  margin-left: 10%;
}

.pagecontainer {
  height: 90vh;
}

}
</style>