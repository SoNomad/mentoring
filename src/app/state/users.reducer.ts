import { createReducer, on } from '@ngrx/store';
import { User } from '../../types/User';
import { UsersApiActions } from './users.actions';

export const initialState: ReadonlyArray<User> = [];

export const usersReducer = createReducer(
  initialState,
  on(UsersApiActions.usersList, (_state, { users }) => users)
);
