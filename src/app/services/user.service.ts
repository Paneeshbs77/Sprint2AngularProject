import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL = 'http://localhost:8080/User';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  getUser(roleId: number): Observable<any> {

    return this.http.get(`${this.baseURL}/${roleId}`);

  }

  updateUser(user: User):Observable<any> {

    return this.http.put(this.baseURL, user);
  }

  deleteUser(roleId: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${roleId}`,{responseType:"text"});
  }

  addUser(user: User) :Observable<any>{
    return this.http.post(`${this.baseURL}`,user,{responseType:"text"});
  }
  registerUser(user: User) :Observable<any>{
    return this.http.post(`${this.baseURL}`,user,{responseType:"text"});
  }

}


