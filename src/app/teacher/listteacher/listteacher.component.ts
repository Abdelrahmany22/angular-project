import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/Models/teacher';
import { TeacherservicesService } from 'src/app/Services/teacherservices.service';

@Component({
  selector: 'app-listteacher',
  templateUrl: './listteacher.component.html',
  styleUrls: ['./listteacher.component.css']
})
export class ListteacherComponent implements OnInit {

  teacher=new Teacher;
  constructor(public serv: TeacherservicesService){
    this.serv.get().subscribe((data:Teacher)=>{
      this.teacher=data;
      
    });
  }
 
  deleteTeacher(id){
    this.serv.delete(id).subscribe((data)=>{
      window.location.reload();

    })
  }

  ngOnInit(): void {
  }

}
