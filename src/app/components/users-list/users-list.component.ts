import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../types/User';
import { UserCardComponent } from '../../ui/user-card/user-card.component';
import { UsersService } from '../../services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditUserModalComponent } from '../../ui/userModal/user-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { idGenerator } from '../../utils/id-generator.util';
import { dialogConfigure } from '../../utils/dialog-congif.util';
import { Observable } from 'rxjs';

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
  private readonly dialog = inject(MatDialog);
  public readonly users$: Observable<User[]> = this.usersService.users$;

  public onDeleteUserClick(id: number) {
    this.usersService.deleteUser(id);
  }

  public openDialog(user?: User) {
    const dialogRef = this.dialog.open(
      CreateEditUserModalComponent,
      dialogConfigure(user)
    );

    dialogRef.afterClosed().subscribe((data: User) => {
      if (data && data.id) {
        this.usersService.editUser(data);
      } else if (data) {
        let id = idGenerator(this.users$);
        this.usersService.addUser({ ...data, id });
      } else {
        return;
      }
    });
  }
}
