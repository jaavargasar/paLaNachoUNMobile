import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase/app';

import {AngularFireAuth} from 'angularfire2/auth';

/*
  Generated class for the TestServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const identifier ="token";

@Injectable()
export class TestServiceProvider {

  public token: string;

  constructor(private angularAuth: AngularFireAuth){
    this.setUp();
  }

  setUp(){


    this.token = this.getTokenFromLS();
    console.log(this.token);
    this.angularAuth.authState.subscribe( (firebaseUser)=>{
      if(firebaseUser){
        localStorage.setItem(identifier,firebaseUser.uid);
        this.token =firebaseUser.uid;
      }
      else{
        localStorage.removeItem(identifier);
        this.token =null;
      }
    })
  }

  getTokenFromLS(): string{
    return localStorage.getItem(identifier);
  }

  logOut(){
    return this.angularAuth.auth.signOut().then( ()=>{
      this.token = null;
    })
  }

  loginWithGoogle(){
    let provider= new firebase.auth.GoogleAuthProvider();
    //signInWithRedirect
    //signInWithPopup
    return this.angularAuth.auth.signInWithRedirect(provider)
        .then(result =>{
          return firebase.auth().getRedirectResult;
        });
  }
}
