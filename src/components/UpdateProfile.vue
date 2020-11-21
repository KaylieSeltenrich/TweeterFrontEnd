<template>
  <div id="updateprofile-container">
    <h1 class="profile-header">Update Profile:</h1>
    <p class="profile-text">Email:</p>
    <input type="text" class="input" id="email-input" v-model="email" />
    <p class="profile-text">Username:</p>
    <input type="text" class="input" id="username-input" v-model="username" />
    <p class="profile-text">Password:</p>
    <input
      type="password"
      class="input"
      id="password-input"
      v-model="password"
    />
    <p class="profile-text">Bio:</p>
    <textarea id="bio-input" class="input" v-model="bio"></textarea>
    <p class="profile-text">Birthday:</p>
    <input type="text" class="input" id="birthdate-input" placeholder="YYYY/MM/DD" v-model="birthdate" />
    <br />
    <button id="update-profile" class="button" @click="updateProfile">Update</button>
  
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  data() {
    return {
      email: "",
      username: "",
      password: "",
      bio: "",
      birthdate: "",
      updateStatus: "",
      loginToken: cookies.get("session")
    };
  },
  methods: {
    updateProfile: function() {
      
      axios
        .request({
          url: "https://tweeterest.ml/api/users",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            email: this.email,
            username: this.username,
            password: this.password,
            bio: this.bio,
            birthdate: this.birthdate,
            loginToken: this.loginToken
          }
        })
        .then(response => {
          console.log(response);
           document.getElementById("update-profile").innerText = "Success!"
         
        })
        .catch(error => {
          console.log(error);
           document.getElementById("update-profile").innerText = "Error!"
        
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

.profile-text {
  margin-left: 5%;
}

textarea {
  resize: none;
}

#updateprofile-container {
  margin-right: 10%;
}
#bio-input{
  height: 10vh;
}

@media only screen and (min-width: 1000px) {

#updateprofile-container {
  margin-right: 10%;
}
.profile-text {
  font-size: 2em;
}
.input {
  width: 90%;
  height: 3vh;
  margin: 5%;
  font-size: 1.5em;
}

}
</style>