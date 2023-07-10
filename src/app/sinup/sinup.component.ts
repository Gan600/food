

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sinup',
  templateUrl: './sinup.component.html',
  styleUrls: ['./sinup.component.css']
})
export class SinupComponent {
  username: any;
  email: any;
  password: any;

  constructor(private http: HttpClient, private router: Router) { }


  signup() {
    this.http.post('http://localhost:5000/signup', { username: this.username, email: this.email, password: this.password })
      .subscribe((response: any) => {
        console.log(response);
        // Handle the signup response
        if (response.success) {
          this.router.navigate(['dashboard/login']);
        } else {
          // Handle signup failure
        }
      });
  }

}





