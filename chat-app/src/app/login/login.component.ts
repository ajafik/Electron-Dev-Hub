import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  error = '';

  constructor(private router: Router, private firebaseAuth: AngularFireAuth) {}
  ngOnInit(): void {
  }

  login(username: string, password: string) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(username, password).then(
      credential => {
        console.log(credential);
        this.router.navigate(['chat']);
      },
      err => {
        this.error = err.message || 'Unknown error';
      }
    );
  }
}
