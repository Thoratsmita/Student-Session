import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListComponentComponent } from './list-component/list-component.component';
import  { MaterialModule} from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from './modules/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import {AuthGuard} from './auth.guard';
import {UserServiceService} from './user-service.service';
import { DashboardComponent } from './modules/shared/components/dashboard/dashboard.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { RouterModule } from '@angular/router';
import { ScheduleComponent } from './modules/home/newcomponents/schedule/schedule.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { FullcalenderComponent } from './fullcalender/fullcalender.component';
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction';
import { CalenderComponent } from './calender/calender.component';
import { ChildToLoadComponent } from './child-to-load/child-to-load.component';
import { NewDialogComponent } from './new-dialog/new-dialog.component';
import { LiveSessionComponent } from './live-session/live-session.component';
import { NewChatPannelComponent } from './new-chat-pannel/new-chat-pannel.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HttpClientModule } from '@angular/common/http';
import { NodeComponent } from './node/node.component';
import {NodeServiceService} from './node-service.service';
import { EmbedVideo } from 'ngx-embed-video';
import { CreateAccountService } from './create-account.service';
import { AlertService } from './alert.service';


FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ListComponentComponent,
    ScheduleComponent,
    NewComponentComponent,
    FullcalenderComponent,
    CalenderComponent,
    ChildToLoadComponent,
    NewDialogComponent,
    LiveSessionComponent,
    NewChatPannelComponent,
    ForgotPasswordComponent,
    CreateAccountComponent,
    NodeComponent    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    FullCalendarModule ,
    RouterModule,
    HttpClientModule,
    EmbedVideo.forRoot()
    
  ],

  providers: [AuthGuard,UserServiceService,NodeServiceService,CreateAccountService,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
