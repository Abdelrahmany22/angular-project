import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../Models/student';
import { SharedApiService } from './shared-api.service';

@Injectable({
  providedIn: 'root'
})
export class StudentservicesService extends SharedApiService<Student>{
  
  constructor(public http: HttpClient) { 
super(http,"http://localhost:3000/student"); 
  }
}
