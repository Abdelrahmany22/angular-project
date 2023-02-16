import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/Models/student';
import { SharedApiService } from 'src/app/Services/shared-api.service';
import { StudentservicesService } from 'src/app/Services/studentservices.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  student=new Student;
id;
  constructor(public serv: StudentservicesService,public route :Router ,public ActiveRoute:ActivatedRoute) { 
  this.id=  this.ActiveRoute.snapshot.paramMap.get('id');
  this.serv.getbyid(this.id).subscribe((data:any)=>{
this.student=data;
  })
  }

  updateStudent(){
   
    this.serv.update(this.id,this.student).subscribe((data)=>{
      this.route.navigateByUrl('/liststudent')
      
    })
  }
  ngOnInit(): void {
  }

}
