import Vue from "vue";
import VueRouter from "vue-router";
import SignupPage from "../views/SignUp.vue";
import LoginPage from "../views/Login.vue";
import ProfilePage from "../views/Profile.vue";
import HomePage from "../views/Home.vue";
import DiscoverPage from "../views/Discover.vue";
import Feed from "../views/Feed.vue"

Vue.use(VueRouter);

const routes = [
{
  path: "/signup",
  name: "signup-page",
  component: SignupPage
},
{
  path: "/login",
  name: "login-page",
  component: LoginPage
},
{
  path: "/profile",
  name: "profile-page",
  component: ProfilePage
},

{
  path: "/",
  name: "home-page",
  component: HomePage
},

{
  path: "/discover",
  name: "discover-page",
  component: DiscoverPage
},

{
  path: "/feed",
  name: "feed-page",
  component: Feed
},
];

const router = new VueRouter({
  routes
});

export default router;
