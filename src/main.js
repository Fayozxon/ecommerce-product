import { createApp } from 'vue';
import App from './App.vue';
import './main.scss';
import Overlay from './components/Overlay.vue';

const app = createApp(App);

app.component('Overlay', Overlay);

app.mount('#app');
