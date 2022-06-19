export const getTriesNumeralString = (number) => {
	if (parseInt(number) === 1) {
		return 'try';
	} else {
		return 'tries';
	}
};
