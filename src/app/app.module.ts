import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CreateComponent} from './create/create.component';
import {ListComponent} from './list/list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {postReducer} from './redux/post.reducer';
import {EffectsModule} from '@ngrx/effects';
import {PostLoadEffect} from './redux/effects/post-load.effect';
import {PostAddEffect} from './redux/effects/post-add.effect';
import {PostDeleteEffect} from './redux/effects/post-delete.effect';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({post: postReducer}),
    EffectsModule.forRoot([PostLoadEffect, PostAddEffect, PostDeleteEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
