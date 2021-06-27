<template>
	<div class="is-centered-column is-full-width is-full-height scrollbar-hidden">
		<wa-plant-card
			v-for="plant in plants"
			:key="plant.id"
			:plant-info="plant"
		/>
	</div>
</template>

<script>
import WaPlantCard from 'src/components/wa-plant-card';
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
	name: 'WaPlantList',
	components: { WaPlantCard },
	setup() {
		const store = useStore();
		const plants = computed(() => store.state.plantInfoList);
		return { plants };
	},
};
</script>
