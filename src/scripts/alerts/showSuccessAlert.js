import { getTriesCount } from '../tries/getTriesCount';
import { getTriesNumeralString } from '../tries/getTriesNumeralString';
import showAlert from './showAlert';

export const showSuccessAlert = () => {
	const tries = getTriesCount();
	showAlert(
		`You have succesfully logged in! You did it in ${tries} ${getTriesNumeralString(
			tries
		)}!`
	);
	setTimeout(() => {
		showAlert('Now you can click the button');
	}, 3500);
};
