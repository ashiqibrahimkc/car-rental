import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car, rent} from '../../model/car';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageApiService {

  constructor(private http:HttpClient) { }

  storedata(cars:Car){
    this.http.post('https://ng--rent-car-default-rtdb.firebaseio.com/cars.json',cars).subscribe(response=>{
     response
    })
  }
  fetchdata():Observable<Car[]>{
    return this.http.get<{[key:string]:Car}>('https://ng--rent-car-default-rtdb.firebaseio.com/cars.json').pipe(map(response=>{
      return Object.keys(response).map(key=>response[key])
    }))
  }
  rentList(rent:rent){
    this.http.post('https://ng--rent-car-default-rtdb.firebaseio.com/rent.json',rent).subscribe(response=>{
      response
    })
  }
  fetchrent():Observable<rent[]>{
    return this.http.get<{[key:string]:rent}>('https://ng--rent-car-default-rtdb.firebaseio.com/rent.json').pipe(map(response=>{
      return Object.keys(response).map(key=>response[key])
    }))
  }
}

//hello world
