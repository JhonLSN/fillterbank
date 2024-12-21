import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/main/home/home.component';
import { AboutComponent } from './components/pages/main/about/about.component';
import { ContactComponent } from './components/pages/main/contact/contact.component';
import { ProfileComponent } from './components/pages/user/profile/profile.component';
import { RegisterComponent } from './components/pages/register/register.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'user/profile', component: ProfileComponent},
  { path: 'register', component: RegisterComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home' }
];
