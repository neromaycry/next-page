import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro.component';
import { HomeComponent } from '../home';
import { ContactComponent } from '../contact';
import { PortfolioComponent } from '../portfolio';
import { AboutComponent } from '../about';

export const IntroRoutes: Routes = [{
    path: 'intro',
    component: IntroComponent,
    children: [
        { path: '', component: HomeComponent },
        { path: 'contact', component: ContactComponent },
        { path: 'portfolio', component: PortfolioComponent },
        { path: 'about', component: AboutComponent }
    ]
}];

export const IntroRouting = RouterModule.forChild(IntroRoutes);