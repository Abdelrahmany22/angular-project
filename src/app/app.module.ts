import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './student/list/list.component';
import { CreateComponent } from './student/create/create.component';
import { EditComponent } from './student/edit/edit.component'
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import { ListteacherComponent } from './teacher/listteacher/listteacher.component';
import { CreateteacherComponent } from './teacher/createteacher/createteacher.component';
import { EditteacherComponent } from './teacher/editteacher/editteacher.component';
// import { TeacherComponent } from './teacher/teacher.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    NotfoundComponent,
    ListteacherComponent,
    CreateteacherComponent,
    EditteacherComponent,
    // TeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
