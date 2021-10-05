import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ReactiveCompComponent} from './reactive-comp/reactive-comp.component';
import {MobxDirective} from './directives/mobx.directive';
import { NonReactiveOnpushCompComponent } from './non-reactive-onpush-comp/non-reactive-onpush-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveCompComponent,
    MobxDirective,
    NonReactiveOnpushCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
