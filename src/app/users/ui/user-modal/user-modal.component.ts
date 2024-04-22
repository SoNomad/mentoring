import { Component, Inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { User } from '../../types/User';
import { userFormGroup } from '../../services/user-form-group.service';

@Component({
  selector: 'app-mat-dialog',
  standalone: true,
  imports: [MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user-modal.component.html',
  styleUrl: './user-modal.component.scss',
})
export class CreateEditUserModalComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateEditUserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {}

  public userFormGroup = userFormGroup(this.data);

  onSubmit(): void {
    this.dialogRef.close(this.userFormGroup.value);
  }
  onNoClick(): void {
    this.dialogRef.close(null);
  }
}
