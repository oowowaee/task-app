import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

import { AppComponent } from './app.component';
import { TaskDisplayComponent } from './task-display/task-display.component';
import { TaskListComponent } from './task-lists/task-list.component';
import { TaskInfoComponent } from './tasks/components/task-info.component';
import { TaskEditComponent } from './tasks/components/task-edit.component';
import { TaskNewComponent } from './tasks/components/task-new.component';

import { TaskService } from './tasks/task.service';

import { CapitalizePipe } from './pipes/capitalize.pipe'; // import our pipe here
import { FilterByState } from './pipes/filter-by-state.pipe'; // import our pipe here

import { AppRoutingModule }   from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TaskDisplayComponent,
    TaskEditComponent,
    TaskNewComponent,
    TaskInfoComponent,
    TaskListComponent,
    CapitalizePipe,
    FilterByState
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CustomFormsModule
  ],
  providers: [ TaskService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
