import { setupStore } from './setup-store';
import { i18n, widgets } from 'src/vue-setup';

/** @typedef {import('./setup-store').SetupStoreArgs} SetupStoreArgs */
/** @typedef {import('./setup-store').SetupStoreReturn} SetupStoreReturn */

/**
 * @typedef {Object} SetupOptionsReturn
 * @property {Object} options Options for mounting Vue components
 * @property {SetupStoreReturn} setup Helpers to control the component's environment
 */

/**
 * Creates test options for Vue components
 * @param {SetupStoreArgs} [] Note that actions get mocked by default
 * @returns {SetupOptionsReturn}
 */
export function setupOptions({ mockActions = true, ...opts } = {}) {
	const { store, ...setup } = setupStore({ mockActions, ...opts });
	const plugins = [store, i18n, widgets];
	return {
		options: { global: { plugins, stubs } },
		setup,
	};
}

const stubs = {
	VueFocusLock: { render() { return this.$slots.default(); } },
};
