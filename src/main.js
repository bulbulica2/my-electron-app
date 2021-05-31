import { createApp } from 'vue';
import isElectron from 'is-electron';
import WebApp from '@/web/App.vue';
import DesktopApp from '@/desktop/App.vue';
import router from '@/web/router';
import store from '@/web/store';
// @ is an alias to /src

// check for desktop or web app
if (isElectron()) {
  createApp(DesktopApp).mount('#app');
} else {
  createApp(WebApp).use(store).use(router).mount('#app');
}
