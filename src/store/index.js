import Vue from "vue";
import Vuex from "vuex";
import pathify from "./pathify";
// import createPersistedState from "vuex-persistedstate";
import login from "./modules/login";
import checkin from "./modules/checkin";
import profile from "./modules/profile";
import weeklyReview from "./modules/weeklyReview";
import adminKPI from "./modules/adminKPI";
import manageEmployee from "./modules/manageEmployee";
import performanceReview from "./modules/performanceReview";
import star from "./modules/star"

import layout from "./layout";

Vue.use(Vuex);
// createPersistedState()
export default new Vuex.Store({
  plugins: [pathify.plugin],
  modules: {
    layout,
    login,
    checkin,
    profile,
    weeklyReview,
    adminKPI,
    manageEmployee,
    performanceReview,
    star
  }
});
