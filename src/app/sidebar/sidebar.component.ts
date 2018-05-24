import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  selected:any;
  showDiv:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onSelect(selectedItem){
      this.selected = selectedItem !== '' ? selectedItem : null;
  }

  isActiveClass(selectedItem){
      this.showDiv = this.selected == selectedItem ? true : false;
      return this.showDiv; 
  }

  showDivVal(){
    console.log(this.showDiv)
    return this.showDiv;
  }
}
