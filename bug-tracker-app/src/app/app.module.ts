import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UtilsModule } from './utils/utils.module';

//Components
import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';
import { BugStatsComponent } from './bugTracker/bugStats/bugStats.component';
import { BugEditComponent } from './bugTracker/bugEdit/bugEdit.component';
import { GreeterComponent } from './greeter/greeter.component';

//Pipes
import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';

//Services
import { BugOperationsService } from './bugTracker/services/bugOperations.service';
import { BugStorageService } from './bugTracker/services/bugStorage.service';
import { BugServerService } from './bugTracker/services/bugServer.service';
import { GreeterService } from './greeter/greeter.service';



@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    ClosedCountPipe,
    BugStatsComponent,
    BugEditComponent,
    GreeterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UtilsModule,
    HttpModule
  ],
  providers: [
    { provide : BugOperationsService, useClass : BugOperationsService},
    BugStorageService, BugServerService, GreeterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
