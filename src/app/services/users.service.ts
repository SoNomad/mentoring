import { Injectable, inject } from '@angular/core';
import { UsersApiService } from './users.api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../types/User';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly api = inject(UsersApiService);
  public users: User[] = [];

  constructor() {
    this.api.getUsers().subscribe((users) => {
      this.users.push(...users);
    });
  }

  public deleteUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
  }
  public addUser(user: User) {
    this.users.push(user);
  }
}
