import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabs-component',
  templateUrl: './tabs-component.component.html',
  styleUrls: ['./tabs-component.component.scss'],
})
export class TabsComponentComponent {
  @Input()
  tabs: string[] = [];

  selectedTab: string | undefined;

  constructor() {
    this.selectedTab = 'tab1';
  }

  onClick(tabName: string) {
    this.selectedTab = tabName;
  }
}
