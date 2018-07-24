import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  selected:any;
  showDiv:boolean = false;
  public FullName:string;
  constructor() {
    if(localStorage.length>0){
    let userObj=JSON.parse(localStorage.getItem('currentUser'));
    console.log(userObj);
    this.FullName=userObj.Users.first_name+ ' '+userObj.Users.last_name;
    }
    else
     this.FullName="No Name";
   }

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
