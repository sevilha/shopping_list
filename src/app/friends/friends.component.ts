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
  //private friend: Friend;

  constructor(
    private friendsService: FriendsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.friendForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  verifyValidTouched(field) {
    if (this.friendForm.get(field).invalid) {
      return true;
    }
    return false;
  }

  aplyCssError(field: string) {
    return {
      'has-error': this.verifyValidTouched(field)
    };
  }

  addFriend(id: string) {
    return '';
  }

  getFriend(id: string) {
    if (id.length) {
      return id;
    }
  }

  getAllFriends() {
    return ['Carlos', 'Paulo'];
  }

}
