import { Component,NgZone } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { NavController } from '@ionic/angular';
import { Router,NavigationExtras } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {  
  constructor(
    private ngZone: NgZone,
    private router: Router,
    public fb : Facebook
   ){ 



  } 
      
  

  
  login() {


 this.fb.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
    this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
    
    if(profile['id']){
      const navigationExtras: NavigationExtras = {
      state: {
        email: profile['email'],
        first_name: profile['first_name'],
        picture: profile['picture_large']['data']['url'],
        username: profile['name']
      }
      };

        this.router.navigate(['/welcome'],navigationExtras)
   
    }

    });
  }); 
    
    }    

}




