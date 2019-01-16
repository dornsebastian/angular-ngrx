import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {PostActionTypes, PostLoadFailAction, PostLoadSuccessAction} from '../post.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {PostEntity} from '../post.entity';

@Injectable()
export class PostLoadEffect {

  // Hört auf die Aktion 'LOAD'
  @Effect()
  load$: Observable<Action> = this.action$.pipe(
    ofType(PostActionTypes.Load),
    mergeMap(action =>
      this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
        map((list: object[]) => list.map((e: object) => PostEntity.fromJson(e))),
        map((list: PostEntity[]) => new PostLoadSuccessAction(list)),
        catchError(() => of(new PostLoadFailAction()))
      )
    )
  );

  constructor(private http: HttpClient, private action$: Actions) {

  }
}
