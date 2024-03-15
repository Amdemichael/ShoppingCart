import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-example',
  templateUrl: './shopping-cart-example.component.html',
  styleUrls: ['./shopping-cart-example.component.css'],
})
export class ShoppingCartExampleComponent implements OnInit {
  catgories!: any[];

  constructor() {}

  ngOnInit(): void {
    this.getAllCatagories();
  }

  getAllCatagories() {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((data) => {
        data.unshift('All Categories');
        this.catgories = data;
      });
  }
}
