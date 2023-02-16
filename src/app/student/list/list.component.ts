import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/student';
// import { StudentService } from 'src/app/Services/shared-api.service';
import { StudentservicesService } from 'src/app/Services/studentservices.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  student=new Student;
  constructor(public serv: StudentservicesService){
    this.serv.get().subscribe((data:Student)=>{
      this.student=data;
      
    });
  }
 
  deleteStudent(id){
    this.serv.delete(id).subscribe((data)=>{
      window.location.reload();

    })
  }

  
  ngOnInit(): void {
  }

}
