import { Component } from '@angular/core';
import { AuthService } from 'src/app/APIServices/auth.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  customers: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }
  loadCustomers(): void {
    this.authService.getCustomers().subscribe(items => {
      this.customers = items;
      console.log(items)
          //  alert(items.data)
    });
  }
}
