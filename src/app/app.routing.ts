import { RouterModule, Routes } from '@angular/router';
// import { HomeRoutes } from './home';
import { IntroRoutes } from './intro';

const routes: Routes = [
    { path: '', redirectTo: '/intro', pathMatch: 'full' },
    ...IntroRoutes
]

export const routing = RouterModule.forRoot(routes);

