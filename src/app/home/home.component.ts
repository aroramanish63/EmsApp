import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private renderer:Renderer2) {

    renderer.removeClass(document.body, document.body.className);
    if(localStorage.length > 0)
      renderer.addClass(document.body, 'nav-md');
    else
      renderer.addClass(document.body, 'login');
   }

  ngOnInit() {
  }

}
