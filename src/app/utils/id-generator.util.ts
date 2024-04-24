// import { Observable } from 'rxjs';
// import { User } from '../../types/User';

// export function idGenerator(users: Observable<User[]>): number {
//   let id: number = 0;
//   users.pipe().subscribe((users: User[]) => {
//       id = users.length ? users.at(-1)!.id! + 1 : 1;
//   });
//   return id;
// }