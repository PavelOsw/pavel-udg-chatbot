import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {
  public sidebarItems = [
    { label: 'Home',        icon: 'home',                    url: './home'},
    { label: 'Dashboard',   icon: 'dashboard',               url: './dashboard'},
    { label: 'Messages',    icon: 'chat_bubble',             url: './messages'},
    { label: 'Posts',       icon: 'edit_document',           url: './posts'},
    { label: 'Roles',       icon: 'supervised_user_circle',  url: './roles'},
    { label: 'Categories',  icon: 'category',                url: './categories'},
    { label: 'Users',       icon: 'person',                  url: './users'},
  ]
}
