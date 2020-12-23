async function getData(country ='barcelona',format = 'metric'){
	try{
		const countryData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=b11671cba4e59469b10b98c1c5acb2d9&units=${format}`);
		const json = await processData(countryData);
		console.log(json)
	}catch(error){
		console.log(error);
	}
}
async function processData(countryData){
	try{
		const jsonData = await countryData.json();
		return jsonData;
	}catch(error){
		console.log(error)
	}
}
export {getData};