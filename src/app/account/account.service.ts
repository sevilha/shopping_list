import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  getUserAccount(uid: string) {
    return firebase.default.firestore().collection('users')
      .where('uid', '==', uid)
      .get()
      .then(data => {
        const settings = data.docs[0].data() as User;
        const id = data.docs[0].id;
        return { uid: id, ...settings };
      });
  }
}
