<template>
	<div class="box card-size is-rounded-default is-flex is-flex-direction-column p-0 m-0">
		<img
			:src="plantInfo.imageURL"
			class="card-img has-rounded-borders-top"
		>
		<span class="label m-0 pl-4">
			{{ plantInfo.name }}
		</span>
		<span class="help m-0 pl-4">
			{{ plantInfo.species }}
		</span>
		<progress
			:value="plantInfo.waterPercent"
			max="100"
			class="progress m-4 mt-2 mb-2"
		/>
		<div class="is-full-width is-flex is-flex-direction-row is-justify-content-space-around">
			<fa-icon
				class="has-button-effects"
				:icon="faCalendarAlt"
			/>
			<fa-icon
				class="has-button-effects pt-1"
				:class="waterIcon.class"
				:icon="waterIcon.icon"
				size="2x"
			/>
			<fa-icon
				class="has-button-effects"
				:icon="faEdit"
			/>
		</div>
	</div>
</template>

<script>
import { faCalendarAlt, faTint, faEdit } from '@fortawesome/free-solid-svg-icons';
export default {
	name: 'WaPlantCard',
	props: {
		plantInfo: {
			type: Object,
			required: true,
		},
	},
	setup() {
		const waterIcon = {
			class: 'waterIconStyle',
			icon: faTint,
		};

		return { waterIcon, faEdit, faCalendarAlt };
	},
};
</script>

<style lang="scss" scoped>
	@import "../style/main";
	.box.card-size {
		width: 13em;
		height: 24em;
	}
	.has-rounded-borders-top{
		border-top-left-radius: $border-radius;
		border-top-right-radius: $border-radius;
	}
	.card-img{
		height: 250px;
		object-fit: cover;
	}
	.waterIconStyle {
		color: $progress-value-background-color;
	}
	/* Progress style */
	.progress{
		border: 0.01em solid $progress-value-background-color;
		width: 11em;
	}
</style>
