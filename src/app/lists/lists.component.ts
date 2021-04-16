import { Component, OnInit } from '@angular/core';
import { ListsService } from './lists.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
  preserveWhitespaces: true
})
export class ListsComponent implements OnInit {

  lists: Array<any>;
  uid: string = 'AS11';
  expanded = false;

  constructor(
    private listsService: ListsService
  ) { }

  async ngOnInit() {
    this.lists = await this.listsService.getListsByOwner(this.uid);
    console.log('Lists ', this.lists)
  }

  showMore() {
    this.expanded = !this.expanded;
  }

}
