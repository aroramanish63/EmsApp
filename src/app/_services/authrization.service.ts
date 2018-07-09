import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppGlobals } from '../app.globals';
import { map } from '../../../node_modules/rxjs/operator/map';

@Injectable()
export class AuthrizationService {

  constructor(private httpclient:HttpClient, private appglobal:AppGlobals) { }

  login(user:string,pass:string){
    return this.httpclient.post<any>(this.appglobal.requestUrl,{action:'login',username:user,password:pass})
    .map(user=>{
      if(user.number == 200){
        localStorage.setItem('currentUser',JSON.stringify(user));
        return user;
      }
    });
  }

  logout(){
    localStorage.removeItem('currentUser');
  }

}
