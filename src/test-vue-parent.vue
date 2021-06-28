<template>
	<div class="full-size">
		<div class="m-6">
			<wa-plant-card :plant-info="testCard" />
		</div>
		<div class="m-6">
			<wa-menu-block
				:icon="testMenuBlock.icon"
				:i18n="testMenuBlock.i18n"
				:target-path="testMenuBlock.targetPath"
			/>
		</div>
	</div>
</template>

<script>
import WaPlantCard from 'src/components/wa-plant-card';
import WaMenuBlock from 'src/components/wa-menu-block';
import { faCog } from '@fortawesome/free-solid-svg-icons';
export default {
	components: { WaMenuBlock, WaPlantCard },
	setup() {
		const testCard = {
			imageURL: 'https://citygreen.hu/wp-content/uploads/2017/01/Sansevieria-trifasciata.jpg',
			name: 'Az én anyósom',
			species: 'Sansaveria',
			waterPercent: 30,
			isThirsty: false,
			isStarving: false,
		};
		const testMenuBlock = {
			icon: faCog,
			i18n: 'menu.test',
			targetPath: '/',
		};
		return { testCard, testMenuBlock };
	},
};
</script>

<style>
	.full-size{
		width: 1000px;
		height: 800px;
	}
</style>
