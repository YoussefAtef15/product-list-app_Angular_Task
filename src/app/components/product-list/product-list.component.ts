import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.http.get<any[]>('https://fakestoreapi.com/products').subscribe(apiProducts => {
      const localProducts = JSON.parse(localStorage.getItem('products') || '[]');

      // Merge fakestore products with locally added products
      this.products = [...apiProducts, ...localProducts];

      this.route.queryParams.subscribe((params: { [key: string]: any }) => {
        const search = (params['search'] || '').toLowerCase();
        this.filteredProducts = this.products.filter(p =>
          p.title.toLowerCase().includes(search)
        );
      });
    });
  }
}
