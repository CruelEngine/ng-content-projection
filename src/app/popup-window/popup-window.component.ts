import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-popup-window',
  templateUrl: './popup-window.component.html',
  styleUrls: ['./popup-window.component.scss']
})
export class PopupWindowComponent implements OnChanges{
  @Input() title: string;
  @Input() content: string;

  constructor() {
    this.title = 'Default';
    this.content = '';
  }


  ngOnChanges(changes: SimpleChanges): void {
    if(changes['title'].previousValue != changes['title'].currentValue) {
      //do something
    }
  }
  

}
