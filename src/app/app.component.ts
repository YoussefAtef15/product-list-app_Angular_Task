import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  template: `<app-product-list></app-product-list>`
})
export class AppComponent {}
