import { Component, OnInit } from '@angular/core';
import { FriendsService } from './friends.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Friend } from '../model/friend';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  public friendForm: FormGroup;
  public friend: Friend;
  public friends;
  private uid = 'AS11';

  constructor(
    private friendsService: FriendsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.friendForm = this.formBuilder.group({
      code: [null, [Validators.required, Validators.minLength(4)]]
    });

    this.getAllFriends();
  }

  verifyValidTouched(field: any) {
    if (this.friendForm.get(field).invalid && this.friendForm.dirty) {
      return true;
    }
    return false;
  }

  aplyCssError(field: string) {
    return {
      'has-error': this.verifyValidTouched(field)
    };
  }

  addFriend() {
    return this.friendsService.addFriend(this.uid, this.friend);
  }

  async findFriend() {
    if (this.friendForm.valid) {
      this.friend = await this.friendsService.getFriend(this.friendForm.get('code').value);
    }
  }

  getAllFriends() {
    this.friendsService.getAllFriends(this.uid).onSnapshot((doc) => {
      this.friends = doc.docs[0].data().friends;
    });
  }

  deleteFriend(friend: Friend) {
    if(friend != undefined) {
      this.friendsService.deleteFriend(this.uid, friend);
    }
  }

  closeCard() {
    this.friend = null;
  }

}
