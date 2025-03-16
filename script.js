const searchtext=document.querySelector("#searchtext");
const searchbtn=document.querySelector("#searchbtn");
const temp_c=document.querySelector("#temp_c");
const description=document.querySelector("#description");
const feelslike_c=document.querySelector("#feelslike_c");
const humidity=document.querySelector("#humidity");
const wind_kph=document.querySelector("#wind_kph");
const location_btn=document.querySelector("#location_btn");
const weather_img=document.querySelector("#weather_img");
const cityname=document.querySelector("#cityname");

weather2("mumbai","","");
function weather2(city,location,location2){
const apikey="1c718677b336960014d21950e7a9470a";
const url=`https://api.openweathermap.org/data/2.5/weather?lat=${location}&lon=${location2}&q=${city}&appid=${apikey}&units=metric`;
fetch(`${url}`).then(response=>response.json())
.then((response)=>{
    
    console.log(response)
    cityname.innerHTML=response.message
    temp_c.innerHTML=response.main.temp
    description.innerHTML=response.weather[0].main
    feelslike_c.innerHTML=response.main.feels_like
    humidity.innerHTML=response.main.humidity
    wind_kph.innerHTML=response.wind.speed
    cityname.innerHTML=response.name
    switch (response.weather[0].main){
        case "Rain":
            weather_img.src="https://cdn-icons-png.flaticon.com/128/1163/1163657.png";
            break;
        case "Smoke":
            weather_img.src="https://cdn-icons-png.flaticon.com/128/6188/6188976.png";
            break;
        case "Mist":
            weather_img.src="https://cdn-icons-png.flaticon.com/128/10760/10760390.png";
            break;
        case "Overcast":
            weather_img.src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png";
            break;
        case "Clear":
            weather_img.src="https://cdn-icons-png.flaticon.com/128/6974/6974833.png";
            break;
        case "Clouds":
            weather_img.src="https://cdn-icons-png.flaticon.com/128/9579/9579443.png";
            break;
        case "Haze":
            weather_img.src="https://cdn-icons-png.flaticon.com/128/1779/1779807.png";
            break;
        case "Sunny":
            weather_img.src="https://cdn-icons-png.flaticon.com/128/2698/2698194.png";
            break;
        case "Snow":
            weather_img.src="https://cdn-icons-png.flaticon.com/128/2315/2315377.png";
                break;
    }
})
}
function getlocation(position){
    console.log(position);
    const location=position.coords.latitude;
    const location2=position.coords.longitude;
    console.log(location);
    console.log(location2);
    weather2("",location,location2);
}
function fail()
{
    console.log("there was some issue");
}

searchbtn.addEventListener("click",()=>{
     weather2(searchtext.value,"","");
});
location_btn.addEventListener("click",()=>{
    navigator.geolocation.getCurrentPosition(getlocation,fail);
})
