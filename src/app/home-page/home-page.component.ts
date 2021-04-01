import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  data: any;
  emailid = " ";
  public len: any;
  public datas: any = [];
  public leng: any = [];
  // @Input() public full;

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getdata().subscribe(data => {
      this.data = data;
      this.data.forEach(e => {
        this.datas.push(e);
      })
      console.log(this.datas);
      // console.log(this.data.length);
      // console.log(this.data);
      this.emailid = localStorage.getItem('logged User')
    });
  }
  active() {
    // console.log(this.data);

    this.data = this.datas.filter(e => {
      if (e.status == "active") {
        return this.data;
        // this.data.forEach(e => {
        //   this.leng.push(e);
        //   console.log(this.leng);
        //   console.log(this.leng.lent);
        // })
      }
    });

  }
  inactive() {

    this.data = this.datas.filter(e => {
      if (e.status == "inactive") {
        return this.data;
      }
    });

  }

  all() {
    // return this.datas;
    // this.data = this.datas;
    // return this.data;
    this.service.getdata().subscribe(data => {
      this.data = data;
      return this.data;
    });
  }


  logout() {
    this.service.ondestroy();
    this.router.navigateByUrl('/');
  }
  sorta() {
    this.data = this.data.sort((a, b) => a.name.localeCompare(b.name));
    console.log(this.data);
    return this.data;
    // this.pbiMini.sort((a, b) => a.name.localeCompare(b.name));
  }
    sortb() {
    this.data = this.data.sort((b, a) => a.name.localeCompare(b.name));
    console.log(this.data);
    return this.data;
  }
  // console.log(this.data.length);
}



