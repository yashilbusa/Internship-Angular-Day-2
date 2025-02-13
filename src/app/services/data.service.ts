import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  private url = 'https://jsonplaceholder.typicode.com/posts/2'; 

  getPosts(){
    return this.http.get(this.url);
  }
}
