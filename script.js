
// current weather card
// ================================================================================



// ==============
    var currentCityDiv = $("<div>");
    currentCityDiv .attr("id","showCity");
    $("#today").append(currentCityDiv);

    var currentUL = $("<ul>");
    currentUL.attr("id", "currentCard");
    currentCityDiv.append(currentUL);

    var currentLI = $("<li>");
    currentLI.attr("id","cityLI");
    currentUL.append(currentLI);

    var currentDate = $("<h3>").text("-------");
    currentLI.append(currentDate);

    var currentDate = $("<h4>").text("(--/--/----)");
    currentLI.append(currentDate);
    
    var currentTemperature= $("<p>").text(" Temp:------°C ");
    currentLI.append(currentTemperature);
    var currentHumidity = $("<p>").text(" Humidity:--- % ");
    currentLI.append(currentHumidity);
    var currentWindSpeed = $("<p>").text(" Wind:----- m/s ");
    currentLI.append(currentWindSpeed);
// ==================================================================================





// 5-Day Forecast Text
// ================================================
var dayForecast = $("<h3>").text("5-Day Forecast:");
dayForecast.attr("id","dayForecast");
$("#forecast").append(dayForecast);
// ================================================

// 5 days cards section(div,UL)
// ==============================================
var ULdiv = $("<div>");
$("#forecast").append(ULdiv);

var ulCards = $("<ul>");
ulCards .attr("class","cards");
ULdiv.append(ulCards);
// ==============================================

//  5 days cards section(LI)
// =========================================================================
var Card = $("<li>");
Card .attr("class","weatherCard");
ulCards.append(Card);
var h3 = $("<h3>").text("(--/--/----)");
Card.append(h3);
var temperature= $("<h4>").text("Temp:------°C");
Card.append(temperature);
var humidity = $("<h4>").text("Humidity:---%");
Card.append(humidity);
var windSpeed = $("<h4>").text("Wind:----- m/s");
Card.append(windSpeed);

var Card = $("<li>");
Card .attr("class","weatherCard");
ulCards.append(Card);
var h3 = $("<h3>").text("(--/--/----)");
Card.append(h3);
var temperature= $("<h4>").text("Temp:------°C");
Card.append(temperature);
var humidity = $("<h4>").text("Humidity:---%");
Card.append(humidity);
var windSpeed = $("<h4>").text("Wind:----- m/s");
Card.append(windSpeed);

var Card = $("<li>");
Card .attr("class","weatherCard");
ulCards.append(Card);
var h3 = $("<h3>").text("(--/--/----)");
Card.append(h3);
var temperature= $("<h4>").text("Temp:------°C");
Card.append(temperature);
var humidity = $("<h4>").text("Humidity:---%");
Card.append(humidity);
var windSpeed = $("<h4>").text("Wind:----- m/s");
Card.append(windSpeed);

var Card = $("<li>");
Card .attr("class","weatherCard");
ulCards.append(Card);
var h3 = $("<h3>").text("(--/--/----)");
Card.append(h3);
var temperature= $("<h4>").text("Temp:------°C");
Card.append(temperature);
var humidity = $("<h4>").text("Humidity:---%");
Card.append(humidity);
var windSpeed = $("<h4>").text("Wind:----- m/s");
Card.append(windSpeed);

var Card = $("<li>");
Card .attr("class","weatherCard");
ulCards.append(Card);
var h3 = $("<h3>").text("(--/--/----)");
Card.append(h3);
var temperature= $("<h4>").text("Temp:------°C");
Card.append(temperature);
var humidity = $("<h4>").text("Humidity:---%");
Card.append(humidity);
var windSpeed = $("<h4>").text("Wind:----- m/s");
Card.append(windSpeed);


// =========================================================================


// search section
// =========================================================
var cityInput = document.querySelector("#search-input");
var SearchButton = document.querySelector("#search-button");
var ApiKey = "0b14bd9f90173719c5c03461e31ad0ac";
// =========================================================


