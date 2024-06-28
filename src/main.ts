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
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBYj-dIqunzxogjiunRW80xRgWeipsfAyk',
  authDomain: 'alvarezweddinglive.firebaseapp.com',
  projectId: 'alvarezweddinglive',
  storageBucket: 'alvarezweddinglive.appspot.com',
  messagingSenderId: '1010720251633',
  appId: '1:1010720251633:web:be87c7bd7e0f9702b6d350',
  measurementId: 'G-7L3CZ33SDN'
}

// Initialize Firebase
const fbApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(fbApp)

// loads the Icon plugin
UIkit.use(Icons)
const ctdown = document.querySelector('#cntdown')
UIkit.countdown(ctdown, null)
UIkit.countdown(ctdown).start()

const app = createApp(App)

app.use(createPinia())
app.use(VueHead)
app.use(router)
app.use(VueEasyLightbox)

app.mount('#app')
