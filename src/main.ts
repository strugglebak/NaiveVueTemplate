import { createApp } from 'vue';
import App from './App.vue';

/** 引入全局样式文件 */
import '@/styles/index.scss';

/** 引入element-plus */
import ElementPlus from 'element-plus';
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

/** 引入svg图标 */
import 'virtual:svg-icons-register';

const app = createApp(App);

/** 安装element-plus插件 */
app.use(ElementPlus, {
	locale: zhCn
});

/** 引入自定义插件对象：注册整个项目全局全局组件 */
import globalComponent from '@/components';
//安装自定义插件
app.use(globalComponent);

app.mount('#app');
