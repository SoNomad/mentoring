import { Injectable, inject } from '@angular/core';
import { UsersApiService } from './users.api.service';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../types/User';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly api = inject(UsersApiService);

  private readonly usersSubject$ = new BehaviorSubject<User[]>([]);
  public readonly users$ = this.usersSubject$.asObservable();

  constructor() {
    this.getUsers();
  }

  public getUsers(): void {
    this.api.getUsers().subscribe((users) => {
      this.usersSubject$.next(users);
    });
  }

  public deleteUser(id: number) {
    this.api.deleteUser(id).subscribe(() => {
      this.usersSubject$.next(
        this.usersSubject$.value.filter((u) => u.id !== id)
      );
    });
  }

  public addUser(user: User) {
    this.api.addUser(user).subscribe((user) => {
      this.usersSubject$.next([...this.usersSubject$.getValue(), user]);
    });
  }

  public editUser(editedUser: User) {
    this.api.editUser(editedUser).subscribe((res) => {
      this.usersSubject$.next(
        this.usersSubject$.value.map((u) => (u.id === res.id ? res : u))
      );
    });
  }
}
