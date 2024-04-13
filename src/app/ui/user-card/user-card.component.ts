import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { User } from '../../../types/User';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input() public user!: User;
  @Output() public deleteUserId: EventEmitter<number> = new EventEmitter();

  public deleteUserHandler(id: number) {
    this.deleteUserId.emit(id);
  }
}
