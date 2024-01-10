import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 1. 引入你需要的组件
import { Button, Card, Space, SubmitBar, AddressList } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';


createApp(App).use(AddressList).use(SubmitBar).use(Space).use(Card).use(Button).use(store).use(router).use(router).mount('#app')
