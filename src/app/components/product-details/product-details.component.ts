import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './product-details.component.html' ,
  styleUrls: ['./product-details.component.css']

})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`https://fakestoreapi.com/products/${id}`)
      .subscribe(data => this.product = data);
  }
}
