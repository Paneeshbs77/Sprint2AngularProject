import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlatRent } from '../models/flat-rent';

@Injectable({
  providedIn: 'root'
})
export class FlatRentService 
{
  
  private baseURL = 'http://localhost:8080/FlatRent'

  constructor(private http: HttpClient) { }

  getAllFlatRents(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  getFlatRentByPk(flatRentId: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${flatRentId}`);
  }

  updateFlatRent(flatrent: FlatRent): Observable<any> {
    return this.http.put(this.baseURL, flatrent, {responseType : "text"});
  }

  deleteFlatRent(flatRentId: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${flatRentId}`,{responseType : "text"});
  }

  addFlatRent(flatrent: FlatRent): Observable<any> {
    return this.http.post(`${this.baseURL}`, flatrent,{responseType : "text"});  
  }
}
