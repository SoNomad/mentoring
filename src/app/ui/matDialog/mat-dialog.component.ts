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

@Component({
  selector: 'app-mat-dialog',
  standalone: true,
  imports: [MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './mat-dialog.component.html',
  styleUrl: './mat-dialog.component.scss',
})
export class MatDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<MatDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {}

  public userFormGroup = new FormGroup({
    // id: new FormControl(this.data?.id ?? null),
    name: new FormControl(this.data?.name ?? ''),
    username: new FormControl(this.data?.username ?? ''),
    email: new FormControl(this.data?.email ?? ''),
    address: new FormGroup({
      city: new FormControl(this.data?.address?.city ?? ''),
      street: new FormControl(this.data?.address?.street ?? ''),
    }),
  });


  onSubmit(): void {
    this.dialogRef.close(this.userFormGroup.value);
  }
  onNoClick(): void {
    this.dialogRef.close(null);
  }
}
