const request = require('request')
const url = "http://api.weatherstack.com/current?access_key=2835d7b834375295447f4af5c1391c84&query=90.0779740421191,24.3476077999364";

request({ url: url,json:true }, (error, response) => {
  // const data = JSON.parse(response.body)
   // console.log(data)
  if(error){
    console.log("Unable to connect with internet");
  }else if(response.body.error){
    console.log("Data is given ,is not correct !");
  } else {
     console.log(response.body.current.temperature)
  }
})   


const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Bangladesh.json?access_token=pk.eyJ1Ijoicml5YWRrYWltIiwiYSI6ImNrcWlzaDJpajAyNHQydnAzbG41cXV4d3cifQ.izlSFmsK9N9rQz6HVuqC-g'

request({ url: geocodeURL, json: true }, (error, response) => {
    const latitude = response.body.features[0].center[0]
    const longitude = response.body.features[0].center[1]
    console.log(latitude, longitude)
})