import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

const endpoint = 'list';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor() { }

  getListsByOwner(uid: string): Promise<any> {
    const id = 1;
    return firebase.default.firestore().collection(endpoint)
      //.orderBy('date', 'asc')
      .where('owner', '==', id)
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
    return firebase.default.firestore().collection(endpoint)
      .orderBy('date')
      .where('friends', 'array-contains', uid)
      .get();
  }
}
