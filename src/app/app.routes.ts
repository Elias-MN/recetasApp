import { Routes } from '@angular/router';
import { HomeComponent } from './domains/recipes/pages/home/home.component';
import { ListComponent } from './domains/recipes/pages/list/list.component';
import { ProfileComponent } from './domains/recipes/pages/profile/profile.component';

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "list", component: ListComponent },
  { path: "profile", component: ProfileComponent }
];
