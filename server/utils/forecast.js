const request = require("request");
module.exports = class forcast {
    static getWeather = ({ lat, lng }) => {
        return new Promise((resolve, reject) => {
            request(`
    https://api.darksky.net/forecast/473fe696d21e65026547b2d50b56014c/${lat},${lng}`,
                {
                    json: true
                }, (err, response, body) => {
                    if (err) {
                        reject("Forecast Server can't predict weather for this location.")
                        process.exit(1);
                    }
                    resolve({
                        temperature: body.currently.temperature,
                        summary: body.daily.summary
                    })
                })
        })
    }
}
