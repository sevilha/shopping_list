import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AccountService } from './account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  private uid: string = 'jh89ujaAAhhha8Tt'
  account: User;

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.getAccountSettings();
  }

  private async getAccountSettings() {
    this.account = await this.accountService.getUserAccount(this.uid);
  }

}
