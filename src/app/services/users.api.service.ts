import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../types/User';

@Injectable({
  providedIn: 'root',
})
export class UsersApiService {
  private http = inject(HttpClient);
  private API = 'https://jsonplaceholder.typicode.com/';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.API}users`);
  }
}
