import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';

import { ProfileRoutingModule } from './profile.routes';
import { SkillsComponent } from "./components/skills/skills.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
        HomeComponent,
        ContactComponent,
        SkillsComponent,
    ],
    imports: [
        CommonModule,
        ProfileRoutingModule
    ],
    exports: [
        HomeComponent,
        ContactComponent,
        SkillsComponent,
    ]
})
export class ProfileModule { }