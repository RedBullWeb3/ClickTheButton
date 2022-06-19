import { showModal } from './modal';
import { theBestButtonEver } from './DOM-store';
import { showCongratulationScreen } from './showCongratulationScreen';

let userIsValid = false;

theBestButtonEver.addEventListener('click', () => {
	if (!userIsValid) {
		showModal();
		return;
	}

	showCongratulationScreen();
});

export const setUserValid = () => {
	userIsValid = true;
};
