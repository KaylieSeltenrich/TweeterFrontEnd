<template>
    <div>
   <div class="create-tweet-container">
      <h1 class="header">Create Tweet:</h1>
      <textarea
        class="tweet-input"
        v-model="content"
        placeholder="200 characters max"
      ></textarea>
      <br />
      <button class="submit-tweet button" @click="createTweet">
        {{submitbuttonText}}
      </button>
    </div>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
    export default {
         name: "create-tweets",

  mounted: function() {
    this.getTweets();
  },
  data() {
    return {
      content: "",
      userId: cookies.get("user"),
      submitbuttonText: "Submit"
    };
  },
  computed: {
    tweets() {
      return this.$store.getters.getUserTweets;
    }
  },
  methods: {
    createTweet: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            loginToken: cookies.get("session"),
            content: this.content,
            tweetId: this.$store.getters.getUserTweets
          }
        })
        .then(response => {
          console.log(response);
          this.$router.go(0);
          this.submitbuttonText = "Success!"
        })
        .catch(error => {
          console.log(error);
          this.submitbuttonText = "Error!"
        });
    },
   
    getTweets: function() {
      this.$store.dispatch("getAllTweets");
    }
  }
};
</script>

<style lang="scss" scoped>
#edit-tweet {
  width: 80%;
  height: 8vh;
  margin-left: 10%;
  margin-top: 5%;
  margin-bottom: 5%;
}

#button-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5vw;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 5%;
}

.tweet-input {
  width: 100%;
  height: 10vh;
}

.submit-tweet {
  margin-left: 10%;
  width: 80%;
}

.create-tweet-container {
  padding: 5%;
}

.tweet-container {
  padding: 5%;
}

#your-tweets-container {
  width: 100%;
}

#tweets-container {
  width: 100%;
}

textarea {
  resize: none;
}

@media only screen and (min-width: 1000px) {

.create-tweet-container {
  text-align: center;
  padding: 2%;
}

.tweet-input {
  width: 50%;
  height: 10vh;
  font-size: 1.5em;
}

.submit-tweet {
  width: 30%;
  margin: 0;
  font-size: 1.2em;
  padding: 1%;
}

}
</style>