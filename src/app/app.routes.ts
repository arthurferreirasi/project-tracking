import { Routes } from '@angular/router';
import { HomeTrackingComponent } from './home-tracking/home-tracking.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home-tracking', pathMatch: 'full' },
    { path: 'home-tracking', component: HomeTrackingComponent }
];
