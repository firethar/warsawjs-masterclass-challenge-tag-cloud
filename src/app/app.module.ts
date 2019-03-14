import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TagCloudComponent } from './tag-cloud/tag-cloud.component';

@NgModule({
  declarations: [
    AppComponent,
    TagCloudComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
