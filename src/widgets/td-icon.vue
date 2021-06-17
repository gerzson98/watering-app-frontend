<template>
	<span class="icon">
		<font-awesome-icon
			:icon="faIcon"
			v-bind="$attrs"
			class="fas" />
	</span>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { computed } from 'vue';

const DEFAULT_PREFIX = 'td';

export default {
	name: 'TdIcon',
	components: { FontAwesomeIcon },
	props: {
		icon: { type: [String, Array, Object], required: true },
	},
	setup(props) {
		return {
			faIcon: computed(() => typeof props.icon === 'string' ? [DEFAULT_PREFIX, props.icon] : props.icon),
		};
	},
};
</script>
