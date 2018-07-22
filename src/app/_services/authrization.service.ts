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
    console.log("In login service");
    console.log(user);
console.log(this.appglobal);
    // let headers = new HttpHeaders();
    //headers = headers.append('Access-Control-Allow-Origin', '*');
//    headers = headers.append("Accept","application/json");

// headers = headers.append("Access-Control-Allow-Origin", "*");
// headers = headers.append("Access-Control-Allow-Headers", "*");
// headers = headers.append("Content-Type","text/plain"); // 
// headers = headers.append("Access-Control-Allow-Methods", 'GET, POST, PUT, DELETE');
// console.log(headers);

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded'
  })
};
let postdata = {
    action:'login',
    username:user,
    password:pass
  };
  // this.appglobal.requestUrl += '?'+;
  console.log(this.createPostUrl(postdata));
    return this.httpclient.post<any>(this.appglobal.requestUrl,this.createPostUrl(postdata),httpOptions)
    .map(user=>{
      console.log(user.number);
      if(user.number == 200){
        localStorage.setItem('currentUser',JSON.stringify(user));
        return user;
      }
    });
  }

  logout(){
    localStorage.removeItem('currentUser');
  }

  createPostUrl(postData){
    if(postData !== ''){
      var query = "";
      for (let key in postData) {
          query += encodeURIComponent(key)+"="+encodeURIComponent(postData[key])+"&";          
      }
      query = query.substring(0,query.length-1);
      return query;
    }
  }

}
