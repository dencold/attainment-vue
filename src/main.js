import Vue from 'vue';
import Vuetify from 'vuetify';
import VueFire from 'vuefire';
import firebase from 'firebase';

// explicit installation required in module environments
import 'vuetify/dist/vuetify.css';

import App from './App';
import router from './router';

firebase.initializeApp({
  apiKey: 'AIzaSyBy6wjkoJPJVpysm2ZsFZ6VOxF8FhCtx68',                             // Auth / General Use
  authDomain: 'attainment-dev.firebaseapp.com',         // Auth with popup/redirect
  databaseURL: 'https://attainment-dev.firebaseio.com', // Realtime Database
  storageBucket: 'attainment-dev.appspot.com',          // Storage
  messagingSenderId: '123456789',                  // Cloud Messaging
});

Vue.use(Vuetify);
Vue.use(VueFire);
Vue.config.productionTip = false;

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      render: h => h(App),
    });
  }
});
