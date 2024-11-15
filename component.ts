import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  posts = [
    {
      "id": 1,
      "user": "John Doe",
      "content": "Just had an amazing day at the park!",
      "comments": [
        "Sounds fun!",
        "Glad to hear that!"
      ]
    },
    {
      "id": 2,
      "user": "Jane Smith",
      "content": "Excited about the new project launch tomorrow.",
      "comments": [
        "Good luck!",
        "You will do great!"
      ]
    }
  ];
  
}
