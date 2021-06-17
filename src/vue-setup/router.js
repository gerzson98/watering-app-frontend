import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{ path: '/', component: () => import(/* webpackChunkName: "the-app" */ '../the-app') },
];

export const router = createRouter({
	routes,
	history: createWebHistory(process.env.PUBLIC_PATH),
});
