import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {

  @Input() userPosts: any[] = [];
  likedPosts: Set<number> =new Set();

  likePost(postId: number): void{
    if(this.likedPosts.has(postId)){
      this.likedPosts.delete(postId);
    } else{
        this.likedPosts.add(postId);
    }
  }
}
