const { default: router } = require("./routes");
import Vue from "vue";
import VueRouter from "vue-router";

require("./bootstrap");

window.Vue = require("vue").default;
Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);
Vue.use(VueRouter);

const app = new Vue({
    el: "#app",
    router
});
