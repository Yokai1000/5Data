import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS
import { HomeComponent } from './home';
import { CampusComponent } from './campus';
import { StudentListComponent } from './student-list';

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'campus', component: CampusComponent },
  { path: 'student-list', component: StudentListComponent },
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: true });
