import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

const endpoint = 'lists';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor() { }

  getListsByOwner(uid: string): Promise<any> {
    return firebase.default.firestore().collection(endpoint)
      .orderBy('created_at', 'desc')
      .where('owner', '==', uid)
      .where('excluded', '==', false)
      .where('finished', '==', false)
      .get()
      .then(actions => {
        return actions.docs.map(action => {
          const data = action.data();
          const id = action.id;
          return { id, ...data };
        });
      });
  }

  getListsPartOfFriends(uid: string): Promise<any> {
    return firebase.default.firestore().collection(endpoint)
      .orderBy('date')
      .where('friends', 'array-contains', uid)
      .get();
  }
}
