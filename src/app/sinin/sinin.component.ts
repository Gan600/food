

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-sinin',
  templateUrl: './sinin.component.html',
  styleUrls: ['./sinin.component.css']
})
export class SininComponent {
  username: any;
  password: any;

  constructor(private http: HttpClient, private router: Router) { }


  
  login() {
    this.http.post('http://localhost:5000/login', { username: this.username, password: this.password })
      .subscribe((response: any) => {
        console.log(response);
        // Handle the login response
        if (response.success) {
          this.router.navigate(['/home2']);
        } else {
          // Handle invalid credentials
        }
      });
  }

}

