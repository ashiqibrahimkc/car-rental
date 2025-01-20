import {  Injectable } from '@angular/core';
import { Car } from '../../model/car';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavserviceService {
  private itemSource = new BehaviorSubject<Car[]>([]);
  currentItem=this.itemSource.asObservable();
  changeItems(items:Car[]){
    this.itemSource.next(items)
  }
}
 
