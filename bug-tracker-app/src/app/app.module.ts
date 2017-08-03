import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';

//Pipes
import { TrimTextPipe } from './bugTracker/pipes/trimText.pipe';
import { SortPipe } from './bugTracker/pipes/sort.pipe';

//Services
import { BugOperationsService } from './bugTracker/services/bugOperations.service';



@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    TrimTextPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BugOperationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
