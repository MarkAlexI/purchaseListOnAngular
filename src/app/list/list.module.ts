import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PurchaseListComponent } from './list.component';
import { ActiveDirective } from '../directive/active.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    PurchaseListComponent,
    ActiveDirective
  ],
  exports: [PurchaseListComponent]
})

export class PurchaseListModule { }
