<template>
  <div>
    <p>Email:</p>
    <input type="text" id="email-input" class="centertext" v-model="email" />
    <p>Username:</p>
    <input
      type="text"
      id="username-input"
      class="centertext"
      v-model="username"
    />
    <p>Password:</p>
    <input
      type="password"
      id="password-input"
      class="centertext"
      v-model="password"
    />
    <p>Bio:</p>
    <textarea id="bio-input" class="centertext" v-model="bio"></textarea>
    <p>Birthday:</p>
    <input
      type="text"
      id="birthdate-input"
      class="centertext"
      v-model="birthdate"
      placeholder="YYYY-MM-DD"
    />
    <h2 @click="signupUser">Sign Up</h2>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "signup-form",
  data() {
    return {
      email: "",
      username: "",
      password: "",
      bio: "",
      birthdate: ""
    };
  },

  methods: {
    signupUser: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/users",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            email: this.email,
            username: this.username,
            password: this.password,
            bio: this.bio,
            birthdate: this.birthdate
          }
        })
        .then(response => {
          console.log(response.data);
          cookies.set("session", response.data[0].loginToken);
          this.$router.push("/home");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.centertext {
  text-align: center;
  height: 3vh;
}
p {
  text-align: center;

}
#bio-input {
  height: 10vh;
  width: 100%;
}
h2 {
  width: 60%;
  margin: 0;
  margin-left: 10%;
  margin-top: 25%;
  padding: 5%;
}

@media only screen and (min-width: 1000px) {
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 10%;
  }
  .centertext {
    text-align: center;
    font-size: 1.5em;
    padding: 10px;
    margin-bottom: 5%;
    width: 100%;
  }

  #bio-input {
    height: 10vh;
    width: 100%;
  }
  .login-and-signup {
    text-align: center;

    p {
      font-size: 2.5em;
      margin: 0;
      text-align: center;
    }

    h2 {
      bottom: 25%;
      position: relative;
      font-size: 1.5em;
      width: 90%;
      grid-column: 1 / span 2;
    
    }
  }
}
</style>