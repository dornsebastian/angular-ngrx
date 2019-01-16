import {Action} from '@ngrx/store';
import {PostEntity} from './post.entity';

export enum PostActionTypes {
  Load = '[Post] Load',
  LoadSuccess = '[Post] Load Success',
  LoadFail = '[Post] Load Fail',
  Add = '[Post] Add',
  AddSuccess = '[Post] Add Success',
  AddFail = '[Post] Add Fail',
  Delete = '[Post] Delete',
  DeleteSuccess = '[Post] Delete Success',
  DeleteFail = '[Post] Delete Fail',
}

export class PostLoadAction implements Action {
  readonly type = PostActionTypes.Load;
}

export class PostLoadSuccessAction implements Action {
  readonly type = PostActionTypes.LoadSuccess;

  constructor(public posts: PostEntity[]) {

  }
}

export class PostLoadFailAction implements Action {
  readonly type = PostActionTypes.LoadFail;
}

export class PostAddAction implements Action {
  readonly type = PostActionTypes.Add;

  constructor(public post: PostEntity) {

  }
}

export class PostAddSuccessAction implements Action {
  readonly type = PostActionTypes.AddSuccess;

  constructor(public post: PostEntity) {

  }
}

export class PostAddFailAction implements Action {
  readonly type = PostActionTypes.AddFail;

  constructor(public post: PostEntity) {

  }
}

export class PostDeleteAction implements Action {
  readonly type = PostActionTypes.Delete;

  constructor(public post: PostEntity) {

  }
}

export class PostDeleteSuccessAction implements Action {
  readonly type = PostActionTypes.DeleteSuccess;

  constructor(public post: PostEntity) {

  }
}

export class PostDeleteFailAction implements Action {
  readonly type = PostActionTypes.DeleteFail;

  constructor(public post: PostEntity) {

  }
}
