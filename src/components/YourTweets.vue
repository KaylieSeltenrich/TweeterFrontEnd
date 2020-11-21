<template>
  <div>
    <h1 class="header">Your Tweets:</h1>
    <div class="your-tweets-container">
      <div
        class="tweets-container"
        v-for="tweet in tweets"
        :key="tweet.tweetId"
      >
        <div class="tweet-container">
          <p class="tweet-username">{{ tweet.username }}</p>
          <p class="tweet-content">{{ tweet.content }}</p>
          <p class="date-posted">Date posted: {{ tweet.createdAt }}</p>
        </div>
        <textarea class="edit-tweet" v-model="tweet.content"> </textarea> <br />
        <div class="button-container">
          <button
            class="update-tweet button"
            @click="updateTweet(tweet.content, tweet.tweetId)"
          >
            {{updatebuttonText}}
          </button>
          <button
            class="delete-tweet button"
            @click="deleteTweet(tweet.tweetId)"
          >
            {{deletebuttonText}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "your-tweets",

  mounted: function() {
    this.getTweets();
  },
  data() {
    return {
      content: "",
      userId: cookies.get("user"),
      updatebuttonText: "Edit",
      deletebuttonText: "Delete",
    };
  },
  computed: {
    tweets() {
      return this.$store.getters.getUserTweets;
    }
  },
  methods: {
    updateTweet: function(content, id) {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            loginToken: cookies.get("session"),
            content: content,
            tweetId: id
          }
        })
        .then(response => {
          console.log(response);
          this.updatebuttonText = "Success!"
        })
        .catch(error => {
          console.log(error);
          this.updatebuttonText = "Error!"
        });
    },
    deleteTweet: function(id) {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            loginToken: cookies.get("session"),
            tweetId: id
          }
        })
        .then(response => {
          console.log(response);
          this.deletebuttonText = "Success!"
        })
        .catch(error => {
          console.log(error);
          this.deletebuttonText = "Error!"
        });
    },
    getTweets: function() {
      this.$store.dispatch("getAllTweets");
    }
  }
};
</script>

<style lang="scss" scoped>
.edit-tweet {
  width: 80%;
  height: 8vh;
  margin-left: 10%;
  margin-top: 5%;
  margin-bottom: 5%;
}

.button-container {
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

.your-tweets-container {
  width: 100%;
}

.tweets-container {
  width: 100%;
}

textarea {
  resize: none;
}

@media only screen and (min-width: 1000px) {
  .your-tweets-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2%;
  }

  .edit-tweet {
    font-size: 1.5em;
  }
  
}
</style>