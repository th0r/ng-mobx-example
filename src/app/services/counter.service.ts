import {Injectable} from '@angular/core';
import {
  action,
  computed,
  makeObservable,
  observable
} from 'mobx';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  @observable counter = 1;

  private intervalId: number;

  constructor() {
    makeObservable(this);
    this.intervalId = setInterval(this.incCounter, 5000);
  }

  @computed
  get doubledCounter(): number {
    return this.counter * 2;
  }

  @action.bound
  incCounter() {
    this.counter++;
  }

  stopCounter() {
    clearInterval(this.intervalId);
  }
}
