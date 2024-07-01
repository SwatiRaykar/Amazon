import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductsService } from '../APIServices/products.service';
import { UserService } from '../APIServices/user.service';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

  cartCount: number = 0;
  isclicked:boolean=false;

//After Logged in
userName: string = '';

  constructor(private productService: ProductsService,
     private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
   this.userService.getUserName().subscribe(name => {
      this.userName = name;
    });
    this.updateCartCount();
  }
  
  updateCartCount(): void {
    this.productService.getCartItems().subscribe(items => {
      this.cartCount = items.length;
    });
  }

  navigateToProducts(): void {
    this.router.navigate(['/products']).then(() => {
      this.productService.getProducts().subscribe(); // Ensures the items are fetched when navigated to
    });
  }
  
  navigateToCart(): void {
    this.router.navigate(['/cart']).then(() => {
      this.productService.getCartItems().subscribe(); // Ensures the cart items are fetched when navigated to
    });
  }

  
}
