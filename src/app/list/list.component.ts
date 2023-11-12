import { Component } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { FormsModule } from '@angular/forms';

class Item {
  purchase: string;
  price: number;
  done: boolean;

  constructor(purchase: string, price: number, done: boolean = false) {
    this.purchase = purchase;
    this.price = price;
    this.done = done;
  }
}

@Component({
  selector: 'purchase-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class PurchaseListComponent {
  title: string = 'List of purchases';
  text: string = '';
  price: number = 0;

  constructor(private localStorageService: LocalStorageService) {}

  saveData(data: any): void {
    this.localStorageService.saveData('toDoOnAngular', data);
  }

  loadData(): any {
    return this.localStorageService.getData('toDoOnAngular');
  }

  items: Item[] = this.loadData() || [
    { purchase: 'Bike', price: 1000, done: true },
    { purchase: 'Helmet', price: 20, done: false },
    { purchase: 'Sword', price: 2000, done: true }
  ];

  addItem(text: string, price: number): void {
    if (text.trim().length && price > 0) {
      this.items.push(new Item(text, price));
      this.saveData(this.items);
    }
  }
}
