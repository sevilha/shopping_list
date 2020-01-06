import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app'
import { Friend } from '../model/friend';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor() {
  }

  addFriend(friend: Friend): Promise<any> {
    return firebase.firestore().collection('friends').add(friend);
  }

  getAllFriends(uid: string): Promise<any> {
    return firebase.firestore().collection('friends').where('friendOf', '==', uid).get();
  }

  getFriend(id: string): Promise<any> {
    return firebase.firestore().collection('friends').doc(id).get();
  }
}
