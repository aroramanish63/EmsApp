import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private renderer:Renderer2) {
      renderer.removeClass(document.body, document.body.className);
      renderer.addClass(document.body, 'login');
   }

  ngOnInit() {
  }

}
