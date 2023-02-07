import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupWindowComponent } from './popup-window/popup-window.component';
import { MaterialSharedModule } from './material-shared/material-shared.module';
import { TabsComponentComponent } from './tabs-component/tabs-component.component';
import { TabDirective } from './tabs-component/tab.directive';

@NgModule({
  declarations: [
    AppComponent,
    PopupWindowComponent,
    TabsComponentComponent,
    TabDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialSharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
