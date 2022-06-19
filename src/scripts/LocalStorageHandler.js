export const getAndUpdateTriesLocalStorage = () => {
	const tries = localStorage.getItem('tries');
	if (tries === null) {
		localStorage.setItem('tries', 1);
		return 1;
	} else {
		const newTries = parseInt(tries) + 1;
		localStorage.setItem('tries', newTries);
		return newTries;
	}
};

export const resetTriesLocalStorage = () => {
	localStorage.setItem('tries', '0');
};
