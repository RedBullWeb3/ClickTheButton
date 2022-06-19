import {
	nameValidator,
	validatePassword,
} from '../validation/theBestValidatorEver';

import showAlert from './../alerts/showAlert';
import { triesCounterHandler } from './../tries/triesCounterHandler';
import { validatePassword } from './../validation/theBestValidatorEver';
import { formSuccesHandler } from './formSuccesHandler';

export const formSubmitHandler = (event) => {
	event.preventDefault();
	const form = event.target;
	const data = new FormData(form);
	const name = data.get('name');
	const password = data.get('password');

	triesCounterHandler();

	try {
		nameValidator(name);
		validatePassword(password);
		formSuccesHandler();
	} catch (error) {
		form.reset();
		showAlert(error.message);
	}
};
