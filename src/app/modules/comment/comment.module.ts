import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {CommentComponent, CommentDetailsComponent, CommentsComponent} from './components';
import {CommentRoutingModule} from './comment-routing.module';
import {CommentService} from './services/comment.service';

@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CommentRoutingModule
  ],
  providers: [
    CommentService
  ]
})
export class CommentModule { }
