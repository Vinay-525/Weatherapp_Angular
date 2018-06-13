import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()

export class DataService{
  constructor(public http:Http){

  }
  getLocation(location){
    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyARnSygfK7njVh1q8durKRypnm3R52oty4`)
      .pipe(map(res => res.json()))
  }

  getWeather(lat,lng){
    return this.http.get(`https://api.darksky.net/forecast/7bac5bdb13ecb59ac7b98671eb7c4db8/${lat},${lng}`)
      .pipe(map(res => res.json()))
  }
}