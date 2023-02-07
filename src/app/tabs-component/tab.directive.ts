import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[tab]',
})
export class TabDirective {
  @Input('tab')
  name: string = '';

  constructor(public template: TemplateRef<any>) {}
}
