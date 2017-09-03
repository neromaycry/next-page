import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro.component';
import { HomeComponent } from '../home';
import { ContactComponent } from '../contact';

export const IntroRoutes: Routes = [{
    path: 'intro',
    component: IntroComponent,
    children: [
        { path: '', component: HomeComponent },
        { path: 'contact', component: ContactComponent }
    ]
}];

export const IntroRouting = RouterModule.forChild(IntroRoutes);