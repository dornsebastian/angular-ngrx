import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {PostActionTypes, PostDeleteAction, PostDeleteFailAction, PostDeleteSuccessAction} from '../post.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PostDeleteEffect {

  // Hört auf die Aktion 'Delete'
  @Effect()
  load$: Observable<Action> = this.action$.pipe(
    ofType(PostActionTypes.Delete),
    mergeMap(action => {
        const post = (action as PostDeleteAction).post;
        return this.http.delete('https://jsonplaceholder.typicode.com/posts/' + post.id).pipe(
          map(() => new PostDeleteSuccessAction(post)),
          catchError(() => of(new PostDeleteFailAction(post)))
        );
      }
    )
  );

  constructor(private http: HttpClient, private action$: Actions) {

  }
}
