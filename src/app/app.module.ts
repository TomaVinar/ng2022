import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {PostsComponent} from './components/posts/posts.component';
import {CommentsComponent} from './components/comments/comments.component';
import {PostComponent} from './components/post/post.component';
import {CommentComponent} from './components/comment/comment.component';
import {HomeComponent} from './components/home/home.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CommentsComponent,
    PostComponent,
    CommentComponent,
    HomeComponent,
    PostDetailsComponent,
    CommentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'all-posts', component: PostsComponent,
        children: [
          {path: 'post-details/:id', component: PostDetailsComponent}
        ]},
      {path: 'all-comments', component: CommentsComponent,
      children: [
        {path: 'comment-details/:id', component: CommentDetailsComponent}
      ]}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
