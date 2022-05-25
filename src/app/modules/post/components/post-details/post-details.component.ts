import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {IPostDetails} from '../../models/postDetails.interface';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: IPostDetails;

  constructor(private activatedRoute:ActivatedRoute, private postService:PostService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.postService.getPost(id).subscribe(value => this.postDetails = value);
    })
  }
}
