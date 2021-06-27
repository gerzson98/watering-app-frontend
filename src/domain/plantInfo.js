export function PlantInfo({
	id='',
	name = '',
	species = '',
	imageURL = '',
	waterPercent = 0,
	isThirsty = true,
	isStarving = true,
	nextWateringDate,
	waterQuantity,
} = {}) {
	return { id, name, species, imageURL, waterPercent, isThirsty, isStarving, nextWateringDate: new Date(), waterQuantity };
}
