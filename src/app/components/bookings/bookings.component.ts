import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { Car, rent } from '../../model/car';
import { NavserviceService } from '../service/navservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageApiService } from '../service/storage-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent implements OnInit,AfterViewChecked,OnDestroy{
  isSidePanelVisible:boolean=false;
  carLists:Car[]=[];
  rentLists:rent[]=[];
  subscription:Subscription[]=[];
  butonClick:boolean=false;
  addForms:FormGroup;
  selectedCar:string
constructor(private shareser:NavserviceService,private ser:StorageApiService){}
  
  ngOnInit(): void {
    this.subscription.push
    this.shareser.currentItem.subscribe(item=>item)
    this.addForms=new FormGroup({
      'customername':new FormControl(null,[Validators.required]),
      'mobileno':new FormControl(null,[Validators.required]),
      'car':new FormControl(null,[Validators.required]),
      'date':new FormControl(null,[Validators.required]),
      'renttype':new FormControl(null,[Validators.required]),
      'duration':new FormControl(null,[Validators.required]),
      'nocar':new FormControl(null,[Validators.required])
    })
    this.getCar()
    this.getRentList();
  }
  ngAfterViewChecked(): void {
    if(this.butonClick=true){
      this.getRentList();
    }
    this.butonClick=false;
  }
  ngOnDestroy(): void {
    this.subscription.forEach(s=>s.unsubscribe());
  }
  onSubmit(){
    var add=this.addForms.value
    this.ser.rentList(add)
    this.addForms.reset();
    this.butonClick=true;
  }
  onClear(){
    this.addForms.reset();
  }
  getCar(){
    this.subscription.push
    this.ser.fetchdata().subscribe(res=>{
      this.carLists=res;
    })
  }
  getRentList(){
    this.subscription.push
    this.ser.fetchrent().subscribe(res=>{
      this.rentLists=res;
    })
  }
}
