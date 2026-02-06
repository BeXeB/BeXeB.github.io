import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:slug', component: ProjectDetailsComponent },
  { path: 'contact', component: ContactComponent },
];
