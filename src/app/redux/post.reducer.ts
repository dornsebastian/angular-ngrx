import {PostState} from './post.state';
import {Action} from '@ngrx/store';
import {PostActionTypes, PostAddAction, PostDeleteAction, PostLoadSuccessAction} from './post.actions';

export const initialState: PostState = new PostState();

export function postReducer(state = initialState, action: Action): PostState {
  switch (action.type) {

    case PostActionTypes.LoadSuccess: {
      const newState = {...state};
      newState.list = (action as PostLoadSuccessAction).posts;
      newState.initLoad = true;
      return newState;
    }

    case PostActionTypes.AddSuccess: {
      const newState = {...state};
      newState.list.unshift((action as PostAddAction).post);
      return newState;
    }

    case PostActionTypes.DeleteSuccess: {
      const newState = {...state};

      const index = newState.list.indexOf((action as PostDeleteAction).post);
      if (index !== -1) {
        newState.list.splice(index, 1);
      }
      return newState;
    }

    case PostActionTypes.LoadFail:
    case PostActionTypes.AddFail:
    case PostActionTypes.DeleteFail: {
      console.error({error: action});
      return state;
    }

    default:
      return state;
  }
}
