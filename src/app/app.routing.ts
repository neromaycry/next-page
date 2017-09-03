import { RouterModule, Routes } from '@angular/router';
// import { HomeRoutes } from './home';
import { IntroRoutes } from './intro';

const routes: Routes = [
    ...IntroRoutes
]

export const routing = RouterModule.forRoot(routes);

