import {displayData} from './domManipulation';
class form{
	static city = document.querySelector('#city');
	constructor(){}
	static async submitForm(){
		await displayData(this.city.value);
		this.clearForm();
	}
	static clearForm(){
		this.city.value = '';
	}
}
(() => {
	const searchButton = document.querySelector('#search');
	searchButton.addEventListener('click',form.submitForm);
})()


