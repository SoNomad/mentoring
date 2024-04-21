import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../types/User';
import { UserCardComponent } from '../../ui/user-card/user-card.component';
import { UsersService } from '../../services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditUserModalComponent } from '../../ui/user-modal/user-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { idGenerator } from '../../utils/id-generator.util';
import { dialogConfigure } from '../../utils/dialog-congif.util';

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

  public users: User[] = this.usersService.users; //убрал отдельную переменную

  public onDeleteUserClick(id: number) {
    this.usersService.deleteUser(id);
    this.users = this.usersService.users;
  }

  public openDialog(user?: User) {
    const dialogRef = this.dialog.open(
      CreateEditUserModalComponent, //исправил название
      dialogConfigure(user) // создал отдельный утил для конфига
    );

    //убрал isEditable переменную

    //Перенес idGenerator в сервис
    dialogRef.afterClosed().subscribe((data: User) => {
      if (data && data.id) {
        this.usersService.editUser(data);
      } else if (data) {
        this.usersService.addUser({ ...data });
      } else {
        return;
      }
    });
  }
}
