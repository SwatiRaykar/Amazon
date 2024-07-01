import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../APIServices/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductsService) {}

  

  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts(): void {
    this.productService.getProducts().subscribe(items => {
      this.products = items;
      console.log(items)
          //  alert(items.data)
    });
  }

  removeProduct(productId: number): void {
    this.productService.removeProduct(productId).subscribe(
      () => {
        this.products = this.products.filter(item => item.id !== productId);
      },
      (error) => {
        console.error('Error removing product:', error);
      }
    );
  }
}
