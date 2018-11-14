import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../post.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {


  
  posts:Post[]=[];
  private postsSub:Subscription
  constructor(public postService:PostsService) { }

  ngOnInit() {
    this.postService.getPostUpdateListener().subscribe((posts:Post[])=>{
      this.posts = posts;
    });
  }
ngOnDestroy(){
  this.postsSub.unsubscribe();
}
}
