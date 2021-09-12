import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flat } from '../models/flat';

@Injectable({ providedIn: 'root' })

export class FlatService {

  private baseURL = 'http://localhost:8080/Flat'

  constructor(private http: HttpClient) { }

  getAllFlats(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  getFlatByPk(flatNo: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${flatNo}`);
  }

  getFlatByOwnerName(ownerName: string): Observable<any> {
    return this.http.get(`${this.baseURL}/${ownerName}`);
  }

  updateFlat(flat: Flat): Observable<any> {
    return this.http.put(this.baseURL, flat, { responseType: "text" });
  }

  deleteFlat(flatNo: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${flatNo}`, { responseType: "text" });
  }

  addFlat(flat: Flat): Observable<any> {
    return this.http.post(`${this.baseURL}`, flat, { responseType: "text" });
  }
}
