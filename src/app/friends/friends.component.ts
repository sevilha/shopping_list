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
  public friends: Array<Friend>[];
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

  addFriend(friend: Friend) {
    return this.friendsService.addFriend(friend);
  }

  async getFriend(id: string) {
    if (this.friendForm.valid) {
      this.friend = await this.friendsService.getFriend(id);
    }
  }

  async getAllFriends() {
    this.friends = await this.friendsService.getAllFriends(this.uid);
    console.log('Friends ----> ', this.friends)
  }

}
