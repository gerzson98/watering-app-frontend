import { h } from 'vue';

/**
 * Converts a webcomponent to a Vue component
 *
 * Incubated in this project for now. Once it's API is stable
 * and Vue v3 becomes the default version the intention is to open source it.
 *
 * @param {CustomElementConstructor} CustomElement CustomElement to be wrapped as a Vue component
 * @param {Object} [opts] Options
 * @param {string} [opts.name] Name of the Vue component in CamelCase format
 * @param {string} [opts.class] Additional class(es) on the wrapped component for theming. The kebab-case name by default.
 *
 * @returns {Object} The Vue component
 * */
export function toVueComponent(CustomElement, {
	name = CustomElement.name,
	class: className = hyphenate(name),
} = {}) {
	const scopedTag = scope({ name });
	customElements.define(scopedTag, class extends CustomElement {});
	return {
		render() {
			return h(scopedTag, { ...this.$props, class: className }, toNativeSlots(this.$slots));
		},
		name,
	};
}

function toNativeSlots(slots) {
	return Object.entries(slots)
			.flatMap(([slot, nodes]) => slot === 'default' ?
				nodes() :
				nodes().map(assocPath(['props', 'slot'], slot)));
}

/** Behavior matches from @open-wc/scoped-elements */
let counter = Math.round(Math.random() * 100000);
function toUniqueTag(tag) {
	return `${tag}-${counter++}`;
}

export function scope({ name }) {
	return toUniqueTag(hyphenate(name));
}

function hyphenate(string) {
	const hyphenateRE = /\B([A-Z])/g;
	return string.replace(hyphenateRE, '-$1').toLowerCase();
}

/** Behavior matches https://ramdajs.com/docs/#assocPath */
function assocPath([first, ...rest], value) {
	return object => {
		const newValue = !rest.length ? value : assocPath(rest, value)(object[first] || {});
		return { ...object, [first]: newValue };
	};
}
