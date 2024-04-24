import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../../types/User';

export const UsersActions = createActionGroup({
  source: 'Users',
  events: {
    'Get Users': emptyProps(),
    'Get Users Success': props<{ users: User[] }>(),
    'Get Users Failure': props<{ error: string }>(),

    'Add User': props<{ user: User }>(),
    'Add User Success': props<{ user: User }>(),
    'Add User Failure': props<{ error: string }>(),

    'Edit User': props<{ user: User }>(),
    'Delete User': props<{ id: number }>(),
  },
});
