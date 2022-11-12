import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LikeComponent } from './shared/components/like/like.component';
import { FacebookComponent } from './shared/components/facebook/facebook.component';

@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    FacebookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
