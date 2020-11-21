<template>
  <div id="page-header">
    <img id="icon" src="../assets/squawkericon.svg" alt="squawker icon" />
    <h1 id="title">Squawker</h1>
  </div>
</template>

<script>
export default {
  name: "page-header",

  computed: {
    loginToken() {
      return this.$store.state.loginToken;
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0%;
  padding: 0%;
}

#page-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  align-items: center;
  height: 10vh;
  background-color: white;
  z-index: 1;
}

#title {
  position: relative;
  font-family: "Spartan", sans-serif;
  text-align: center;
  font-size: 2.5em;
  font-weight: bold;
  color: rgb(70, 144, 230);
  right: 10%;
}

#icon {
  height: 11vh;
  padding: 5%;
  z-index: 101;
}

@media only screen and (min-width: 700px) {
  #title {
    font-size: 3em;
    right: 50%;
    z-index: 101;
  }

  #icon {
    padding: 2%;
    height: 15vh;
  }
}

@media only screen and (min-width: 1000px) {
  #title {
    font-size: 4em;
    left: 0%;
    text-align: center;
    z-index: 101;
  }

  #page-header {
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    width: 35%;
    align-items: center;
    min-height: auto;
    background-color: white;
  }

  #icon {
    height: 15vh;
    z-index: 101;
  }
}
</style>