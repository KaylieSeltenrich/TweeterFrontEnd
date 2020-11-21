<template>
  <div class="pagecontainer">
    <div class="login-and-signup">
      <signup-form> </signup-form>
    </div>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";

export default {
  name: "signup-page",

  components: {
    SignupForm
  }
};
</script>

<style lang="scss" scoped>
.pagecontainer {
  position: fixed;
  text-align: center;
  margin-left: 30%;
}


@media only screen and (min-width: 1000px) {

 .login-and-signup{
   margin: 0;
   padding: 0;
   width: auto;
 }
}
</style>