import { Component } from '@angular/core';
import {WeatherService} from './weather.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Forecast weather';
  address="";
  isWeather=false;
  isWeatherErr=false;
  weatherReport:any=false;
  constructor(public service:WeatherService){
    this.weatherReport=false;
    this.isWeather=false;
    this.isWeatherErr=false;
  }
  getAddress(location){

    this.weatherReport=false;
    this.isWeatherErr=false;

    this.service.getWeather(location).subscribe((res)=>{
      this.isWeather=true;
      this.isWeatherErr=false;

     this.weatherReport= `Hi! At your location  + ${res.address} 
                , it seems the temperature is " ${ res.result.temperature } f.
                It is expected ${res.result.summary}`
       
    },error=>{
        console.log(error.error);
        this.isWeather=true;
        this.isWeatherErr=true;
        this.weatherReport=error.error.message;
    });
  }
}
