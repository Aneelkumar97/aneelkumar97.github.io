import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProfileLayoutComponent } from './profileLayout/profile-layout.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([])
    ],
    exports: [
        ProfileLayoutComponent
    ],
    declarations: [
        ProfileLayoutComponent
    ]
})
export class LayoutModule { }