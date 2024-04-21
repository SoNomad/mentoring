import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../types/User';

@Injectable({
  providedIn: 'root',
})
export class UsersApiService {
  private http = inject(HttpClient);
  private API = 'https://jsonplaceholder.typicode.com/';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.API}users`);
  }

  addUser(user: Partial<User>): Observable<User> {
    return this.http.post<User>(`${this.API}users`, user);
  }

  editUser(editedUser: User): Observable<User> {
    return this.http.put<User>(`${this.API}users/${editedUser.id}`, editedUser);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}users/${id}`);
  }
}
