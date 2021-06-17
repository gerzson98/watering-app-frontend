import { Api } from 'src/api';
import { Store } from 'src/store';
import { createStore as createVuexStore } from 'vuex';

/**
 * @typedef {Object} SetupStoreArgs
 * @property {boolean} [mockActions] Replace store actions with Jest mocks
 * @property {Object} [axios] Alternative axios instance or mock
 * @property {Object} [api] Alternative api instance or mock
 */

/**
 * @typedef {Object} SetupStoreReturn Vuex store and its test setup
 * @property {Object} store Vuex store instance
 * @property {Object} state State of the Vuex store
 * @property {Object} actions Actions used by the Vuex store
 * @property {Object} api API instance used by the store mocked by default
 * @property {Object} axios Axios instance used by the store mocked by default
 */

/** Creates Vuex store for tests
 * @param {SetupStoreArgs}
 * @returns {SetupStoreReturn}
 */
export function setupStore({
	axios = MockAxios(),
	mockActions = false,
	api = Api(axios),
} = {}) {
	const withActions = mockActions ? withMockActions : store => store;
	const store = withActions(Store({ api }));
	const vuexStore = createVuexStore(store);
	return { ...store, store: vuexStore, api, axios };
}

/** Swaps out actions in a store with mocks that by default resolve */
function withMockActions({ actions, modules, ...rest }) {
	const mockActions = map(() => jest.fn().mockResolvedValue(), actions);
	const store = { actions: mockActions, ...rest };
	return modules ? { ...store, modules: map(withMockActions, modules) } : store;
}

function MockAxios() {
	return {
		get: jest.fn().mockImplementation(notMocked('get')),
		post: jest.fn().mockImplementation(notMocked('post')),
		put: jest.fn().mockImplementation(notMocked('put')),
		delete: jest.fn().mockImplementation(notMocked('delete')),
	};
}

function notMocked(verb) {
	return (...args) => Promise.reject(new Error(`${verb} endpoint is not mocked for ${args}`));
}

function map(mapper, object) {
	const mapValue = (acc, [key, value]) => ({ ...acc, [key]: mapper(value) });
	return Object.entries(object).reduce(mapValue, {});
}
