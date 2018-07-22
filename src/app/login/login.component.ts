import { Component, OnInit, Renderer2 } from '@angular/core';
import { AuthrizationService } from '../_services/authrization.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model:any = {};
  loading:false;
  returnUrl: string;

  constructor(
    private renderer:Renderer2, 
    private authservice:AuthrizationService,
    private router:Router,
    private route:ActivatedRoute
  ) {
      renderer.removeClass(document.body, document.body.className);
      renderer.addClass(document.body, 'login');
   }

  ngOnInit() {
    this.authservice.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onLogin(){
  }

}
