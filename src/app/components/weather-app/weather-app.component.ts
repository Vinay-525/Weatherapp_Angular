import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent implements OnInit {
  location:string = "";
  completeAdd:string = "";
  lat:string ;
  lng:string ;
  weather:any="" ;
  constructor(public dataService:DataService) { }

  ngOnInit() {
  }
  onFire(){
    this.dataService.getLocation(this.location).subscribe(loc => {
      this.completeAdd = loc.results[0].formatted_address;
      this.lat = loc.results[0].geometry.location.lat;
      this.lng = loc.results[0].geometry.location.lng;

      this.dataService.getWeather(this.lat,this.lng).subscribe(weather => {
        this.weather = weather.currently.temperature;
        
      })
    })
    
  }


}




