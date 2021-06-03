
const foreCast = require('../utils/forecast');
const geoCoder = require('../utils/geocoder');

geoCoder
module.exports= class WeatherController {

    static getWeather = async (req, res) => {

          let {address} =req.query;
        if (!address || address  == "") {
            res.status(400);
            return res.send({
                code:400,
                message: "Please share your location."
            })
        }
        try {
            let { lat, lng, address } = await geoCoder.geoCode(req.query.address);
            let result = await foreCast.getWeather({ lat, lng });
            res.status(200);
            return res.send({ result, address });
        } catch (error) {
            console.log("helo",error)
            res.status(500);
            res.send(error);
        }
    }
}