// function to generate current weather card and local storage
// =============================================================================
function CurrentDate(weatherItem,index) {

    var currentLI = $("<li>");
    currentLI.attr("id","cityLI");
    currentUL.append(currentLI);

    var image = $("<img>");
    image.attr("src","https://openweathermap.org/img/wn/" + weatherItem.weather[0].icon+ "@4x.png","alt","weatherImage");
    
    currentLI.append(image);

    var cityName = cityInput.value.trim();
    var showCityName = $("<h3> ").text(cityName);
    currentLI.append(showCityName);
    console.log(showCityName);
    
    var currentDate = $("<h4> ").text( "("+weatherItem.dt_txt.split(" ")[0]+")" );
    currentDate.attr("id", "cDate");
    currentLI.append(currentDate);

    var currentTemperature= $("<p>").text(" Temp:" + ( weatherItem.main.temp-273.15).toFixed(2)+"°C");
    currentTemperature.attr("id","cTemperature");
    currentLI.append(currentTemperature);

    var currentHumidity = $("<p>").text(" Humidity:"+ (weatherItem.main.humidity)+ "%");

    currentHumidity.attr("id","cHumidity");
    currentLI.append(currentHumidity);

    var currentWindSpeed = $("<p>").text(" Wind:"+ (weatherItem.wind.speed)+ "m/s") ;
    currentWindSpeed.attr("id","cWindSpeed");
    currentLI.append(currentWindSpeed);

    // // local storage the city name
    // // ====================================================================
    var localDiv = $("#history");
    var localCityName = $("<h4>").text(cityName);
    localCityName.attr("id","citName");
    localDiv.append(localCityName);

    // (['0'].outerText) use to access city name by innerText in json object[0].
    var storeCity= localStorage.setItem("city-name",JSON.stringify(localCityName['0'].outerText));

    var receiveCity= JSON.parse(localStorage.getItem("city-name"));
    
    console.log(receiveCity);
    // // =====================================================================


}
// ==============================================================================

// function to generate 5 next days cards 
// ==================================================================================
function createWeatherCard(weatherItem,index) {

     var Card = $("<li>");
     Card .attr("class","weatherCard");
     ulCards.append(Card);
    
     var image = $("<img>");
     image.attr("src","https://openweathermap.org/img/wn/" + weatherItem.weather[0].icon+ "@2x.png");
     Card.append(image);

    var Date = $("<h3>").text( "(" + weatherItem.dt_txt.split(" ")[0]+ ")" );
    Card.append(Date);

    var temperature= $("<h4>").text(" Temp: " +( weatherItem.main.temp-273.15).toFixed(2)+" °C") ; 
    Card.append(temperature);

    var humidity = $("<h4>").text(" Humidity: "+ (weatherItem.main.humidity)+ " % ");
    Card.append(humidity);

    var windSpeed = $("<h4>").text(" Wind: "+ (weatherItem.wind.speed)+ " m/s ") ;
    Card.append(windSpeed);

}
// ===================================================================================

//  function to find the cities location (for OpenWeather website) by ApiKey and url using fetch. 
// ==============================================================================================
function fiveDays(lat,lon) {

    var fiveDaysURL = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid="+ApiKey;


     fetch(fiveDaysURL)
     .then(function (response) {
     return response.json();
  })
     .then(function (data){
     console.log(data);

    //filter days to get one day
        var uniqueForecastDays = [];
        var fiveDaysForecast = data.list.filter(forecast => {

        var forecastDate = new Date(forecast.dt_txt).getDate();
        if(!uniqueForecastDays.includes(forecastDate)){
            return uniqueForecastDays.push(forecastDate);
        }
    });
    
    // console.log(fiveDaysForecast);
    // =========================================
    
    // remove an element from DOM(ul and div should be outside the function.)
    // ==========================================
      currentUL.empty();
      ulCards.empty();
    // ==========================================

    fiveDaysForecast.forEach((weatherItem, index) => {

        if (index === 0) {
            CurrentDate(weatherItem,index);
            // remove city Names from innerHTML
            cityInput.value = "";
            
        } else {
            createWeatherCard(weatherItem,index);
        }  
        
    });


})
}
// ==============================================================================================


// function to find the cities name by ApiKey and url for OpenWeather website
// =========================================================================================
SearchButton.addEventListener("click",changCities);

function changCities(event) {
    event.preventDefault();
    var cityName = cityInput.value.trim();
    if (!cityName) return;
    // console.log(cityName);

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+ApiKey; 
    
   fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data){
    console.log(data);

    var cityLat = data.coord.lat;
    var cityLon = data.coord.lon;

    fiveDays(cityLat,cityLon);

  })

      

}
// ========================================================================================




