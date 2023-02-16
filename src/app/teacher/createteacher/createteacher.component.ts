import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/Models/teacher';
import { TeacherservicesService } from 'src/app/Services/teacherservices.service';

@Component({
  selector: 'app-createteacher',
  templateUrl: './createteacher.component.html',
  styleUrls: ['./createteacher.component.css']
})
export class CreateteacherComponent implements OnInit {
teacher=new Teacher;
  constructor(public serv: TeacherservicesService,public route :Router) { }
  addTeacher(){

    this.serv.post(this.teacher).subscribe((data)=>{
      this.route.navigateByUrl('/listteacher')

    });
  }
  ngOnInit(): void {
  }

}
