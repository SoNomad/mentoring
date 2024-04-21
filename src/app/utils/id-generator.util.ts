import { Observable, toArray } from 'rxjs';
import { User } from '../types/User';

export function idGenerator(users: Observable<User[]>): number {
  let id: number = 0;

  users.pipe().subscribe((users) => {
    id = users.length ? +users[users.length - 1].id + 1 : 1;
  });
  return id;
}
