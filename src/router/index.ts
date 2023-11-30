import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './route';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
});

router.beforeEach((to, from, next) => {
	const { title, auth } = to.meta;
	const token = localStorage.getItem('token');

	if (title) {
		document.title = title as string;
	}

	if (auth && !token) {
		return next({ name: 'Login' });
	}
	next();
});

export default router;
