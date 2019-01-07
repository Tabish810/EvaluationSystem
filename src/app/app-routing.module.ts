import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { HeaderComponent } from './header/header.component';
import { CreateCoursesComponent } from './create-courses/create-courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';



const routes: Routes = [
  {
  path:'login',
  component: LoginComponent
  },
  {
    path: 'admin-sidebar',
    component: AdminSidebarComponent
  },
  {
    path : 'create-course',
    component: CreateCoursesComponent
  },
  {
    path: 'course-details',
    component : CourseDetailsComponent
  },
  {
    path: 'create-teacher',
    component: CreateTeacherComponent
  },
  {
    path: 'teacher-details',
    component : TeacherDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents =
 [LoginComponent, AdminSidebarComponent,HeaderComponent,
  CreateCoursesComponent, CourseDetailsComponent , CreateTeacherComponent,
   TeacherDetailsComponent];