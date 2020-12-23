import {displayData} from './domManipulation.js';
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
export const hey = 'hey';
(() => {
	const cityField = document.querySelector('#city');
	cityField.addEventListener('keyup',async (e)=> {
		if(e.code === 'Enter'){
			await form.submitForm();
		}
	});
})()


