import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

/** 引入全局样式文件 */
import '@/styles/index.scss';

/** 引入svg图标 */
import 'virtual:svg-icons-register';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

/** 引入自定义插件对象：注册整个项目全局全局组件 */
import globalComponent from '@/components';
//安装自定义插件
app.use(globalComponent);

app.mount('#app');
