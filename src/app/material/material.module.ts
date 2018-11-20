import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatSelectModule,
  MatToolbarModule } from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule
  ],
  declarations: []
})
export class MaterialModule { }
