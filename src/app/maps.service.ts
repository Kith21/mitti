import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http:HttpClient) {}
  getTimezoneCount(){
    return this.http.get('http://localhost:9900/');

      }
      getMessageCount(){
        return this.http.get('http://localhost:9908/');

      }
 
}
