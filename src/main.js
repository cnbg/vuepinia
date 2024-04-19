import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: {
            message: {
                hello: 'Hello dude',
            },
        },
        kg: {
            message: {
                hello: 'Salam brat',
            },
        },
    },
})

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.mount('#app')
