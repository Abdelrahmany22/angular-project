import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Teacher } from 'src/app/Models/teacher';
import { StudentservicesService } from 'src/app/Services/studentservices.service';
import { TeacherservicesService } from 'src/app/Services/teacherservices.service';

@Component({
  selector: 'app-editteacher',
  templateUrl: './editteacher.component.html',
  styleUrls: ['./editteacher.component.css']
})
export class EditteacherComponent implements OnInit {
teacher=new Teacher
id;
  constructor(public serv: TeacherservicesService,public route :Router ,public ActiveRoute:ActivatedRoute) { 
    this.id=  this.ActiveRoute.snapshot.paramMap.get('id');
    this.serv.getbyid(this.id).subscribe((data:any)=>{
  this.teacher=data;
    })
  }
  updateTeacher(){
   
    this.serv.update(this.id,this.teacher).subscribe((data)=>{
      this.route.navigateByUrl('/listteacher')
      
    })
  }
  ngOnInit(): void {
  }

}
