import $ from 'jquery';
window.$ = window.jQuery = $;

import "bootstrap/dist/css/bootstrap.css";
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Toaster from "@meforma/vue-toaster";

import "./assets/custom.scss";

const app = createApp(App).use(router).use(Toaster);
app.use(BootstrapVue3);
AOS.init();



app.mount("#app");
