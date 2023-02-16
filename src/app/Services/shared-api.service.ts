import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Student } from '../Models/student';

@Injectable({
  providedIn: 'root'
})
export class SharedApiService <Type> {
// api="http://localhost:3000/student";
  constructor(public http: HttpClient,@Inject(String) public api:string) { }

    get() :Observable<Type>{
      return this.http.get<Type>(this.api);
    }
    getbyid(id):Observable<Type>{
      return this.http.get<Type>(this.api+`/${id}`)
    }
    post(object:Type):Observable<Type>{
      return this.http.post<Type>(this.api,object);
    } 
 
    delete(id):Observable<Type>{
      return this.http.delete<Type>(this.api +`/${id}`);
    }
    update(id,object:Type ):Observable<Type>{
      return this.http.put<Type>(this.api+`/${id}`,object);
    }
}
