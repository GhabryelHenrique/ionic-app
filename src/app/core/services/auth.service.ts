import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: any = environment.baseurl;

constructor(private http: HttpClient) { }


getAll(){
  return this.http.get<any>(`${this.url}/pokemon/ditto`);
}
}