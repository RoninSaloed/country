import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import setup from "./router/setup";
import { createPinia } from "pinia";
const pinia = createPinia();

const app = createApp(App);

app.use(setup);
app.mount("#app");
app.use(pinia);
