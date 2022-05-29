import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//Importando bootstrap

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import router from './router'

library.add(fas);

createApp(App).component('fa', FontAwesomeIcon  ).use(router).mount('#app')
