import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersApiService } from '../services/users.api.service';
import { UsersActions } from './users.actions';
import { catchError, exhaustMap, map, mergeMap, of } from 'rxjs';

@Injectable()
export class UsersEffects {
  private readonly UsersApiService = inject(UsersApiService);
  private readonly actions$ = inject(Actions);

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.getUsers),
      mergeMap(() => {
        return this.UsersApiService.getUsers().pipe(
          map((users) => UsersActions.getUsersSuccess({ users })),
          catchError((error) => of(UsersActions.getUsersFailure({error: error.message})))
        );
      }, )
    )
  );

  addUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UsersActions.addUser),
    mergeMap((action) => {
      return this.UsersApiService.addUser(action.user).pipe(
        map((user) => UsersActions.addUserSuccess({ user })),
        catchError((error) => of(UsersActions.addUserFailure({ error: error.message })))
      );
    })
  ))
}
