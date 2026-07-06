import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WeatherForecast{
  date:string;
  temperatureC:number;
  temperatureF:number;
  summary:string;
}

@Injectable({
  providedIn:'root'
})
export class WeatherService{

  private http=inject(HttpClient);

  private apiUrl='https://sampleapi20260706g3-bvdacte9b0dvhudv.canadacentral-01.azurewebsites.net/Weatherforecast';

  getWeather():Observable<WeatherForecast[]>{
    return this.http.get<WeatherForecast[]>(this.apiUrl);
  }

}