const { default: router } = require("./routes");
import Index from "./Index";
import Vue from "vue";
import VueRouter from "vue-router";

require("./bootstrap");

window.Vue = require("vue").default;
Vue.use(VueRouter);

const app = new Vue({
    el: "#app",
    router,
    components: {
        index: Index
    }
});
