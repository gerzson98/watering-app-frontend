import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{ path: '/', component: () => import('../the-app') },
	{ path: '/card-test', component: () => import('../test-vue-parent') },
];

export const router = createRouter({
	routes,
	history: createWebHistory(process.env.PUBLIC_PATH),
});
