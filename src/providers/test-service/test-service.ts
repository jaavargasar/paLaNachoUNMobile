import { Injectable,Injector } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase/app';

import {AngularFireAuth} from 'angularfire2/auth';

import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {HomePage} from '../../pages/home/home'

/*
  Generated class for the TestServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const identifier ="token";

@Injectable()
export class TestServiceProvider {

  public token: string;

  constructor(private angularAuth: AngularFireAuth,
              private storage: Storage,
              protected injector: Injector, ){
    this.setUp();
  }


  setUp(){


    //this.token = this.getTokenFromLS();
    this.getTokenFromLS();
    console.log(this.token);
    this.angularAuth.authState.subscribe( (firebaseUser)=>{
      if(firebaseUser){
        this.storage.set(identifier,firebaseUser.uid);
        this.token =firebaseUser.uid;
      }
      else{
        this.storage.remove(identifier);
        //localStorage.removeItem(identifier);
        this.token =null;
      }
    })
  }

  getTokenFromLS(){
    return this.storage.get(identifier).then((val) => {
      this.token = val; //se deberia modificar
    });
  }


  logOut(){
    return this.angularAuth.auth.signOut().then( ()=>{
      this.token = null;
    })
  }

  get MynavCtrl(): NavController {
    return this.injector.get(NavController);
  }

  loginWithGoogle(){
    var provider= new firebase.auth.GoogleAuthProvider();
    //signInWithRedirect
    //signInWithPopup

    return this.angularAuth.auth.signInWithRedirect(provider)
        .then(result =>{
          return firebase.auth().getRedirectResult;
        });

  }
}
