<template>
	<div class="button is-success is-menu-card-size is-rounded-small is-flex is-flex-direction-column is-justify-content-space-around">
		<fa-icon
			class="mt-3"
			:icon="icon"
			size="4x"
		/>
		{{ $t(i18n) }}
	</div>
</template>
<script>
import { useRouter } from 'vue-router';
export default {
	name: 'WaMenuBlock',
	props: {
		icon: {
			type: Object,
			required: true,
		},
		i18n: {
			type: String,
			required: true,
		},
		targetPath: {
			type: String,
			required: true,
		},
	},
	setup(props) {
		const router = useRouter();
		const goToTarget = () => router.push(props.targetPath);
		return { goToTarget };
	},
};
</script>

<style lang="scss" scoped>
@import 'src/style/utils';

.is-menu-card-size{
	width: 8em;
	height: 8em;
}
</style>
