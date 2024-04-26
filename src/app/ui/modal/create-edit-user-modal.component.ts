import { Component, Inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { User } from '../../../types/User';
import { uuidgen } from '../../utils/id-generator.util';

@Component({
  selector: 'app-mat-dialog',
  standalone: true,
  imports: [MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-edit-user-modal.component.html',
  styleUrl: './create-edit-user-modal.component.scss',
})
export class CreateEditUserModalComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateEditUserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {}

  public userFormGroup = new FormGroup({
    name: new FormControl(this.data?.name ?? ''),
    username: new FormControl(this.data?.username ?? ''),
    email: new FormControl(this.data?.email ?? ''),
    address: new FormGroup({
      city: new FormControl(this.data?.address?.city ?? ''),
      street: new FormControl(this.data?.address?.street ?? ''),
    }),
  });


  public onSubmit(): void {
    this.dialogRef.close({ ...this.data, ...this.userFormGroup.value});
  }
  public onNoClick(): void {
    this.dialogRef.close(null);
  }
}
