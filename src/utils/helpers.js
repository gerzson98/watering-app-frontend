export const forAllProperties  = (object, callback) => {
	Object.getOwnPropertyNames(object).forEach(prop => callback(object[prop]));
};
