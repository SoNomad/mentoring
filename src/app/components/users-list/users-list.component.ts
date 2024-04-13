import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../types/User';
import { UserCardComponent } from '../../ui/user-card/user-card.component';
import { UsersService } from '../../services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogComponent } from '../../ui/matDialog/mat-dialog/mat-dialog.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, UserCardComponent, MatButtonModule],
  providers: [UsersService],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  private readonly usersService = inject(UsersService);
  public dialog = inject(MatDialog);

  public users: User[] = [];

  constructor() {
    this.users = this.usersService.users;
  }

  public deleteUserHandler(id: number) {
    this.usersService.deleteUser(id);
    this.users = this.usersService.users;
  }

  openDialog() {
    let dialogConfig = {
      height: '550px',
      width: '450px',
      data: {},
    };
    const dialogRef = this.dialog.open(MatDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result: User) => {
      let id = this.users.length ? this.users[this.users.length - 1].id + 1 : 1;

      this.usersService.addUser({ ...result, id });
      this.users = this.usersService.users;
    });
  }
}
