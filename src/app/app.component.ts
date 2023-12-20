import { Component, Signal, WritableSignal, computed, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'st-sandbox';

  count: WritableSignal<number> = signal(0);
  message: Signal<string> = computed(() => `the count is: ` + this.count())

  count$ = new BehaviorSubject<number>(0);

  addSignal() {
    this.count.update(value => value + 1);
    console.log(this.count())
  }

  addBehaviorSubject() {
    const value: number = this.count$.value + 1;
    this.count$.next(value);
    console.log(this.count())
  }
}
