import { Component, inject } from '@angular/core';
import { UsersService } from '../../users.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { User } from '../../../types/User';
import { UserCardComponent } from '../../ui/user-card/user-card.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  providers: [UsersService],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  private readonly usersService = inject(UsersService);
  public readonly users$: Observable<User[]> = this.usersService.getUsers();
}
