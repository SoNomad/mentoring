import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../types/User';

export function userFormGroup(data?: User): FormGroup {
  return new FormGroup({
    id: new FormControl(data?.id ?? null),
    name: new FormControl(data?.name ?? ''),
    username: new FormControl(data?.username ?? ''),
    email: new FormControl(data?.email ?? ''),
    address: new FormGroup({
      city: new FormControl(data?.address?.city ?? ''),
      street: new FormControl(data?.address?.street ?? ''),
    }),
  });
}
