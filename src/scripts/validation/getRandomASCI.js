export const getRandomASCI = () => {
	return String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97);
};
