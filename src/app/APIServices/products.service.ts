import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'https://localhost:44323/api/Product'; 
  
  constructor(private http: HttpClient) { }

getProducts(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/GetAllProducts`);
  }
  getOrders(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/GetAllOrders`);
  }
addToCart(ProductId: number,quantity: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/AddToCart`, { ProductId,quantity });
  }

  getCartItems(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/GetCartItems`);
  }

  removeProduct(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remove/${productId}`);
  }

  // addProduct(product: any): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, product);
  // }
  addProduct(userObj:any){
    return this.http.post<any>(`${this.apiUrl}/AddProduct`,userObj)
    
}

placeOrder(productId: number): Observable<any> {
  return this.http.post<any>(this.apiUrl, { productId });
}
}
