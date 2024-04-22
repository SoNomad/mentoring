import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersApiService } from '../services/users.api.service';
import { UsersActions } from './users.actions';
import { map, mergeMap } from 'rxjs';

@Injectable()
export class UsersEffects {
  private readonly UsersApiService = inject(UsersApiService);
  private readonly actions$ = inject(Actions);

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.getUsers),
      mergeMap(() => {
        return this.UsersApiService.getUsers().pipe(
          map((users) => UsersActions.getUsersSuccess({ users }))
        );
      })
    )
  );
}
