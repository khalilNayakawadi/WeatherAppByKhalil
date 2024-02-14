function fetchCity()
{
	cityName = document.getElementById("city_name");
	if(cityName.value ==="")
	{
		alert("enter a city name ")
	}
	else{
		getWeatherData(cityName.value);
		cityName.value="";
	}
}

 async function getWeatherData(cityName)
{
	let apiKey = "198420045f8b90d8ed55d50467cf7b94";
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
	let result = await fetch(url);
	let data  = await result.json();
	let city = document.getElementById("ct")
	console.log(data)
	city.innerHTML = data.name;
	let windSpeed = document.getElementById("wsp")
	windSpeed.innerHTML = data.wind.speed;
	let tempreture = document.getElementById("temp")
	tempreture.innerHTML = Math.round((data.main.temp)-272.15)+"°C";
	
}

