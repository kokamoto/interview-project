import { Component, OnInit } from '@angular/core';

type Item = {
  id: string;
  name: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'interview-project';
  items: Item[] = [];

  ngOnInit(): void {
      this.items = [{
        id: '001',
        name: 'Pencil',
        price: 0.5
      }, {
        id: '002',
        name: 'Eraser',
        price: 0.4
      }];
  }
}
