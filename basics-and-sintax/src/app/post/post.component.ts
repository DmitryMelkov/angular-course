import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  title = 'title';
  title1 = 'title1'

  onInput(event: any) {
    this.title = event.target.value;
  }
}
