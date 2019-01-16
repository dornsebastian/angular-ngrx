import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';
import {PostState} from '../redux/post.state';
import {PostAddAction} from '../redux/post.actions';
import {PostEntity} from '../redux/post.entity';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<{ post: PostState }>) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const newPost = PostEntity.fromJson(form.value);
    this.store.dispatch(new PostAddAction(newPost));
    form.resetForm();
  }

}
