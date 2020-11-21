<template>
  <div id="like-container">
    <img
      v-if="!isLiked"
      id="heart"
      @click="likeComment"
      src="../assets/likeicon.svg"
    />
    <img
      v-else
      id="unlikeheart"
      @click="deleteLikeComment"
      src="../assets/dislikeicon.svg"
    />

    <div id="comment-likes">Likes: {{ likesAmount }}</div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "like-comment",
  data() {
    return {
      commentLikes: [],
      isLiked: false,
      likesAmount: 0,
    };
  },
  props: {
    commentId: {
      type: Number
    }
  },

  mounted: function() {
    this.getLikedComments();
  },

  methods: {
    likeComment: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/comment-likes",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            loginToken: cookies.get("session"),
            commentId: this.commentId
          }
        })
        .then(response => {
          console.log(response);
          this.isLiked = true;
           this.likesAmount++
        })
        .catch(error => {
          console.log(error);
        });
    },

    deleteLikeComment: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/comment-likes",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            loginToken: cookies.get("session"),
            commentId: this.commentId
          }
        })
        .then(response => {
          console.log(response);
          this.isLiked = false;
          this.likesAmount--
        })
        .catch(error => {
          console.log(error);
        });
    },

    getLikedComments: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/comment-likes",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          params: {
            commentId: this.commentId
          }
        })
        .then(response => {
          console.log(response);
          this.commentLikes = response.data;
          this.likesAmount = this.commentLikes.length;

          for (let i = 0; i < this.commentLikes.length; i++) {
            if (cookies.get("user") == this.commentLikes[i].userId) {
              this.isLiked = true;
              return;
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#heart {
  width: 15%;
}

#unlikeheart {
  width: 15%;
}

#like-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  width: 100%;
  margin-bottom: 5%;
}

@media only screen and (min-width: 1000px) {
#heart {
  width: 10%;
}

#unlikeheart {
  width: 10%;
}
#comment-likes{
  font-size: 1.3em;
}
}
</style>