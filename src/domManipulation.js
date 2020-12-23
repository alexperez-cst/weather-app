import {getData} from './apiConnection';
class format{
	static format = 'metric'
	static symbol = '°C'
	static setFormat(){
		if(format === 'metric'){
			this.symbol = '°F';
			this.format = 'imperial'
		}else{
			this.symbol = '°C'
			this.format = 'metric';
		}
		return this.changeAnimation();
	}
	static get getFormat(){
		return this.format;
	}
	static get getTempSymbol(){
		return this.symbol;
	}
	static changeAnimation(){
		if(this.format === 'metric'){
			return domEvents.ball.classList.remove('toImperial');
		}
		return domEvents.ball.classList.add('toImperial');
	}
}
const domEvents = (() => {
	const ball = document.querySelector('#ball');
	ball.addEventListener('click',format.setFormat);
	return {ball};
})()
const domInfo = (() => {
	const weatherState = document.querySelector('#weatherState');
	const cityName = document.querySelector('#cityName');
	const temp = document.querySelector('#temp');
	const symbol = document.querySelector('#symbol');
	const wind = document.querySelector('#wind');
	const humidity = document.querySelector('#humidity');
	return {weatherState,cityName,temp,symbol,wind,humidity};
})()
export async function displayData(city){
	const jsonData = await getData(city,format.getFormat);
	domInfo.weatherState.textContent = jsonData.weather.description;
	domInfo.cityName.textContent = `${jsonData.sys.country},${jsonData.name}`;
	domInfo.temp.textContent = jsonData.main.temp;
	domInfo.symbol.textContent = format.getTempSymbol;
	domInfo.wind.textContent = `Wind: ${jsonData.wind.speed}`;
	domInfo.humidity.textContent = `Humidity: ${jsonData.main.humidity}`;
}