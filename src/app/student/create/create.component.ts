import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/Models/student';
// import { StudentService } from 'src/app/Services/shared-api.service';
import { StudentservicesService } from 'src/app/Services/studentservices.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  student=new Student;

  constructor(public serv: StudentservicesService,public route :Router) { }

  addStudent(){

    this.serv.post(this.student).subscribe((data)=>{
      this.route.navigateByUrl('/liststudent')

    });
  }
  ngOnInit(): void {
  }

}
