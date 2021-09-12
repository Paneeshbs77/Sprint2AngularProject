import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guard } from '../models/guard';


@Injectable({
  providedIn: 'root'
})
export class GuardService {

  baseURL='http://localhost:8080/GuardDetails'

  constructor(private http: HttpClient) { }

  getGuards():Observable<any> {
    return this.http.get(this.baseURL);
  }

  getGuardbyId(userId:number): Observable<any> {
    return this.http.get(`${this.baseURL}/${userId}`);
  }

  getGuardbyName(name:string): Observable<any>{
    return this.http.get(`${this.baseURL}/${name}`);
  }

  updateGuard(guard : Guard):Observable<any>{
    return this.http.put(this.baseURL,guard,{responseType:"text"});
  }

  deleteGuard(userId:number):Observable<any>{
    return this.http.delete(`${this.baseURL}/${userId}`,{responseType:"text"});
  }

  createGuard(guard:Guard):Observable<any>{
    return this.http.post(`${this.baseURL}`, guard,{responseType:"text"});
  }


}
