import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthrizationService } from '../_services/authrization.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../_services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model:any = {};
  loading:boolean = false;
  returnUrl: string;

  constructor(
    private renderer:Renderer2, 
    private authservice:AuthrizationService,
    private router:Router,
    private route:ActivatedRoute,
    private alert:AlertService
  ) {
      renderer.removeClass(document.body, document.body.className);
      renderer.addClass(document.body, 'login');
   }

  ngOnInit() {
    this.authservice.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onLogin(){
    this.loading = true;
    console.log("In Login function");
    console.log(this.model);
    this.authservice.login(this.model.username, this.model.password)
    .subscribe(data=>{
      this.router.navigate([this.returnUrl]);
    },
    error=>{
      this.alert.error(error);
      this.loading = false;
    }
  )
  }

}
