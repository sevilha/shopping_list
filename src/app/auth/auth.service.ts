import { Injectable } from '@angular/core';
import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(

  ) { }

  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider;
    firebase.auth().signInWithPopup(provider)
      .then(
        credential => {
          localStorage.setItem('user', JSON.stringify(credential.user));
        }
      )
      .catch(
        err => console.log('%c Error to login with google: ', 'color: orange', err)
      )
  }

  logout() {
    firebase.auth().signOut()
      .catch(err => console.log('%c Error to signOut: ', 'color: orange', err))
  }
}
