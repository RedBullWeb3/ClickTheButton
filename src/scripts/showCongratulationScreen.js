import { congratulationsElement } from './DOM-store';

export const showCongratulationScreen = () => {
	congratulationsElement.classList.remove('disabled');
};
