import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-menu',
  templateUrl: './dynamic-menu.component.html',
  styleUrls: ['./dynamic-menu.component.css']
})
export class DynamicMenuComponent implements OnInit {

  objectKeys = Object.keys;

  my_menu = {
    'main1': ['sub11', 'sub22'],
    'main2': ['sub1', 'sub2', 'sub3'],
  };
  constructor() { }

  ngOnInit() {
  }

}
