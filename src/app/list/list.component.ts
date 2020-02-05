import { Component, OnInit, Input } from '@angular/core';
import { List } from '../model/list';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { ListService } from './list.service';
import { Friend } from '../model/friend';
import { Item } from '../model/item';
import { FriendsService } from '../friends/friends.service';
import { User } from 'firebase';

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

  user: User;

  constructor(
    private listService: ListService,
    private friendsService: FriendsService,
    private formBuilder: FormBuilder
  ) { }

  async ngOnInit() {
    this.itemForm = this.formBuilder.group({
      name: [null, Validators.required],
      quantity: [null, Validators.required]
    });

    this.friendsList = await this.friendsService.getAllFriends(this.user.uid);
  }

}
