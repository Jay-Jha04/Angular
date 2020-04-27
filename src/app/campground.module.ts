import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampgroundComponent } from './campground/campground.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms'
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CampgroundRoutingModule } from './campground-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { BookingComponent } from './booking/booking.component';



@NgModule({
  declarations: [
    CampgroundComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ManageBookingComponent,
    NavbarComponent,
    BookingComponent
  ],
  imports: [
    CommonModule,
    CampgroundRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
   CampgroundComponent,
   NavbarComponent,
   CampgroundRoutingModule   
  ]
})
export class CampgroundModule { }
