import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

import { List } from '../model/list';

const endpoint = 'list'
@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() {
  }

  getList(id: string): Promise<any> {
    return firebase.default.firestore().collection(endpoint).doc(id).get();
  }

  updateList(list: List): Promise<any> {
    return firebase.default.firestore().collection(endpoint).doc(list.id).update(list);
  }

  saveList(list: List): Promise<any> {
    return firebase.default.firestore().collection(endpoint).add(list);
  }

  deleteList(list: List): Promise<any> {
    return firebase.default.firestore().collection(endpoint).doc(list.id).delete();
  }

}
