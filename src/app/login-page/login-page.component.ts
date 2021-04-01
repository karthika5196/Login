import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  register: FormGroup;
  myclass = false;
  password;
  user: any = {};
  mytexttype=false;
  
  constructor(public formBuilder: FormBuilder, private service:ServiceService, private router:Router) { }

  ngOnInit(): void {


    this.register = this.formBuilder.group({

      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]
      ],
      password: ['', Validators.required]
    });

  }

  postdata() {
    console.log(this.register);
    console.log(this.register.value);
    this.user = Object.assign(this.user, this.register.value);
    this.service.addUsers(this.user);
      this.router.navigateByUrl('home');
    
    // this.router.navigateByUrl('/home');
    // localStorage.setItem('Current User',JSON.stringify(this.user));
  }
  // addUsers(user) {
  //   let users = [ ];
  //   if (localStorage.getItem('Users')) {
  //     users = JSON.parse(localStorage.getItem('Users'));
  //     users = [user,  ...users];
    
  //   } else {
  //     users = [user];
  //   }
  //   localStorage.setItem('Current User', JSON.stringify(users));
  // }


  clearall() {
    this.register.reset();
  }


  
  
  togglepassword(){
    this.myclass=!this.myclass;
    this.mytexttype=!this.mytexttype;
    console.log(this.mytexttype);
}
  }



  


