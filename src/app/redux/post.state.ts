import {PostEntity} from './post.entity';

export class PostState {
  initLoad = false;
  list: PostEntity[] = [];
}
