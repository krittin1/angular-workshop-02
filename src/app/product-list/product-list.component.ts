import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor() {}

  ngOnInit(): void {
    const p1 = new Product('01', 'CPU core i5', 100);
    const p2 = new Product('02', 'Computer Laptop Dell', 2.34567);
    const p3 = new Product('03', 'Display Pro 2020', 199990.0);
    this.products.push(p1);
    this.products.push(p2);
    this.products.push(p3, new Product('03', 'Amazing Keyboard 2020', 2.1));
  }
}
