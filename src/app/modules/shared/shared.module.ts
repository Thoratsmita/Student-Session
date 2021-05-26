import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {MaterialModule } from  './../../material.module';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { LinksComponent } from './components/links/links.component';
import { FormComponent } from './components/form/form.component';
import { CourseComponent } from './components/course/course.component';
import { ChatPanelComponent } from './components/chat-panel/chat-panel.component';


@NgModule({
  declarations:[
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    SidebarComponent,
    HomeComponent,
    LinksComponent,
    FormComponent,
    CourseComponent,
    ChatPanelComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]

})
export class SharedModule { }
