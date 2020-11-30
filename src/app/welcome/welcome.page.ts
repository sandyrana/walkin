import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { checkAvailability } from '@ionic-native/core';
import { Stepcounter } from '@ionic-native/stepcounter/ngx';
// import { Pedometer} from '@ionic-native/pedometer/ngx';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
test: any;
constructor(private router: Router, private stepcounter: Stepcounter) {
  const navigation = this.router.getCurrentNavigation();
  const state = navigation.extras.state as {
    email: any,
    username: any,
    picture: any,   
   
  };
  this.test = state;


 let startingOffset = 0;

  this.stepcounter.start(startingOffset).then(onSuccess => 
    
    console.log('stepcounter-start success', onSuccess), 
    
    onFailure => console.log('stepcounter-start error', onFailure));

  this.stepcounter.getHistory().then(historyObj => 
    console.log('stepcounter-history success', historyObj), 
    onFailure => console.log('stepcounter-history error', onFailure));
 
    
    console.log(JSON.stringify(stepcounter.getStepCount()));
    console.log(JSON.stringify(stepcounter.getTodayStepCount()));
    console.log(JSON.stringify(stepcounter.deviceCanCountSteps()));
    console.log(JSON.stringify(stepcounter.getHistory()));
   
}





  ngOnInit() {
  }


}
