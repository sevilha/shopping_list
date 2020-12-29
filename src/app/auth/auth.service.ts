import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginWithGoogle() {
    const provider = new firebase.default.auth.GoogleAuthProvider;
    firebase.default.auth().signInWithPopup(provider)
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
    firebase.default.auth().signOut()
      .catch(err => console.log('%c Error to signOut: ', 'color: orange', err))
  }

  getToken(): Promise<any> {
    return new Promise((resolve, reject) => {
      const unsubscribe = firebase.default.auth().onAuthStateChanged((user) => {
        unsubscribe();
        if (user) {
          user.getIdToken().then((idToken) => {
            resolve(idToken);
          }, (error) => {
            resolve(null);
          });
        } else {
          resolve(null);
        }
      });
    });
  }
}
