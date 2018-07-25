import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public bodyClass:string;
  constructor(private renderer:Renderer2) { }

  ngOnInit() {
  }

  toggleSidebar(){
    this.bodyClass = document.body.className == 'nav-md' ? 'nav-sm' : 'nav-md';
    this.renderer.removeClass(document.body,document.body.className);
    this.renderer.addClass(document.body,this.bodyClass);
  }

}
