import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PurchaseListComponent } from './list.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ PurchaseListComponent],
  exports: [ PurchaseListComponent]
})

export class PurchaseListModule { }
