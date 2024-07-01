import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../APIServices/products.service';
import { ActivatedRoute, Router } from '@angular/router';

export interface Product{
  Id: number;
  imageURL:string;
  name: string;
  description: string;
  price: number;
  marketPrice:number;
  NOofRatings:number;
  TotalBuyCustomers:number
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit
 {   products: any[] = [];
  message: string = '';
  constructor( private router: Router,private productService: ProductsService) {}

  ngOnInit(): void {
    this.loadProducts();
  }


  loadProducts(): void {
    this.productService.getProducts().subscribe(items => {
      this.products = items;
      console.log(items.data)
          //  alert(items.data)
    });
  }

  
  addToCart(ProductId: number ,quantity: number) :void{
    this.productService.addToCart(ProductId,quantity).subscribe(response => {
      this.message = 'Product added to cart successfully!';
      console.log(response)
           alert(response.data)
    });
  }

 
}
