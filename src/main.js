import { createApp, ref } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from 'aos'
import 'aos/dist/aos.css'

const i18n = createI18n({

  })

createApp(App).use(router).use(i18n).use(store).use(AOS.init()).mount('#app');

