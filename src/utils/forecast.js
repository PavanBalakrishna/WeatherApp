const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=03f7db9808937520d4c2b9f085dde0c6&query='+ latitude + ',' + longitude

    request({ url, json: true }, (error, {body}) => {
        
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.current.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + ', It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.humidity + '% chance of rain.')
        }
    })
}

module.exports = forecast