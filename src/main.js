import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';

import DialogService from 'primevue/dialogservice'
import ToastService from 'primevue/toastservice';


const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'light',
            cssLayer: false
        }
    },
    ripple: true
});

// Plugins
app.use(createPinia());
app.use(router);
app.use(ToastService);
app.use(DialogService);

app.mount('#app');