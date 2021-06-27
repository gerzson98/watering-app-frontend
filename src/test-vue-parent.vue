<template>
	<div class="full-size">
		<div class="m-6">
			<wa-plant-card :plant-info="testCard" />
		</div>
	</div>
</template>

<script>
import WaPlantCard from 'src/components/wa-plant-card';
export default {
	components: { WaPlantCard },
	setup() {
		const testCard = {
			imageURL: 'https://citygreen.hu/wp-content/uploads/2017/01/Sansevieria-trifasciata.jpg',
			name: 'Az én anyósom',
			species: 'Sansaveria',
			waterPercent: 30,
		};
		return { testCard };
	},
};
</script>

<style>
	.full-size{
		width: 1000px;
		height: 800px;
	}
</style>
