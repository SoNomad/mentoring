import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'users',
    loadComponent: () =>
      import('./users/components/users-list/users-list.component').then(
        (m) => m.UsersListComponent
      ),
  },
];
