const request = require('request')

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Bangladesh.json?access_token=pk.eyJ1Ijoicml5YWRrYWltIiwiYSI6ImNrcWlzaDJpajAyNHQydnAzbG41cXV4d3cifQ.izlSFmsK9N9rQz6HVuqC-g'

request({ url: geocodeURL, json: true }, (error, response) => {
    const latitude = response.body.features[0].center[0]
    const longitude = response.body.features[0].center[1]
    console.log(latitude, longitude)
})