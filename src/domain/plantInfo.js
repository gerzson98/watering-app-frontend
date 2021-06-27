export function PlantInfo({
	id='',
	name = '',
	species = '',
	imageURL = '',
	waterPercent = 0,
	isThirsty = true,
	isStarving = true,
} = {}) {
	return { id, name, species, imageURL, waterPercent, isThirsty, isStarving };
}
