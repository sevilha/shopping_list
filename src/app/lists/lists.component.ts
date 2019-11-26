import { Component, OnInit } from '@angular/core';
import { ListsService } from './lists.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  lists: Array<any>;
  uid: string;

  constructor(
    private listsService: ListsService
  ) { }

  async ngOnInit() {
    this.lists = await this.listsService.getListsByOwner(this.uid);
  }

}
