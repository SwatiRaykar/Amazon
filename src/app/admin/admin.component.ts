import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../APIServices/products.service';
import { AuthService } from '../APIServices/auth.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private productService: ProductsService, private router: Router,private authService:AuthService) { }

  navigateToProducts(): void {
    this.router.navigate(['admin/products']).then(() => {
      this.productService.getProducts().subscribe(); // Ensures the items are fetched when navigated to
    });
  }

  navigateToCustomers(): void {
    this.router.navigate(['admin/customers']).then(() => {
      this.authService.getCustomers().subscribe(); // Ensures the cart items are fetched when navigated to
    });
  }
  navigateToOrders(): void {
    this.router.navigate(['admin/orders']).then(() => {
      this.productService.getOrders().subscribe(); // Ensures the cart items are fetched when navigated to
    });
  }
}
