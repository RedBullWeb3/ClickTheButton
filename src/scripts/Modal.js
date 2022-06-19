import { formSubmitHandler } from './formScripts/formHandler';

const modalTemplateElement = document.querySelector('#modal');

const modalElement = modalTemplateElement.content.cloneNode(true);

export const showModal = () => {
	const modal = modalElement.cloneNode(true);
	modal.querySelector('form').addEventListener('submit', formSubmitHandler);
	document.body.appendChild(modal);
};

export const hideModal = () => {
	const modal = document.getElementById('modal-backdrop');
	modal.remove();
};
