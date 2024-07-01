import { Component } from '@angular/core';
import { ProductsService } from 'src/app/APIServices/products.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orders: any[] = [];

  constructor(private ProductService: ProductsService) {}

  ngOnInit(): void {
    this.loadOrders();
  }
  loadOrders(): void {
    this.ProductService.getOrders().subscribe(items => {
      this.orders = items;
      console.log(items)
          //  alert(items.data)
    });
  }
}
