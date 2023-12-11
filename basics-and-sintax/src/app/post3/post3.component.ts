import { Component } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-post3',
  templateUrl: './post3.component.html',
  styleUrls: ['./post3.component.scss'],
})
export class Post3Component {
  arr = [1, 1, 2, 3, 5, 8, 13];

  objs = [
    {
      title: 'Post 1',
      author: 'Dmitry',
      comments: [
        { name: 'Max', text: 'lorem 1' },
        { name: 'Max', text: 'lorem 2' },
        { name: 'Max', text: 'lorem 3' },
      ],
    },
    {
      title: 'Post 2',
      author: 'Dmitry2',
      comments: [
        { name: 'Max2', text: 'lorem 1' },
        { name: 'Max2', text: 'lorem 2' },
        { name: 'Max2', text: 'lorem 3' },
      ],
    },
  ];

  now: Date = new Date();
}
