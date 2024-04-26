import { createSelector } from '@ngrx/store';
import { AppStateType } from '../../types/UserStateType';

export const selectFeature = (state: AppStateType) => state.users;

export const selectLoading = createSelector(selectFeature, (state) => state.isLoading);
export const selectUsers = createSelector(selectFeature, (state) => state.users);
export const selectError = createSelector(selectFeature, (state) => state.errors);
