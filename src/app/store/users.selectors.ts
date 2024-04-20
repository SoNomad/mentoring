import { AppStateType } from '../../types/UserStateType';

export const selectFeature = (state: AppStateType) => state.users;
