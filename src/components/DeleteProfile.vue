<template>
  <div>
    <h1 class="profile-header">Delete account:</h1>
    <p id="password-text" class="profile-text">Password:</p>
    <input
      type="password"
      class="input"
      id="password-delete"
      v-model="password"
    />

    <button class="button" v-if="!showDelete" @click="showDelete = true">
      Delete
    </button>
    <button
      id="delete-profile"
      class="button"
      v-if="showDelete"
      @click="deleteProfile"
    >
      Confirm
    </button>

    <view-followers> </view-followers>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import ViewFollowers from "../components/ViewFollowers.vue";

export default {
  components: {
    ViewFollowers
  },
  data() {
    return {
      password: "",
      loginToken: cookies.get("session"),
      updateStatus: "",
      showDelete: false
    };
  },
  methods: {
    deleteProfile: function() {
      console.log(this.loginToken);
      console.log(this.password);
      this.updateStatus = "Loading";
      axios
        .request({
          url: "https://tweeterest.ml/api/users",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            loginToken: this.loginToken,
            password: this.password
          }
        })
        .then(response => {
          console.log(response);
          document.getElementById("delete-profile").innerText = "Success!";
          this.$router.push("/signup");
          cookies.remove("session", response.data.loginToken);
        })
        .catch(error => {
          console.log(error);
          document.getElementById("delete-profile").innerText = "Error!";
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  margin: 5%;
  width: 90%;
}
.input {
  width: 90%;
  margin: 5%;
}

div {
  height: 50vh;
}

#password-text {
  margin-left: 5%;
}

@media only screen and (min-width: 1000px) {
  .profile-text {
    font-size: 2em;
  }

  .input {
    width: 90%;
    height: 3vh;
    margin: 5%;
  }
}
</style>