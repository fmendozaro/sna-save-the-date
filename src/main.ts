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

// loads the Icon plugin
UIkit.use(Icons)

const app = createApp(App)

app.use(createPinia())
app.use(VueHead)
app.use(router)
// app.use(VueEasyLightbox)

app.mount('#app')
