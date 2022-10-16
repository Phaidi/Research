import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Components/landing/landing.component';
import { StudentDashComponent } from './Components/students/student-dash/student-dash.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'stud-dash', component: StudentDashComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
