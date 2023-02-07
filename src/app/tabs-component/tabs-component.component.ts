import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { TabDirective } from './tab.directive';

@Component({
  selector: 'app-tabs-component',
  templateUrl: './tabs-component.component.html',
  styleUrls: ['./tabs-component.component.scss'],
})
export class TabsComponentComponent implements AfterContentInit {
  @ContentChildren(TabDirective)
  tabs: QueryList<TabDirective> | undefined;

  currentSelectedTab: TemplateRef<any> | undefined | null;

  @ViewChild('selectedTab', { read: ViewContainerRef })
  selectedTab: ViewContainerRef | undefined;

  constructor() {}

  ngAfterContentInit(): void {
    if (this.tabs && this.tabs.length > 0) {
      this.currentSelectedTab = this.tabs.get(0)?.template;
    }
  }

  onClick(tabIndex: number) {
    this.selectedTab?.clear();
    if (this.tabs && this.tabs.get(tabIndex) != null) {
      this.currentSelectedTab = this.tabs.get(tabIndex)?.template;
      if (this.currentSelectedTab) {
        this.selectedTab?.createEmbeddedView(this.currentSelectedTab, {
          $implicit: 'hello',
          data: 'hello world',
        });
      }
    }
  }
}
