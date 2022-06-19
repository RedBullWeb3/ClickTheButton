import { getAndUpdateTriesLocalStorage } from '../localStorageHandler';

export const triesCounterHandler = () => {
	const tries = getAndUpdateTriesLocalStorage();

	const counterElement = document.querySelector('.hidden');
	const triesElement = document.getElementById('tries');
	if (tries >= 0) {
		if (counterElement && counterElement.classList.contains('hidden')) {
			counterElement.classList.remove('hidden');
		}
		triesElement.innerText = tries;
	}
};
