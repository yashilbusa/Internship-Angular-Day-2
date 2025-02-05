import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // constructor() { }
  // getUser():Observable<any>{
  //   return of({name:"Yashil Busa",email:"yashil@innovatemr.com"},{name:"Raj",email:"raj@gmail.com"})
  // }

  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.url);
  }
}