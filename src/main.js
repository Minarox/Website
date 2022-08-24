import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faYoutube,
  faTwitch,
  faTwitter,
  faDiscord,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

library.add(faYoutube, faTwitch, faTwitter, faDiscord, faInstagram, faGithub);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
