
//API KEY YOU CAN FIND IT ONLINE ON rapidapi.com //
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0208b2e448msh88525771ea5d522p103226jsn14d469ca1ebe',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

//////////////////////////////////////////////




const getWeather =(city)=>{
    cityName.innerHTML = city


 // THIS IS rapid aid jqury  request /////// 
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city , options)
    .then(response => response.json())
    .then((response) => {
////////////////////////////////////////////////

//elements used in wether api ///////
        console.log(response)

        
        temp.innerHTML= response.temp
        temp2.innerHTML= response.temp
        feels_like .innerHTML= response.feels_like
        humidity.innerHTML= response.humidity
        humidity2.innerHTML= response.humidity
        min_temp.innerHTML= response.min_temp
        max_temp.innerHTML= response.max_temp
        wind_speed .innerHTML= response.wind_speed
        wind_speed2 .innerHTML= response.wind_speed
        wind_degrees.innerHTML= response.wind_degrees
        sunrise.innerHTML= response.sunrise
        sunset.innerHTML= response.sunset





    })
    .catch(err => console.error(err));
}
///////////////////////////////////////

//This is to prevent page for reloading automatically//////
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)

  ////////////////////////////////////////////////////////


})

getWeather("Delhi")



