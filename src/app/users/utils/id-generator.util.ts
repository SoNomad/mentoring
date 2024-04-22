import { User } from '../types/User';

export function idGenerator(users: User[]) {
  return users.length ? users[users.length - 1].id + 1 : 1;
}
