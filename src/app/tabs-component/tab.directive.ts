import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[tab]',
})
export class TabDirective {
  @Input()
  name: string | null;

  constructor() {
    this.name = null;
  }
}
