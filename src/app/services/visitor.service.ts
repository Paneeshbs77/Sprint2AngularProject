import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Visitor } from '../models/visitor';


@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  baseURL='http://localhost:8080/visitors'

  constructor(private http: HttpClient) { }

getAllVisitors():Observable<any>{
return this.http.get(this.baseURL);
}

getVisitorById(visitorId:number):Observable<any>{
  return this.http.get(`${this.baseURL}/${visitorId}`);
}

getVisitorByName(name:string):Observable<any>{
  return this.http.get(`${this.baseURL}/${name}`);
}

updateVisitor(visitor:Visitor):Observable<any>{
return this.http.put(this.baseURL,visitor,{responseType:"text"});
}

deleteVisitor(visitorId:number):Observable<any>{
  return this.http.delete(`${this.baseURL}/${visitorId}`,{responseType:"text"});
}

addVisitor(visitor:Visitor):Observable<any>{
  return this.http.post(`${this.baseURL}`,visitor,{responseType:"text"});
}
}
