import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { Friend } from '../model/friend';
import { Item } from '../model/item';
import { FriendsService } from '../friends/friends.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  title: string;
  friends: Array<Friend>;
  friendsList: Array<Friend>;
  items: Array<Item>;

  itemForm: FormGroup;

  user;

  constructor(
    private friendsService: FriendsService,
    private formBuilder: FormBuilder
  ) { }

  async ngOnInit() {
    this.itemForm = this.formBuilder.group({
      name: [null, Validators.required],
      quantity: [null, Validators.required]
    });

    //this.friendsList = this.friendsService.getAllFriends(this.user.uid)();
  }

}
