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
  @Input()
  tabs: string[] = [];

  @ContentChildren(TabDirective, { read: TemplateRef<any> })
  tabTemplates: QueryList<any> | undefined;

  selectedTab: string | undefined;

  currentSelectedTab: TemplateRef<any> | null;

  constructor() {
    this.selectedTab = 'tab1';
    this.currentSelectedTab = null;
  }

  ngAfterContentInit(): void {
    console.log(this.tabTemplates);
    if (!this.currentSelectedTab) {
      this.tabTemplates?.get(0);
    }
  }

  onClick(tabIndex: number) {
    this.selectedTab = this.tabs[tabIndex];
    this.currentSelectedTab = this.tabTemplates?.get(tabIndex);
  }
}
