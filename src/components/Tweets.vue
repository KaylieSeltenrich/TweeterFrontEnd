<template>
  <div>
    <p class="tweet-username">{{ tweetObject.username }} tweets:</p>

    <p class="tweet-content">{{ tweetObject.content }}</p>

    <p class="date-posted"> Date Posted: {{ tweetObject.createdAt }}</p> <br />
    <div id="comment-liketweet-container">
      <like-tweet :tweetId="tweetObject.tweetId"> </like-tweet>
      <comments :tweetId="tweetObject.tweetId"> </comments>
    </div>
  </div>
</template>

<script>
import LikeTweet from "../components/LikeTweet.vue";
import Comments from "../components/Comments.vue";

export default {
  name: "page-tweet",
  components: {
    LikeTweet,
    Comments
  },
  props: {
    tweetObject: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  margin-top: 5%;
}

#comment-liketweet-container {
  margin-top: 5%;
}
</style>