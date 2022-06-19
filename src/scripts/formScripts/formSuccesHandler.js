import { resetTriesLocalStorage } from '../localStorageHandler';
import { hideModal } from '../modal';
import { setUserValid } from '../index';
import { showSuccessAlert } from './../alerts/showSuccessAlert';

export const formSuccesHandler = () => {
	showSuccessAlert();
	setUserValid();
	resetTriesLocalStorage();
	hideModal();
};
