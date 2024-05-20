import { Routes } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";
import { LoginScreenComponent } from "./login-screen/login-screen.component";
import { PagesComponent } from "./pages/pages.component";
import { pagesRoutes } from "./pages/pages.routes";

export const routes: Routes = [
    {
        path:  '',
        component: PagesComponent, 
        children: pagesRoutes
    },
    {
        path:  'login',
        component: LoginScreenComponent, 
    },
    {
        path:  '404',
        component: NotFoundComponent, 
    },
    {
        path:  '**',
        redirectTo: '404', 
        pathMatch: 'full',
    },
];