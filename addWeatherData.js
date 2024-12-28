
 export default async function addUserData(weather){
    // clar general-info if not empty
    //grab element with general-info from dom
    
    let weather_display = document.getElementById("weather-display");
     
    //delete previous reuslts
    if(weather_display.childElementCount != 0){
        weather_display.innerHTML = "";
    }

    var triggerTransition = (() => {
        weather_display.id = "weather_display";
    });

    let general_info = document.createElement("div");
    let temp_info = document.createElement("div");
    let temp_sup = document.createElement("sup");
    temp_sup.id = "f_sup";
    temp_info.id = "temp_info";
     
    //let img = document.createElement("img");
    const img = new Image();
    img.src = weather.icon;
    img.alt = "Logo of current weather";

    
    general_info.append(img);

    let ol = document.createElement("ol");
    ol.id = "ol";
    let li_1 = document.createElement("li");
    let li_2 = document.createElement("li");
    let li_3 = document.createElement("li");

    let h2 = document.createElement("h2");
    let h4 = document.createElement("h4");
    let span = document.createElement("span");
    span.id = "temp";
    h4.id = "h4";
    h2.id = "h2";
    temp_sup.append("F");
    //adding list of info into list
    li_1.append("Feels Like: "+ weather.feelsLike + " F");
    li_2.append("Humidity: "+ weather.humidity + " %");
    li_3.append("Wind: " + weather.wind +" MPH");
    //append item to ol
    ol.append(li_1);
    ol.append(li_3);
    ol.append(li_2);


    h4.append(weather.currentCondition);
    h2.append(weather.city + ", " + weather.state);
    span.append(weather.temp);
    span.append(temp_sup);

    general_info.append(h4);
    general_info.append(h2);
    
 //   temp_info.append(); add the list of info
    temp_info.append(span);
    temp_info.append(ol)

    weather_display.append(general_info);
    weather_display.append(temp_info);


}

