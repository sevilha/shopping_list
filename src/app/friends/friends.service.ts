import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app'
import { Observable, Observer } from 'rxjs';
import { Friend } from '../model/friend';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor() {
  }

  async addFriend(uid: string, friend: Friend): Promise<any> {
    const { action, friends } = await this.litOfFriends(uid);
    friends.push(friend);
    action.docs[0].ref.set({
      friends: friends
    }, { merge: true });
  }

  getAllFriends(uid: string) {
    return firebase.default.firestore().collection('friends')
      .where('user', '==', uid);
  }

  async getFriend(id: string): Promise<any> {
    const actions = await firebase.default.firestore().collection('users')
      .where('code', '==', id)
      .get();
    return actions.docs[0].data();
  }

  async deleteFriend(uid: string, friend: any) {
    const { action, friends } = await this.litOfFriends(uid);
    const subArray = friends.filter((item: { code: any; }) => item.code !== friend.code);
    action.docs[0].ref.set({
      friends: subArray
    }, { merge: true });
  }

  private async litOfFriends(uid: string) {
    const action = await firebase.default.firestore().collection('friends')
      .where('user', '==', uid)
      .get();
    const friends = action.docs[0].data().friends;
    return { action, friends };
  }
}
