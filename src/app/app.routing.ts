import { RouterModule, Routes } from '@angular/router';
import { HomeRoutes } from './home';

const routes: Routes = [
    ...HomeRoutes
]

export const routing = RouterModule.forRoot(routes);

