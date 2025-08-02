// src/app/components/admin/product-admin.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent implements OnInit {
  products: any[] = [];
  newProduct = { title: '', price: '', image: '' };

  constructor(private router: Router) {}

  ngOnInit() {
    const user = localStorage.getItem('currentUser');
    if (!user) {
      alert('You must login first');
      this.router.navigate(['/login']);
      return;
    }

    const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');
    this.products = storedProducts;
  }

  addProduct() {
    const { title, price, image } = this.newProduct;

    if (!title || !price || !image) {
      alert('All fields are required');
      return;
    }

    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice)) {
      alert('Price must be a valid number');
      return;
    }

    const id = Date.now();
    const product = {
      id,
      title: title.trim(),
      price: parsedPrice,
      image: image.trim()
    };

    this.products.push(product);
    localStorage.setItem('products', JSON.stringify(this.products));
    this.newProduct = { title: '', price: '', image: '' };
    alert('Product added successfully!');
  }

  deleteProduct(index: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.products.splice(index, 1);
      localStorage.setItem('products', JSON.stringify(this.products));
    }
  }
}
