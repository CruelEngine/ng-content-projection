import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { TabDirective } from './tab.directive';

@Component({
  selector: 'app-tabs-component',
  templateUrl: './tabs-component.component.html',
  styleUrls: ['./tabs-component.component.scss'],
})
export class TabsComponentComponent implements AfterContentInit {
  @ContentChildren(TabDirective, { read: TemplateRef<any> })
  tabTemplates: QueryList<TemplateRef<TabDirective>> | null;

  @ContentChildren(TabDirective)
  tabs: QueryList<TabDirective> | undefined;

  currentSelectedTab: TemplateRef<any> | undefined;

  constructor() {
    this.tabTemplates = null;
  }

  ngAfterContentInit(): void {
    console.log(this.tabTemplates);
    if (this.tabTemplates && this.tabTemplates.length > 0) {
      this.currentSelectedTab = this.tabTemplates.get(0);
    }
  }

  onClick(tabIndex: number) {
    if (this.tabTemplates && this.tabTemplates.get(tabIndex) != null) {
      this.currentSelectedTab = this.tabTemplates.get(tabIndex);
    }
  }
}
