import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TaskDisplayComponent } from './task-display/task-display.component';
import { TaskListComponent } from './task-lists/task-list.component';
import { TaskInfoComponent } from './tasks/components/task-info.component';
import { TaskEditComponent } from './tasks/components/task-edit.component';
import { TaskNewComponent } from './tasks/components/task-new.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks',  component: TaskDisplayComponent },
  { path: 'task/new', component: TaskNewComponent },
  { path: 'task/:id', component: TaskEditComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
