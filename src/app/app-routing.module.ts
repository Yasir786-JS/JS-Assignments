import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentComponent } from './student/student.component';
import { EditStudentDetailsComponent } from './edit-student-details/edit-student-details.component';
import { CoursesComponent } from './courses/courses.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { StudentFormComponent } from './student-form/student-form.component';


const routes: Routes = [
  { path: 'student-form', component: StudentFormComponent },
  { path: 'student', component: StudentComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'student-details/:id', component: StudentDetailsComponent },
  { path: 'edit-student/:id', component: EditStudentDetailsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'edit-course/:id', component: EditCourseComponent },
  { path: 'view-course/:id', component: ViewCourseComponent },
  { path: 'add-course', component: AddCourseComponent },
  { path: '', redirectTo: '/student', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
