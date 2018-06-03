import { Component, Renderer2 } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private renderer: Renderer2, private location:Location){
    renderer.removeClass(document.body, document.body.className);
    if(location.path() !== '')
      renderer.addClass(document.body, 'nav-md');
    else
      renderer.addClass(document.body, 'login');
  }
}
