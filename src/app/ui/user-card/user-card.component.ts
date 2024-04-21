import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { User } from '../../types/User';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input() public user!: User;
  @Output() public deleteUserId = new EventEmitter<number>();
  @Output() public editableUser = new EventEmitter<User>();

  public onDeleteUserClick(id: number) {
    this.deleteUserId.emit(id);
  }
  public onEditUserClick(user: User) {
    this.editableUser.emit(user);
  }
}
