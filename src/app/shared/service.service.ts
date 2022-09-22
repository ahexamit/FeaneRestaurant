import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  public set_Data: Array<any> = [];
  constructor(private http: HttpClient) {}
  //set Data//
  public setData(data: any) {
    this.set_Data.push(data);
    console.log(this.set_Data);
  }
  //get Data//
  public getJson(): Observable<any> {
    return this.http.get('./assets/data.json');
  }
}
