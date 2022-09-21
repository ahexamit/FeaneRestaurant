import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  public arrayData: Array<any> = [];
  constructor(private http: HttpClient) {
  }
public setData(data:any){
  this.arrayData.push(data);
  console.log(this.arrayData);


}
  public getJson(): Observable<any> {
    return this.http.get('./assets/data.json');
  }
}
