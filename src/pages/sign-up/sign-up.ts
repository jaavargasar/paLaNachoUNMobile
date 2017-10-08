import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TestServiceProvider} from "../../providers/test-service/test-service";

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
})
export class SignUpPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private auth: TestServiceProvider) {
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad SignUpPage');
  }

  loginWithGoogle(){
    this.auth.loginWithGoogle();
  }

}
