import "./assets/style.css";

import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import "./utils/api";
import store from "./utils/vuex";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const vuetify = createVuetify({
  components,
  directives,
  ssr: true,
});

const app = createApp(App);

app.config.globalProperties.$filters = {
  currency(value) {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 2,
    });
    return formatter.format(value);
  },
};

app.use(router);
app.use(store);
app.use(vuetify);
app.mount("#app");
