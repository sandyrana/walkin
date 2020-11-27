import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

 
test: any;
constructor(private router: Router) {
  const navigation = this.router.getCurrentNavigation();
  const state = navigation.extras.state as {
    email: any,
    username: any,
    picture: any,   
   
  };
  this.test = state;
  console.log(this.test)
}


  ngOnInit() {
  }

}
