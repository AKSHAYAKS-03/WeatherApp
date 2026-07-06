import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService, WeatherForecast } from '../weather.service';

@Component({
  selector:'app-weather',
  standalone:true,
  imports:[CommonModule],
  templateUrl:'./weather.html',
  styleUrl:'./weather.css'
})
export class WeatherComponent implements OnInit{

  private weatherService=inject(WeatherService);

  weatherData=signal<WeatherForecast[]>([]);
  loading=signal(false);
  error=signal('');

  ngOnInit():void{
    this.loadWeather();
  }

  loadWeather():void{

    this.loading.set(true);
    this.error.set('');

    this.weatherService.getWeather().subscribe({

      next:(data)=>{

        this.weatherData.set(data);
        this.loading.set(false);

      },

      error:()=>{

        this.error.set("Failed to load weather data.");
        this.loading.set(false);

      }

    });

  }

}