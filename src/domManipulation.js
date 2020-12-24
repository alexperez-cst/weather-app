import { getData } from './apiConnection.js';
class format {
	static format = 'metric';
	static symbol = '°C';
	static setFormat() {
		if (format.format === 'metric') {
			format.symbol = '°F';
			format.format = 'imperial';
		} else {
			format.format = 'metric';
			format.symbol = '°C';
		}
		return format.changeAnimation();
	}
	static getFormat() {
		return this.format;
	}
	static changeAnimation() {
		if (this.format === 'metric') {
			domEvents.formatSel.textContent = 'C';
			return domEvents.formatSel.classList.remove('toImperial');
		}
		domEvents.formatSel.textContent = 'F';
		return domEvents.formatSel.classList.add('toImperial');
	}
}
const domEvents = (() => {
	const formatSel = document.querySelector('#formatSel');
	formatSel.addEventListener('click', format.setFormat);
	return { formatSel };
})();
const domInfo = (() => {
	const weatherState = document.querySelector('#weatherState');
	const cityName = document.querySelector('#cityName');
	const temp = document.querySelector('#temp');
	const wind = document.querySelector('#wind');
	const humidity = document.querySelector('#humidity');
	return { weatherState, cityName, temp, wind, humidity };
})();
export async function displayData(city) {
	try {
		const jsonData = await getData(city, format.getFormat());
		domInfo.weatherState.textContent = jsonData.weather[0].description.toUpperCase();
		domInfo.cityName.textContent = `${jsonData.sys.country},${jsonData.name}`;
		domInfo.temp.textContent = `${jsonData.main.temp}${format.symbol}`;
		domInfo.wind.textContent = `Wind: ${jsonData.wind.speed}`;
		domInfo.humidity.textContent = `Humidity: ${jsonData.main.humidity}`;
	} catch (error) {
		console.error(error);
	}
}
