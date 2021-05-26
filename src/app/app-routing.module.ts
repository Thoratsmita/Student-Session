import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './modules/shared/components/layout/layout.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './modules/shared/components/dashboard/dashboard.component';
import { HomeComponent } from './modules/shared/components/home/home.component';
import { LinksComponent } from './modules/shared/components/links/links.component';
import { CourseComponent } from './modules/shared/components/course/course.component';
import { FormComponent } from './modules/shared/components/form/form.component';
import { ScheduleComponent } from './modules/home/newcomponents/schedule/schedule.component';
import { AuthGuard } from './auth.guard';
import { LiveSessionComponent } from './live-session/live-session.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CreateAccountComponent } from './create-account/create-account.component';


const routes: Routes = [
  { path: '', component: LoginComponent },

  {
    path: 'signIn', component: DashboardComponent, canActivate:[AuthGuard]
  },
  {
    path: "", component: LayoutComponent,
    children: [
      {
        path: "dashboard", component: HomeComponent
      },
      {
        path:"forgotPassword" , component:ForgotPasswordComponent
      },
      {
        path:"createAccount" , component:CreateAccountComponent
      },
      {
        path: "view", component: ScheduleComponent
      },
      {
        path: "links", component: LinksComponent
      },
      {
        path: "course", component: CourseComponent
      },
      {
        path: "form", component: FormComponent
      },
      {
        path:"live", component: LiveSessionComponent
      }   
    ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }