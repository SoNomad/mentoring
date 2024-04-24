import { createReducer, on } from '@ngrx/store';
import { UserStateType } from '../../types/UserStateType';
import { UsersActions } from './users.actions';

export const initialState: UserStateType = {
  isLoading: false,
  users: [],
  errors: null,
};

//load users
export const usersReducer = createReducer(
  initialState,
  on(UsersActions.getUsers, (state) => ({ ...state, isLoading: true })),
  on(UsersActions.getUsersSuccess, (state, action) => ({...state, isLoading: false, users: action.users})),
  on(UsersActions.getUsersFailure, (state, action) => ({...state, errors: action.error})),

  //adding new user
  on(UsersActions.addUser, (state, action) => ({ ...state, isLoading: true })),
  on(UsersActions.addUserSuccess, (state, action) => ({...state, isLoading: false, users: [...state.users, action.user]})),
  on(UsersActions.addUserFailure, (state, action) => ({...state, isLoading: false, errors: action.error}))

  // on(UsersActions.deleteUser, (state, action) => ({ ...state, state.filter }))
);
