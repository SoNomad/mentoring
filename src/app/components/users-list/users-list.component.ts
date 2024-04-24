import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../types/User';
import { UserCardComponent } from '../../ui/user-card/user-card.component';
import { UsersService } from '../../services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogComponent } from '../../ui/matDialog/mat-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { idGenerator } from '../../utils/id-generator.util';
import { Store, select } from '@ngrx/store';
import { UsersActions } from '../../store/users.actions';
import { Observable } from 'rxjs';
import {
  selectError,
  selectLoading,
  selectUsers,
} from '../../store/users.selectors';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, UserCardComponent, MatButtonModule],
  providers: [UsersService],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent implements OnInit {
  public dialog = inject(MatDialog);
  public store = inject(Store);

  public readonly isLoading$: Observable<boolean> =
    this.store.select(selectLoading);
  public readonly users$: Observable<User[]> = this.store.select(selectUsers);
  public readonly errors$: Observable<string | null> =
    this.store.select(selectError);

  ngOnInit(): void {
    this.store.dispatch(UsersActions.getUsers());
  }

  public openDialog(user?: User) {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      height: '550px',
      width: '450px',
      data: user,
    });

    dialogRef.afterClosed().subscribe((data: User) => {
      // if (data && data.id) {
      //   this.usersService.editUser(data);
      //   this.users = this.usersService.users;
      // } else {
      //   let id = idGenerator(this.users);
      //   this.usersService.addUser({ ...data, id });
      //   this.users = this.usersService.users;
      // }
    });
  }
}
