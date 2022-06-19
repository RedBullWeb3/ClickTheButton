export const getTriesCount = () => {
	const tries = localStorage.getItem('tries');
	if (tries) {
		return tries;
	}
	return 0;
};
