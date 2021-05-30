import { createApp } from 'vue';
import isElectron from 'is-electron';
import WebApp from './WebApp.vue';
import router from './router';
import store from './store';

// check for desktop or web app
if (isElectron()) {
  // run electron app
} else {
  createApp(WebApp).use(store).use(router).mount('#app');
}
