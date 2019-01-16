import {Component, OnInit} from '@angular/core';
import {PostEntity} from '../redux/post.entity';
import {select, Store} from '@ngrx/store';
import {PostState} from '../redux/post.state';
import {Observable} from 'rxjs';
import {PostDeleteAction, PostLoadAction} from '../redux/post.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  postState$: Observable<PostState>;

  constructor(private store: Store<{ post: PostState }>) {
    this.postState$ = store.pipe(select('post'));
  }

  ngOnInit() {
    this.store.dispatch(new PostLoadAction());
  }

  onDelete(post: PostEntity) {
    this.store.dispatch(new PostDeleteAction(post));
  }

}
