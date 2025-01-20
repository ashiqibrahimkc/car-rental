import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarListComponent } from "./components/car-list/car-list.component";
import { BookingsComponent } from "./components/bookings/bookings.component";

const routers:Routes=[
{path:'',redirectTo:"booking",pathMatch:"full"},
{path:'car',component:CarListComponent},
{path:'booking',component:BookingsComponent}
]
@NgModule({
    imports:[
        RouterModule.forRoot(routers)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{

}