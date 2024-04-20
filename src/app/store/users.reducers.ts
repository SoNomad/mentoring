import { createReducer, on } from '@ngrx/store';
import { UserStateType } from '../../types/UserStateType';
import { UsersActions } from './users.actions';
import { state } from '@angular/animations';

export const initialState: UserStateType = {
  isLoading: false,
  users: [],
  errors: null,
};

export const usersReducer = createReducer(
  initialState,
  on(UsersActions.getUsers, (state) => ({ ...state, isLoading: true })),
  on(UsersActions.getUsersSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    users: action.users,
  })),
  on(UsersActions.getUsersFailure, (state, action) => ({
    ...state,
    errors: action.error,
  }))
);
