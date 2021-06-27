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
			:class="{ 'is-warning': plantInfo.isThirsty, 'is-danger': plantInfo.isStarving }"
		/>
		<div class="is-full-width is-full-height is-flex is-flex-direction-row is-justify-content-space-around m-1 mt-2 ">
			<fa-icon
				class="is-align-self-flex-start"
				:icon="faCalendarAlt"
			/>
			<fa-icon
				class="is-align-self-flex-end pt-2"
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
	.progress{
		border: thin solid $progress-value-background-color;
	}
	.progress.is-warning{
		border: thin solid $warning;
	}
	.progress.is-danger{
		border: thin solid $danger;
	}
</style>
