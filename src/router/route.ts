import type { RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Login',
		component: () => import('@/views/LoginView.vue'),
		meta: {
			title: '跳转中...'
		}
	},
	{
		path: '/home',
		name: 'Home',
		component: () => import('@/views/HomeView.vue'),
		meta: {
			title: '首页',
			auth: true
		}
	}
];
