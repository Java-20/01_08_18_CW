import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ItemsService} from '../items.service';
import {ItemModel} from '../item.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
  // providers:[ItemsService]
})
export class FormComponent {
  // itemsService:ItemsService;
  @ViewChild('inputName') input:ElementRef;
  constructor(private itemService:ItemsService) {
    // this.itemsService = itemService;
  }

  add():void{
    this.itemService.items.push(new ItemModel(this.input.nativeElement.value));
  }
}
