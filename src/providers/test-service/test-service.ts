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
@Injectable()
export class TestServiceProvider {

  constructor(private angularAuth: AngularFireAuth){}

  loginWithGoogle(){
    let provider= new firebase.auth.GoogleAuthProvider();

    return this.angularAuth.auth.signInWithRedirect(provider)
        .then(result =>{
          return firebase.auth().getRedirectResult;
        });
  }
}
