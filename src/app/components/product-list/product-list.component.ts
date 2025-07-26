import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient) {}

ngOnInit() {
  this.http.get<any[]>('https://fakestoreapi.com/products')
    .subscribe(data => {
      this.products = data;
      console.log(this.products); // اطبع البيانات عشان تتأكد إنها وصلت
    });
}

}
