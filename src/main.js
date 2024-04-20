import '@/assets/main.css'
import 'primeicons/primeicons.css'
import Lara from '@/assets/presets/lara'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import PrimeVue from 'primevue/config'
import App from '@/App.vue'
import messages from '@/locale/messages'

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: messages,
})

const app = createApp(App)
const pinia = createPinia()
const pt = {
    unstyled: true,
    pt: Lara,                            //apply preset
}

app.use(PrimeVue, pt);
app.use(pinia)
app.use(i18n)
app.mount('#app')
