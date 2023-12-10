import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Dynamic title';
  number = 42;
  arr = [1, 2, 3];
  obj = { a: 1, b: { c: 2 } };
  img =
    'https://mherman.org/node-workshop/slides/react-docker/images/react-heart.svg';

  inputValue = '';
  constructor() {
    setTimeout(() => {
      console.log('timeout is over');
      this.img =
        'https://cdn4.iconfinder.com/data/icons/logos-and-brands-1/512/21_Angular_logo_logos-1024.png';
    }, 5000);
  }

  onInput(event: KeyboardEvent) {
    console.log('Event', event);
    this.inputValue = (<HTMLInputElement>event.target).value;
  }

  onBlur(str: string) {
    this.inputValue = str
  }

  onClick() {
    console.log('click');
  }
}
