import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observer } from 'rxjs';

const endpoint = 'list';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor() { }

  getListsByOwner(uid: string) {
    return firebase.firestore().collection(endpoint)
      .orderBy('date', 'asc')
      .where('owner', '==', uid)
  }

  getListisPartOfFriends(uid: string) {
    return firebase.firestore().collection(endpoint)
      .orderBy('date')
      .where('friends', 'array-contains', uid)
  }
}
