import getWeatherData from "./getWeatherData.js";
import addUserData from "./addWeatherData.js";
//listen when submit button is clicked

//call appropirate func to change position of search bar
var submit_btn = document.getElementById("btn_zipcode");
submit_btn.addEventListener("click",()=>{
    console.log("here");
    var data_ = document.getElementById("entry-div");
    const body = document.body;
    body.id = "clicked";
 /*   data_.style.backgroundColor = "red";
    body.style.justifyContent = "start";*/
    data_.id = "initalClicked";

});
//listen for submit button to get clicked 
var btn_zipcode = document.getElementById("btn_zipcode");

btn_zipcode.addEventListener("click", async ()=>{
    var search_bar = document.getElementById("search-bar");
    var zipcode = search_bar.value;
    
    if(!zipcode){
        alert("enter a zipcode");
    }

    try{
        var data = await getWeatherData(zipcode);
        console.log(data);
        let currentWeather = {
            "feelsLike": data.current.feelslike_f,
            "currentCondition" : data.current.condition.text,
            "state" : data.location.region,
            "city": data.location.name,
            "temp" : data.current.temp_f,
            "humidity" :data.current.humidity,
            "wind": data.current.gust_mph,
            "icon" : data.current.condition.icon
        }

        addUserData(currentWeather);
      /*  var feelsLike = data.current.feelslike_f;
        var currentCondition = data.current.condition.text
        var region = data.location.region;
        var area = data.location.name;
        // get temp, feels like, wind, humidity
        var temp = data.current.temp_f;
        var humidity = data.current.humidity;
        var wind = data.current.gust_mph;*/
        

        var temp_far = data['current'].dewpoint_f;
        
        
    }
    catch(error){
        console.error("Error fetching weather data:", error);  // Error handling
        alert("An error occurred while fetching the weather data.");
    }
    
});



//call function to request info for the location