<template>
	<transition name="toast">
		<div
			v-if="showNotification"
			:key="showNotification"
			data-testid="notification"
			class="ts-notification py-5 has-text-centered has-text-white"
			:class="{
				'has-background-success-transparent': notificationType === 'success',
				'has-background-warning-transparent': notificationType === 'warning',
				'has-background-error-transparent': notificationType === 'error' }"
			@click="clearNotification"
		>
			{{ $t(notificationText) }}
			<fa-icon
				:class="typeDetail.class"
				:icon="typeDetail.icon"
			/>
		</div>
	</transition>
</template>

<script>
import { faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
	name: 'TsNotification',
	setup() {
		const store = useStore();

		return {
			showNotification: computed(() => store.state.lastNotification.show),
			notificationText: computed(() => store.state.lastNotification.text),
			notificationType: computed(() => store.state.lastNotification.type),
			typeDetail: computed(() => {
				if(store.state.lastNotification.type === 'success') {
					return { icon: faCheckCircle, class: 'has-text-white' };
				}
				if(store.state.lastNotification.type === 'error') {
					return { icon: faExclamationTriangle, class: 'has-text-warning' };
				}
				return { icon: faExclamationTriangle, class: 'has-text-warning' };
			}),
			clearNotification: () => store.dispatch('clearNotification'),
			faExclamationTriangle,
			faCheckCircle,
		};
	},
};
</script>

<style lang="scss" scoped>
@import "src/style/utils";
.ts-notification {
	position: fixed;
	backdrop-filter: blur(6px);
	left: 50%;
	transform: translateX(-50%);
	min-width: 45vw;
	bottom: 0;
	border-radius: 1.2em;
	margin-bottom: 3.7em;
}
.toast-enter-from {
	transform: translate(-50%, 170%);
}
.toast-enter-active {
	transition: all 0.7s;
}
.toast-leave-to {
	transform: translate(-50%, 170%);
}
.toast-leave-active {
	transition: all 0.7s;
}
</style>
