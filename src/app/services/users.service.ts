import { Injectable, inject } from '@angular/core';
import { UsersApiService } from './users.api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../types/User';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly api = inject(UsersApiService);

  public readonly users$ = new BehaviorSubject<User[]>([]);
  public users: User[] = [];

  constructor() {
    this.users = JSON.parse(localStorage.getItem('users') || '[]');

    if (!this.users.length) {
      this.api.getUsers().subscribe((users) => {
        this.users.push(...users);
        localStorage.setItem('users', JSON.stringify(this.users));
      });
    }
  }

  public deleteUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
    localStorage.setItem('users', JSON.stringify(this.users));
  }
  public addUser(user: User) {
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  public editUser(user: User) {
    this.users = this.users.map((u) => (u.id === user.id ? user : u));
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
