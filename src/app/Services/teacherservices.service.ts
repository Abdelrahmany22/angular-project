import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../Models/teacher';
import { SharedApiService } from './shared-api.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherservicesService  extends SharedApiService<Teacher> {

  constructor(public http: HttpClient) {
super(http,"http://localhost:3000/teacher"); 

   }
}
