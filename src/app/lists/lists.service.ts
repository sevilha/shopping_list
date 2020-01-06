import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observer } from 'rxjs';

const endpoint = 'list';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor() { }

  getListsByOwner(uid: string): Promise<any> {
    return firebase.firestore().collection(endpoint)
      .orderBy('date', 'asc')
      .where('owner', '==', uid)
      .get()
      .then(actions => {
        return actions.docs.map(action => {
          const data = action.data();
          const id = action.id;
          return { id, ...data };
        });
      });
  }

  getListisPartOfFriends(uid: string): Promise<any> {
    return firebase.firestore().collection(endpoint)
      .orderBy('date')
      .where('friends', 'array-contains', uid)
      .get();
  }
}
