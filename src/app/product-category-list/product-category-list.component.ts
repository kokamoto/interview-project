import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrls: ['./product-category-list.component.css']
})
export class ProductCategoryListComponent implements OnInit {

  @Input() public category = '';

  constructor() { }

  ngOnInit(): void {
  }

}
