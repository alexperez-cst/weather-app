import { displayData } from './domManipulation.js';
class form {
	static city = document.querySelector('#city');
	constructor() {}
	static async submitForm() {
		if (!this.city.value) {
			throw new Error('The city field is empty');
		}
		await displayData(this.city.value);
		this.clearForm();
	}
	static clearForm() {
		this.city.value = '';
	}
}
export const hey = 'hey';
(() => {
	const cityField = document.querySelector('#city');
	cityField.addEventListener('keyup', async e => {
		if (e.code === 'Enter') {
			await form.submitForm();
		}
	});
})();
