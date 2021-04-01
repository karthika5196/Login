import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 
  constructor(private http:HttpClient) { }

  addUsers(user) {
    let users = [ ];
    if (localStorage.getItem('Current User')) {
      users = JSON.parse(localStorage.getItem('Current User'));
      users = [user,  ...users];
    
    } else {
      users = [user];
    }
    localStorage.setItem('Current User', JSON.stringify(users));
    localStorage.setItem('logged User',user.email) ;

  }
  ondestroy(){
    localStorage.clear();
  }
  getdata(){
    const url='http://localhost:3000/Items';
    return this.http.get<any>(url);
  }
  // getactive(){
  //   const url='http://localhost:3000/Items';

  // }
}
