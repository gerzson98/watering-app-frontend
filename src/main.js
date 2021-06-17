import './style/main.scss';

import { createApp } from 'vue';
import { RouterView } from 'vue-router';
import { i18n, router, store, widgets } from './vue-setup';

createApp(RouterView)
		.use(i18n).use(router).use(store)
		.use(widgets)
		.mount('#app');
