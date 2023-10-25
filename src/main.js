import { createApp } from "vue";
import App from "./App.vue";
import router from "./components/router";
import store from "./store";
import "./style.css";

createApp(App).use(router).use(store).mount("#app");
