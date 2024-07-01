import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
private baseUrl:string="https://localhost:44323/api/Customer/"


  constructor(private http:HttpClient) {} 

  Sdata:number=0;
  setData(data:number) {
    // this.sharedData = data;
    this.Sdata= data;
    console.log("data set successfully:"+this.Sdata)
  }

  getData() {
    console.log("data get successfully:"+this.Sdata)
    return this.Sdata;

  }

  
  signUp(userObj:any){
return this.http.post<any>(`${this.baseUrl}RegisterCustomer`,userObj)

// .map((response:Response)=>response.json()).catch(this.errorHandler);

  }
  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}CustomerLogin`,loginObj)
  }

  ForgotPwD(forgotObj:any){
    return this.http.post<any>(`${this.baseUrl}ForgotPassword`,forgotObj)
  }

  ResetPwD(ResetObj:any){
    return this.http.post<any>(`${this.baseUrl}ResetPassword`,ResetObj)
  }

  BookAppointment(AppObj:any){
    return this.http.post<any>(`${this.baseUrl}BookAppointment`,AppObj)
  }
  ContactUs(AppObj:any){
    return this.http.post<any>(`${this.baseUrl}ContactUs`,AppObj)
  }

  getCustomers(): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}GetAllCustomers`);
  }

  isLoggedIn(): boolean {
    // Implement your authentication check logic here
    // For example, check if the user is logged in by verifying a token in local storage
    return !!localStorage.getItem('authToken');
  }

//   login(token: string): void {
//     Store the token in local storage
//    localStorage.setItem('authToken', token);
//  }

  logout(): void {
    // Remove the token from local storage
    localStorage.removeItem('authToken');
  }

}


