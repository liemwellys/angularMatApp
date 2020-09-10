import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule, // for grid column
    MatFormFieldModule, // form
    MatInputModule, // input
    MatRadioModule, // mat-radio-group - radio button
    MatDatepickerModule, // matDatepicker - datepicker
    MatNativeDateModule, // required for datepicker
    MatSelectModule, // mat-select - dropdown
    MatCheckboxModule, // mat-checkbox - checkbox
    MatButtonModule, // for button
  ],
  exports: [
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
  ]
})
export class MaterialModule { }
