import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {PostActionTypes, PostAddAction, PostAddFailAction, PostAddSuccessAction} from '../post.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {PostEntity} from '../post.entity';

@Injectable()
export class PostAddEffect {

  // Hört auf die Aktion 'ADD'
  @Effect()
  load$: Observable<Action> = this.action$.pipe(
    ofType(PostActionTypes.Add),
    mergeMap(action =>
      this.http.post('https://jsonplaceholder.typicode.com/posts', (action as PostAddAction).post).pipe(
        map((e: object) => PostEntity.fromJson(e)),
        map((item: PostEntity) => new PostAddSuccessAction(item)),
        catchError(() => of(new PostAddFailAction((action as PostAddAction).post)))
      )
    )
  );

  constructor(private http: HttpClient, private action$: Actions) {

  }
}
