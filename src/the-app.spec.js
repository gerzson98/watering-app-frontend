import { shallowMount } from '@vue/test-utils';
import { setupOptions } from 'test/utils';
import App from './the-app';

test('displays in English by default', async () => {
	const { vm } = setup();
	expect(vm.$i18n.locale).toBe('en');
});

function setup() {
	const { options } = setupOptions();
	return shallowMount(App, options);
}
