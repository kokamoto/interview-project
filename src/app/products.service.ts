import { Injectable } from '@angular/core';
import PRODUCTS from '../assets/products.json';

export type Product = {
  name: string;
  description: string;
  departement: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Product[] {
    return PRODUCTS;
  }
}
