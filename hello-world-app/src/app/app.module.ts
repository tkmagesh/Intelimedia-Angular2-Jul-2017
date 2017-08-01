import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';

@NgModule({
	//UI Entities (Components, Directives, Pipes)
  declarations: [
    AppComponent,
    GreeterComponent
  ],
  //Module level import
  imports: [
    BrowserModule
  ],
  //Non UI Entites (Services)
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
