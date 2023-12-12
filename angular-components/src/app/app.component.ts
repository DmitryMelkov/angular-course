import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-components';

  posts: Post[] = [
    { title: 'Хочу выучить Ангуляр компоненты', text: 'Я все еще учу', id: 1 },
    {
      title: 'Следующий блок',
      text: 'будет про директивы и еще про пайпы',
      id: 2,
    },
    { title: 'Следующий блок', text: 'потом еще что нибудь выучу', id: 3 },
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
    console.log('Post', post);
  }
}
