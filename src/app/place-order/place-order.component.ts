import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../APIServices/products.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  product: any;
  message: string = '';

  constructor(private sharedService: SharedService, private ProductService: ProductsService) { }

  ngOnInit(): void {
    this.product = this.sharedService.getProduct();
  }
  placeOrder(): void {
    // Logic for placing the order
    this.message = 'Order placed successfully!';
    console.log('Order placed for product:', this.product);
   alert('Order placed successfully!')
  }
  
}
