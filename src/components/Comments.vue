<template>
  <div>
    <img
      @click="showComments = !showComments"
      class="comment"
      src="../assets/commenticon.svg"
    />

    <div v-if="showComments == true">
      <textarea
        id="comment-input"
        v-model="content"
        placeholder="150 characters max"
      >
      </textarea>
      <br />
      <div id="button-container">
        <button id="submit-comment" class="button" @click="makeComment">
          Submit Comment
        </button>
        <button id="get-comment" class="button" @click="getComment">
          Get Comments
        </button>
      </div>
    </div>
    <div
      class="comment-container"
      v-for="comment in comments"
      :key="comment.commentId"
    >
      <p id="comment-username">{{ comment.username }} says:</p>
      <p id="comment-content">{{ comment.content }}</p>

      <like-comment :commentId="comment.commentId"> </like-comment>

      <div id="edit-comment-container" v-if="comment.userId == userId">
        <textarea
          id="edit-comment-input"
          v-model="comment.content"
          placeholder="150 characters max"
        ></textarea>
        <br />

        <div id="editdelete-comment-container">
        <button
          id="edit-comment"
          class="button"
          @click="editComment(comment.content, comment.commentId)"
        >
          Edit
        </button>
        <button
          id="delete-comment"
          class="button"
          @click="deleteComment(comment.commentId)"
        >
          Delete
        </button>
        </div>
        </div>
        </div>
      </div>

</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import LikeComment from "../components/LikeComment.vue";

export default {
  name: "comment",
  components: {
    LikeComment
  },
  data() {
    return {
      content: "",
      comments: [],
      userId: cookies.get("user"),
      showComments: false
    };
  },
  props: {
    tweetId: {
      type: Number
    }
  },
  methods: {
    makeComment: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/comments",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            loginToken: cookies.get("session"),
            tweetId: this.tweetId,
            content: this.content
          }
        })
        .then(response => {
          console.log(response);
          document.getElementById("submit-comment").innerText = "Success!";
        })
        .catch(error => {
          console.log(error);
          document.getElementById("submit-comment").innerText = "Error!";
        });
    },

    getComment: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/comments",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          params: {
            tweetId: this.tweetId
          }
        })
        .then(response => {
          console.log(response);
          this.comments = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    editComment: function(content, id) {
      axios
        .request({
          url: "https://tweeterest.ml/api/comments",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            loginToken: cookies.get("session"),
            content: content,
            commentId: id
          }
        })
        .then(response => {
          console.log(response);
          document.getElementById("edit-comment").innerText = "Success!";
        })
        .catch(error => {
          console.log(error);
          document.getElementById("edit-comment").innerText = "Error!";
        });
    },

    deleteComment: function(id) {
      axios
        .request({
          url: "https://tweeterest.ml/api/comments",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            loginToken: cookies.get("session"),
            commentId: id
          }
        })
        .then(response => {
          console.log(response);
          document.getElementById("delete-comment").innerText = "Success!";
        })
        .catch(error => {
          console.log(error);
          document.getElementById("delete-comment").innerText = "Error!";
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#comment-input {
  position: relative;
  bottom: 3vh;
  width: 100%;
  height: 10vh;
}

#comment-username {
  font-family: "Spartan", sans-serif;
  font-size: 1.2em;
  margin-top: 5%;
  margin-left: 5%;
  margin-bottom: 5%;
}

#comment-content {
  margin-left: 5%;
  margin-bottom: 10%;
}

textarea {
  resize: none;
}

#edit-comment-container {
  margin: 5%;
}

#edit-comment-input {
  height: 8vh;
  width: 100%;
  overflow: hidden;
}
.button {
  width: 80%;
  margin: 5%;
}

.comment {
  margin-top: 6px;
}

@media only screen and (min-width: 1000px) {
  .comment {
    width: 6%;
    margin: 0;
  }

  .button {
    display: grid;
    width: 80%;
  }

  #comment-input {
    font-size: 2em;
  }

  #button-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    justify-items: center;
    margin-bottom: 5%;
  }

  #editdelete-comment-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    justify-items: center;
    margin-bottom: 5%;
  }

  #comment-username {
    font-size: 1.8em;
  }

  #comment-content {
  font-size: 1.5em;
  text-align: center;
  }

  #edit-comment-input{
    font-size: 1.5em;
  }
}
</style>