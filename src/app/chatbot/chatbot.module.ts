import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { ChatBotRoutingModule } from './chatbot-routing.module';

import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MessagePageComponent } from './pages/message-page/message-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { ReminderPageComponent } from './pages/reminder-page/reminder-page.component';
import { RolePageComponent } from './pages/role-page/role-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { HomeRemindersComponent } from './components/components-home/home-reminders/home-reminders.component';
import { HomePostsComponent } from './components/components-home/home-posts/home-posts.component';
import { MessageCardComponent } from './components/components-message/message-card/message-card.component';

@NgModule({
  declarations: [
    CategoryPageComponent,
    DashboardPageComponent,
    HomePageComponent,
    HomePostsComponent,
    HomeRemindersComponent,
    LayoutPageComponent,
    MessageCardComponent,
    MessagePageComponent,
    PostPageComponent,
    ReminderPageComponent,
    RolePageComponent,
    UserPageComponent,
  ],
  imports:[
    ChatBotRoutingModule,
    CommonModule,
    MaterialModule,
    SharedModule,
  ]
})
export class ChatBotModule {}
