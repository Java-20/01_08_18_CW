import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../items.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
  // providers:[ItemsService]
})
export class ListComponent {

  constructor(public itemService:ItemsService) { }

}
