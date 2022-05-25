import { Component, OnInit } from '@angular/core';

import {IPost} from '../../models/post.interface';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPost[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPost().subscribe(value => this.posts = value);
  }
}