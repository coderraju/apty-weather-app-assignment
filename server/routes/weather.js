const app = require('express');
const router = app.Router();
const WeatherController = require('../controllers/weather.controller');
router.get('/api/v1/weather', WeatherController.getWeather);

module.exports =router 