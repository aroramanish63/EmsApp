import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  message:any;
  constructor() { }

  ngOnInit() {
  }

}
