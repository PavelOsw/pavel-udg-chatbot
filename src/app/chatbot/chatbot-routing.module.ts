import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MessagePageComponent } from './pages/message-page/message-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { ReminderPageComponent } from './pages/reminder-page/reminder-page.component';
import { RolePageComponent } from './pages/role-page/role-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'home',         component: HomePageComponent},
      { path: 'dashboard',    component: DashboardPageComponent},
      { path: 'messages',     component: MessagePageComponent },
      { path: 'posts',        component: PostPageComponent },
      { path: 'reminders',    component: ReminderPageComponent},
      { path: 'roles',        component: RolePageComponent},
      { path: 'categories',   component: CategoryPageComponent},
      { path: 'users',        component: UserPageComponent},
      { path: '**',   redirectTo: 'home' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatBotRoutingModule { }
