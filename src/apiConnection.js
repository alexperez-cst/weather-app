async function getData(country = 'barcelona', format = 'metric') {
	const countryData = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=b11671cba4e59469b10b98c1c5acb2d9&units=${format}`,
	);
	if (!countryData.ok) {
		throw new Error('Sorry but the city does not exist');
	}
	const json = await processData(countryData);
	return json;
}
async function processData(countryData) {
	const jsonData = await countryData.json();
	return jsonData;
}
export { getData };
