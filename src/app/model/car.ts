export interface Car{
    carId:number;
    carName:string;
    ratePerHr:number;
    ratePerDay:number;
    carImage:string;
   
}
export interface rent{
    customerName:string;
    mobileNo:number;
    selectCar:string;
    date:Date;
    rentType:string;
    rentDuration:number;
    noCars:number;
}
