import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TaskBase } from './task-base.component';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'task-new',
  templateUrl: '../views/task-edit.component.html',
  styleUrls: ['../styles/task.component.scss',
              '../styles/task-edit.component.scss'],
})

export class TaskNewComponent extends TaskBase {
  task:Task = new Task;
  isNew = true;

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { super() }

  addTask():void {
    this.taskService.addTask(this.task).then(() => this.router.navigate(['/tasks']));
  }
}
