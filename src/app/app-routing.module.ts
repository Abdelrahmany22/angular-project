import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CreateComponent } from './student/create/create.component';
import { EditComponent } from './student/edit/edit.component';
import { ListComponent } from './student/list/list.component';
import { CreateteacherComponent } from './teacher/createteacher/createteacher.component';
import { EditteacherComponent } from './teacher/editteacher/editteacher.component';
import { ListteacherComponent } from './teacher/listteacher/listteacher.component';


const routes: Routes = [
   {path:'home',component: HomeComponent},
   {path:'',component:HomeComponent},
    {path:'liststudent',component:ListComponent},
    {path:'addstudent',component:CreateComponent},
    {path:'editstudent/:id',component:EditComponent},
    {path:'listteacher',component:ListteacherComponent},
    {path:'addteacher',component:CreateteacherComponent},
    {path:'editteacher/:id',component:EditteacherComponent},
    {path:'**',component:NotfoundComponent}
  
     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
