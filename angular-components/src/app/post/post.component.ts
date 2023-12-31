import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None //делает стили глобальными
})
export class PostComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
{
  @Input() post!: Post;
  @ContentChild('info', { static: true }) infoRef!: ElementRef;
  @Output() onRemove = new EventEmitter<number>

  // constructor() {
  //   console.log('constructor');
  // }

  removePost() {
    this.onRemove.emit(this.post.id)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }
  ngOnInit(): void {
    console.log('ngOnInit');
    // console.log(this.infoRef.nativeElement);
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentCheck');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
