import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { PostRoutingModule } from './post-routing.module';
import {PostService} from './services/post.service';
import {PostComponent, PostDetailsComponent, PostsComponent} from './components';

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PostRoutingModule
  ],
  providers: [
    PostService
  ]
})
export class PostModule { }
