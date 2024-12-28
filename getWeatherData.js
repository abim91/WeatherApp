

//async and away

export default async function getWeatherData(location){
    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=5a819491df194b14af3230013241712&q=${location}&aqi=no`,{mode:"cors"})
    let data = await response.json();
    return data;
}

