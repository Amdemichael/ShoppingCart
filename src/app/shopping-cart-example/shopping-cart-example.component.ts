import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-example',
  templateUrl: './shopping-cart-example.component.html',
  styleUrls: ['./shopping-cart-example.component.css'],
})
export class ShoppingCartExampleComponent implements OnInit {
  catgories!: any[];

  products!: any[];

  constructor() {}

  ngOnInit(): void {
    this.getAllCatagories();
  }

  getAllCatagories() {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((data) => {
        data.unshift('all');
        this.catgories = data;
      });
  }

  getAllProductsCategoriesWise(url: string) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.products = data;
      });
  }

  onCategoryChanged(e: any) {
    if (e.target.value == 'all') {
      this.getAllProductsCategoriesWise('https://fakestoreapi.com/products');
    } else {
      this.getAllProductsCategoriesWise(
        `https://fakestoreapi.com/products/category/${e.target.value}`
      );
    }
  }
}
