import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component
} from '@angular/core';
import {
  action,
  computed,
  makeObservable,
  observable
} from 'mobx';
import {CounterService} from '../services/counter.service';

export interface TotalObj {
  total: number;
}

@Component({
  selector: 'app-reactive-comp',
  templateUrl: './reactive-comp.component.html',
  styleUrls: ['./reactive-comp.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveCompComponent {
  @observable counter = 1;
  @observable showCounterFromService = true;

  constructor(
    public counterService: CounterService,
    private cd: ChangeDetectorRef
  ) {
    makeObservable(this);
  }

  get ordinaryGetterThatReturnsObject(): TotalObj {
    /**
     * Данный геттер будет вызван при каждом `detectChanges` и он всегда будет возвращать новый объект, т.е.
     * все дочерние OnPush-компоненты, в инпуты которым будет передаваться результат этого геттера, будут вынуждены
     * перерендерится, даже несмотря на то, что структурно новый объект может быть равен предыдущему.
     */
    console.log('ordinaryGetterThatReturnsObject called');
    return {
      total: this.counter + this.counterService.doubledCounter
    };
  }

  @computed
  get computedGetterThatReturnsObject(): TotalObj {
    /**
     * Как только @computed геттер будет вызван, его результат будет закеширован до тех пор, пока другие
     * @observable/@computed от которых он зависит, не изменятся, то есть вызов `detectChanges` у этого компонента
     * будет, по-сути, бесплатный, т.к. все @computed-геттеры будут просто отдавать закешированный результат.
     *
     * Это позволяет делать геттеры "тяжелыми" (с множеством вычислений), а также возвращать из них массивы/объекты
     * без опасений, что это приведет к рендеру дочерних OnPush-компонентов, в которые они передаются в виде инпутов.
     *
     * Понажимай кнопку `Run cd.detectChanged()` и посмотри, что будет в консоли.
     */
    console.log('computedGetterThatReturnsObject called');
    return {
      total: this.counter + this.counterService.doubledCounter
    };
  }

  @action
  incCounter() {
    this.counter++;
  }

  @action
  toggleCounterType() {
    this.showCounterFromService = !this.showCounterFromService;
  }

  @action
  detectChanges() {
    this.cd.detectChanges();
  }
}
