export function PlantInfo({
	id='',
	name = '',
	species = '', // the simple name of the species
	imageURL = '',
	waterPercent = 0, // how the time goes till the next watering date
	isThirsty = true, // triggers the notification of the watering
	isStarving = true, // triggers the harder notification
	nextWateringDate = new Date(),
	waterQuantity = 0, // in cl
} = {}) {
	return { id, name, species, imageURL, waterPercent, isThirsty, isStarving, nextWateringDate, waterQuantity };
}
