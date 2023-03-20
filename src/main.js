import { createApp } from 'vue'
import "./assets/styles/index.css"
import Tetikus from '@namchee/tetikus';
import '@namchee/tetikus/dist/tetikus.css';
import App from './App.vue'

const app = createApp(App);
app.use(Tetikus);
app.mount('#app');

