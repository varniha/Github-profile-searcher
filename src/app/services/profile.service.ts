import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class ProfileService {

  private username:string;
  private clientid = 'f3571d8e55e169540825';
  private clientsecret = 'a6c2b7d8f7c691e771b1908873e1322028e097c4';

  constructor(private http:HttpClient) { 
  	console.log("service is now ready!");
  	this.username = 'varniha';
  }

  getProfileInfo(): Observable<any> {
  	return this.http.get<any>("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  	.pipe(
    map((res:any) => res)
    );
  }

  getProfileRepos(): Observable<any>{
  	return this.http.get<any>("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  	.pipe(
    map((res:any) => res)
    );
  }

  updateProfile(username:string){
  	this.username = username;
  }

}