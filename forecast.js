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
