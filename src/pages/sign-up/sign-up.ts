import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TestServiceProvider} from "../../providers/test-service/test-service";
import {Injectable, Injector} from '@angular/core';
import { HomePage } from '../home/home';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',

  animations: [

  //For the logo
  trigger('flyInBottomSlow', [
    state('in', style({
      transform: 'translate3d(0,0,0)'
    })),
    transition('void => *', [
      style({transform: 'translate3d(0,2000px,0'}),
      animate('2000ms ease-in-out')
    ])
  ]),

  //For the background detail
  trigger('flyInBottomFast', [
    state('in', style({
      transform: 'translate3d(0,0,0)'
    })),
    transition('void => *', [
      style({transform: 'translate3d(0,2000px,0)'}),
      animate('1000ms ease-in-out')
    ])
  ]),

  //For the login form
  trigger('bounceInBottom', [
    state('in', style({
      transform: 'translate3d(0,0,0)'
    })),
    transition('void => *', [
      animate('2000ms 200ms ease-in', keyframes([
        style({transform: 'translate3d(0,2000px,0)', offset: 0}),
        style({transform: 'translate3d(0,-20px,0)', offset: 0.9}),
        style({transform: 'translate3d(0,0,0)', offset: 1})
      ]))
    ])
  ]),

  //For login button
  trigger('fadeIn', [
    state('in', style({
      opacity: 1
    })),
    transition('void => *', [
      style({opacity: 0}),
      animate('1000ms 2000ms ease-in')
    ])
  ])
]


})
export class SignUpPage {

  logoState: any = "in";
  cloudState: any = "in";
  loginState: any = "in";
  formState: any = "in";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private auth: TestServiceProvider,
              protected injector: Injector) {
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad SignUpPage');
  }


  get MynavCtrl(): NavController {
    return this.injector.get(NavController);   }

  loginWithGoogle(){
    this.auth.loginWithGoogle();
  }

  redirectTo(){
    if(this.auth.token) this.MynavCtrl.setRoot(HomePage);
  }

}
