import { Alert } from './../components/Alert';

const showAlert = (alertMessage) => {
	const alert = document.createElement('custom-alert');
	alert.textContent = alertMessage;
	document.body.appendChild(alert);
};

export default showAlert;
