const request = require("request");
module.exports = class geoCoder {
    static geoCode = location => {
        return new Promise((resolve, reject) => {
            request(`
        https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyCOxeIidkgDyIBzedPpQoR3eKfK9fvgGjA
        `,
                {
                    json: true
                }, (err, response, body) => {
                    if (err) {
                        return reject("Google Server can't find the location")
                    }
                    if (body.status === "OK") {
                        return resolve({
                            lat: body.results[0].geometry.location.lat,
                            lng: body.results[0].geometry.location.lng,
                            address: body.results[0].formatted_address
                        })
                    } else {
                        console.log(response);
                        return reject({
                            code:500,
                            message:"Can't locate the coordinates."
                        })
                    }
                })
        })
    }
}

