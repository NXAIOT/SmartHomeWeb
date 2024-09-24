import {createApp} from 'vue'
import {createPinia, Pinia} from 'pinia'
import ElementPlus from 'element-plus'
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from "./router";
import "./static/less/reset/reset.less"
import App from './App.vue'
import './style.css'


const pinia: Pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App).use(pinia).use(router).use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')