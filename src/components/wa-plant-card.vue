<template>
	<div class="box card-size is-rounded-default is-flex is-flex-direction-column p-0">
		<img
			:src="plantInfo.imageURL"
			class="card-img has-rounded-borders-top"
		>
		<span class="label mb-0 pl-2">
			{{ plantInfo.name }}
		</span>
		<span class="help mt-0 pl-2">
			{{ plantInfo.species }}
		</span>
		<progress
			:value="plantInfo.waterPercent"
			max="100"
			class="progress is-small is-full-width mt-2 mb-2"
			:class="{ 'is-warning': wateringWarning, 'is-danger': wateringDanger }"
		/>
		<div class="is-full-width is-full-height is-flex is-flex-direction-row is-justify-content-space-around m-1 mt-3 ">
			<fa-icon
				class="is-align-self-flex-start"
				:icon="faCalendarAlt"
			/>
			<fa-icon
				class="is-align-self-flex-end"
				:class="waterIcon.class"
				:icon="waterIcon.icon"
			/>
			<fa-icon
				class="is-align-self-flex-start"
				:icon="faEdit"
			/>
		</div>
	</div>
</template>

<script>
import { faCalendarAlt, faTint, faEdit } from '@fortawesome/free-solid-svg-icons';
import { computed } from 'vue';
export default {
	name: 'WaPlantCard',
	props: {
		plantInfo: {
			type: Object,
			required: true,
		},
	},
	setup(props) {

		const wateringWarning = computed(() => props.plantInfo.waterPercent < 10);
		const wateringDanger =  computed(() => props.plantInfo.waterPercent < 5);

		const waterIcon = {
			class: 'waterIconStyle',
			icon: faTint,
		};
		return { waterIcon, wateringWarning, wateringDanger, faEdit, faCalendarAlt };
	},
};
</script>

<style lang="scss" scoped>
	@import "../style/main";
	.box.card-size {
		width: 200px;
		height: 370px;
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
	.progress.is-warning{
		border: thin solid $warning;
	}
	.progress.is-danger{
		border: thin solid $danger;
	}
</style>
