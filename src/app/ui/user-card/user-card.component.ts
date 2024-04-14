import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { User } from '../../../types/User';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input() public user!: User;
  @Output() public deleteUserId: EventEmitter<number> = new EventEmitter();
  @Output() public editableUser: EventEmitter<User> = new EventEmitter();

  public deleteUserHandler(id: number) {
    this.deleteUserId.emit(id);
  }
  editUserHandler(user: User) {
    this.editableUser.emit(user);
  }
}
