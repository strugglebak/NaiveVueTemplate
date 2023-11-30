// 1. 导入
import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { User } from '@/api/type';

// 2. 使用
const userStore = defineStore('userStore', () => {
	const persist = {
		enabled: true,
		strategies: [
			// 修改存储中使用的键名称，默认为当前 Store的 id
			// 修改为 sessionStorage，默认为 localStorage
			// 部分持久化状态的点符号路径数组，[]意味着没有状态被持久化(默认为undefined，持久化整个状态)
			{ key: 'storekey', storage: sessionStorage, paths: ['routes', 'userInfo'] }, // routes 和 userInfo 字段用 sessionStorage 存储
			{ key: 'storekey', storage: localStorage, paths: ['token'] } // token字段用 localStorage 存储
		]
	};

	const state = ref<User>({
		id: 0,
		username: '',
		email: '',
		phone: '',
		avatar: '',
		introduction: '',
		roles: [],
		permissions: [],
		createTime: '',
		updateTime: '',
		lastLoginTime: '',
		status: 0
	});

	const getUserName = (state: User) => {
		return state.username;
	};

	return { state, getUserName, persist };
});
// 3. 导出
export default userStore;
