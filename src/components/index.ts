// 引入项目中全部的全局组件
import type { App, Component } from 'vue';
import SvgIcon from './SvgIcon/index.vue';

// 全局对象对象
const allGlobalComponent: { [key: string]: Component } = {
	SvgIcon
};

// 对外暴露插件对象
export default {
	// 务必叫做install方法
	install(app: App) {
		// 注册项目中全部的全局组件
		Object.keys(allGlobalComponent).forEach((key) => {
			app.component(key, allGlobalComponent[key]);
		});
	}
};
