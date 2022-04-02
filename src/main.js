import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const button = document.querySelector('.btn-acc')

button.addEventListener('click', ()=> {
    console.log('это личный кабинет пользователя')
})