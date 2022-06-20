import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: any = environment.baseurl;

constructor(private http: HttpClient) { }

login(body: any){
  return this.http.post<any>(`${this.url}/login`, body);
}

getAll(body: any){
  return this.http.post<any>(`${this.url}/register`, body);
}
}
