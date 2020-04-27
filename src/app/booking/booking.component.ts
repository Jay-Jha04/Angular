import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent{
    form = new FormGroup({
        name : new FormControl('', [Validators.required]),
        address : new FormControl('', [Validators.required]),
        state : new FormControl('', [Validators.required]),
        country : new FormControl('', [Validators.required]),
        contact : new FormControl('', [Validators.required, Validators.pattern("[0-9]*"), Validators.maxLength(10), Validators.minLength(10)])
      });

}