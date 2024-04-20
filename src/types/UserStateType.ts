import { User } from './User';

export type UserStateType = {
  isLoading: boolean;
  users: User[];
  errors: string | null;
};

export type AppStateType = {
  users: UserStateType;
};
