import { Component, Inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { User } from '../../../../types/User';

@Component({
  selector: 'app-mat-dialog',
  standalone: true,
  imports: [MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './mat-dialog.component.html',
  styleUrl: './mat-dialog.component.scss',
})
export class MatDialogComponent {
  public userFormGroup = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      street: new FormControl(''),
    }),
  });

  constructor(
    public dialogRef: MatDialogRef<MatDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {}

  onSubmit(): void {
    console.log(this.userFormGroup.value);

    this.dialogRef.close(this.userFormGroup.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
