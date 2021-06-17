import { scope } from './webcomponents';

test('#scope creates a HTML naming compatible unique tag', () => {
	const tagRegex = /custom-element-[0-9]*/;
	const createdTag1 = scope({ name: 'customElement' });
	const createdTag2 = scope({ name: 'customElement' });

	expect(tagRegex.test(createdTag1)).toBeTruthy();
	expect(tagRegex.test(createdTag2)).toBeTruthy();
	expect(createdTag1 !== createdTag2).toBeTruthy();
});
