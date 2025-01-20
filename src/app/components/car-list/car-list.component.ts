import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { Car } from '../../model/car';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageApiService } from '../service/storage-api.service';
import { Subscription } from 'rxjs';
import { NavserviceService } from '../service/navservice.service';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent implements OnInit,AfterViewChecked,OnDestroy{
  
  addForms:FormGroup;
  btnClicked=false;
  carList:Car[]=[];
  subscription:Subscription[]=[];
  isSidePanelVisible:boolean=false;
  constructor(private ser:StorageApiService,private navser:NavserviceService){}
  ngOnInit(): void {
    this.addForms=new FormGroup({
      'carname':new FormControl(null,[Validators.required]),
      'image':new FormControl(null,[Validators.required]),
      'perhr':new FormControl(null,[Validators.required]),
      'perday':new FormControl(null,[Validators.required])
    })
    this.getCar()
  }
 
  ngAfterViewChecked(): void {
   
    if(this.btnClicked==true){
      this.getCar(); 
    }
    this.btnClicked=false;
    
  }
  ngOnDestroy(): void {
    this.subscription.forEach(s=>s.unsubscribe())
  }
  
  sendItems(){
    this.navser.changeItems(this.carList)
  } 
  getCar():void{
    this.subscription.push
    this.ser.fetchdata().subscribe(
      (response:Car[])=>{
        this.carList=response;
      }
    )
 
  }
 
  onSubmit(){
   var add=this.addForms.value
   
   this.ser.storedata(add)
   this.addForms.reset();
    this.btnClicked=true;
    this.sendItems();
  }
  onClear(){
    this.addForms.reset();
  }
  // onSave(){
  //   if(this.cars.carId==0){
  //     this.carList.push(this.cars);
  //     localStorage.setItem(this.localKeyName,JSON.stringify(this.carList))
  //   }
  // }
}
