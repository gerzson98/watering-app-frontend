import { createStore as createVuexStore } from 'vuex';
import { Store } from '../store';
import { Api } from '../api';

export const store = VuexStore();

export function VuexStore({
	api = Api(),
	strict = process.env.NODE_ENV !== 'production',
} = {}) {
	return createVuexStore({ ...Store({ api }), strict });
}
