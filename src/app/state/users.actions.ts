import { createActionGroup, props } from '@ngrx/store';
import { User } from '../../types/User';

export const UsersActions = createActionGroup({
  source: 'Users',
  events: {
    'Add User': props<{ user: User }>(),
    'Edit User': props<{ user: User }>(),
    'Delete User': props<{ id: number }>(),
  },
});

export const UsersApiActions = createActionGroup({
  source: 'Users API',
  events: {
    'Users List': props<{ users: ReadonlyArray<User> }>(),
  },
});
