import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import VueEasyLightbox from 'vue-easy-lightbox'
import VueHead from 'vue-head'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

import App from './App.vue'
import router from './router'

import 'uikit/src/less/uikit.theme.less'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAWT0m0avwtjYTMQFhXhAMPdl1wAG0gLTI',
  authDomain: 'save-the-date-61b09.firebaseapp.com',
  projectId: 'save-the-date-61b09',
  storageBucket: 'save-the-date-61b09.appspot.com',
  messagingSenderId: '251867222036',
  appId: '1:251867222036:web:9aed8b0a8c6ff246e25701'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// loads the Icon plugin
UIkit.use(Icons)

const app = createApp(App)

app.use(createPinia())
app.use(VueHead)
app.use(router)
app.use(VueEasyLightbox)

app.mount('#app')
