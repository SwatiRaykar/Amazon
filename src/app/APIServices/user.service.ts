import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userName = new BehaviorSubject<string>('');
  
  constructor() { }

  setUserName(name: string): void {
    this.userName.next(name);
  }

  getUserName() {
    return this.userName.asObservable();
  }
}
