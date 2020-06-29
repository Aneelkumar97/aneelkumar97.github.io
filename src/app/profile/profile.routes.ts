import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProfileLayoutComponent } from '../shared/layouts/profileLayout/profile-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/profile/home',
        pathMatch: 'full'
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'skills',
        component: SkillsComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }