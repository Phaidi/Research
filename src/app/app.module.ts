import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Universal/navbar/navbar.component';
import { ToolboxComponent } from '../app/Components/toolbox/toolbox.component';
import { OptionsComponent } from '../app/Components/toolbox/options/options.component';
import { OptionsService } from './Services/options.service';
import { HeaderComponent } from './Components/Universal/header/header.component';
import { HomeComponent } from '../app/Components/home/home.component';
import { HomeHeaderComponent } from '../app/Components/home/home-header/home-header.component';
import { StudentCardComponent } from '../app/Components/home/student-card/student-card.component';
import { StudentProjectComponent } from '../app/Components/home/student-project/student-project.component';
import { StudentsProjectsComponent } from '../app/Components/home/students-projects/students-projects.component';
import { HomeToolboxComponent } from '../app/Components/home/home-toolbox/home-toolbox.component';
import { HomeForumComponent } from '../app/Components/home/home-forum/home-forum.component';
import { HomeAccountComponent } from '../app/Components/home/home-account/home-account.component';
import { StudentHomeComponent } from '../app/Components/students/student-home/student-home.component';
import { StudentSupervisorComponent } from './Components/Supervisor/student-supervisor/student-supervisor.component';
import { ManageStudentComponent } from '../app/Components/Supervisor/manage-student/manage-student.component';
import { InnerHeaderComponent } from './Components/Universal/inner-header/inner-header.component';
import { LandingComponent } from './Components/landing/landing.component';
import { StudentDashComponent } from './Components/students/student-dash/student-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolboxComponent,
    OptionsComponent,
    HeaderComponent,
    HomeComponent,
    HomeHeaderComponent,
    StudentCardComponent,
    StudentProjectComponent,
    StudentsProjectsComponent,
    HomeToolboxComponent,
    HomeForumComponent,
    HomeAccountComponent,
    StudentHomeComponent,
    StudentSupervisorComponent,
    ManageStudentComponent,
    InnerHeaderComponent,
    LandingComponent,
    StudentDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    OptionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
