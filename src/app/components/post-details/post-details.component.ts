import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPost } from '../../models/post.interface';
import { PostService } from "../../services/post.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: IPost;

  constructor(private activatedRouter: ActivatedRoute,
              private postService: PostService) {
  }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(({id}) => {
      this.postService.getPost(id).subscribe(value => this.postDetails = value);
    })
  }
}
