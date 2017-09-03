import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { IntroComponent } from './intro.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [IntroComponent],
    exports: [IntroComponent]
})

export class IntroModule {

}