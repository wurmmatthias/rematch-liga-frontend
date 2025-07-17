import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { Faq } from './views/faq/faq';
import { Dashboard } from './views/dashboard/dashboard';
import { authGuard } from './services/auth-guard';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "faqs", component: Faq},
    {path: "dashboard", component: Dashboard, canActivate: [authGuard]},
    { path: '**', redirectTo: '' }
];
