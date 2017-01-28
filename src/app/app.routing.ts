import { Routes, RouterModule, CanActivate } from '@angular/router';
// Add the AuthGuard service
import { AuthGuard } from './auth-guard.service';

// Import our components
import { PublicDealsComponent } from './public-deals.component';
import { PrivateDealsComponent } from './private-deals.component';

const appRoutes: Routes = [
  // Add the redirect
  {
    path: '',
    redirectTo: '/deals',
    pathMatch: 'full'
  },
  // Add our routes
  {
    path: 'deals',
    component: PublicDealsComponent
  },
  {
    path: 'special',
    component: PrivateDealsComponent,
    // We'll use the canActivate API and pass in our AuthGuard. Now any time the /special route is hit, the AuthGuard will run first to make sure the user is logged in before activating and loading this route.
    canActivate: [AuthGuard]
  }
];
// Here we are exporting our routes
export const routing = RouterModule.forRoot(appRoutes);
// Here we are combining our routing components into a single array. We will use this a little later when we update our root module
export const routedComponents = [PublicDealsComponent, PrivateDealsComponent];