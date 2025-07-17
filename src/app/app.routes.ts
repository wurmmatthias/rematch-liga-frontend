import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { Faq } from './views/faq/faq';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "faqs", component: Faq}
];
