import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  OnInit,
  OnDestroy,
  Input,
  EmbeddedViewRef
} from '@angular/core';
import {
  autorun,
  IReactionDisposer
} from 'mobx';

interface MobxDirectiveOptions {
  // Нужно только для дебага
  name: string;
}

/**
 * Это реализация директивы `*mobxAutorun` из существующей интеграции Angular/Mobx, за вычетов шелухи:
 *   https://github.com/mobxjs/mobx-angular/blob/master/projects/mobx-angular/src/lib/mobx-autorun.directive.ts
 *
 * Я решил ее скопипастить в проект, чтобы тебе было проще с ней играться.
 */
@Directive({selector: '[mobx]'})
export class MobxDirective implements OnInit, OnDestroy {
  @Input('mobx') opts: MobxDirectiveOptions;

  private debug = true;

  private dispose: IReactionDisposer;
  private view: EmbeddedViewRef<any>;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    this.view = this.viewContainer.createEmbeddedView(this.templateRef);

    this.dispose = autorun(() => {
      this.log('MobX autorun called');
      this.view.detectChanges();
      this.log('MobX autorun end');
    });
  }

  ngOnDestroy() {
    this.dispose();
  }

  private log(...args: any[]) {
    if (this.debug) {
      console.log(`${this.opts.name}:`, ...args);
    }
  }
}
