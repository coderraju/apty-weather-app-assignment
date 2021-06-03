import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(location) {
    
    return this.http.get(`http://localhost:8080/api/v1/weather?address=${location}`)
    .pipe(map(response =>{
      console.log("resp",response)
      return response as any
    }))
  }
}
