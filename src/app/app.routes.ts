import { Routes } from '@angular/router';
import { Layout1Component } from './domains/shared/layouts/layout1/layout1.component';
import { Layout2Component } from './domains/shared/layouts/layout2/layout2.component';

export const routes: Routes = [
  {
    path: "", component: Layout1Component, children: [
      { path: "", loadComponent: () => import("./domains/recipes/pages/home/home.component") },
      { path: "home", loadComponent: () => import("./domains/recipes/pages/home/home.component") },
      { path: "list", loadComponent: () => import("./domains/recipes/pages/list/list.component") },
      { path: "profile", loadComponent: () => import("./domains/recipes/pages/profile/profile.component") },
    ]
  },
  {
    path: "alternative", component: Layout2Component, children: [
      { path: "", loadComponent: () => import("./domains/recipes/pages/home/home.component") },
      { path: "home", loadComponent: () => import("./domains/recipes/pages/home/home.component") },
      { path: "list", loadComponent: () => import("./domains/recipes/pages/list/list.component") },
      { path: "profile", loadComponent: () => import("./domains/recipes/pages/profile/profile.component") },
    ]
  }
];
