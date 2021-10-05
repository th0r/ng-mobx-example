import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {TotalObj} from '../reactive-comp/reactive-comp.component';

@Component({
  selector: 'app-non-reactive-onpush-comp',
  templateUrl: './non-reactive-onpush-comp.component.html',
  styleUrls: ['./non-reactive-onpush-comp.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NonReactiveOnpushCompComponent implements OnChanges {
  @Input() name: string;
  @Input() obj: TotalObj;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.obj && !changes.obj.firstChange) {
      console.log('NonReactiveOnpushCompComponent: ngOnChanges');
    }
  }
}
