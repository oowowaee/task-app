import { Component, Input } from '@angular/core';

import { TaskBase } from './task-base.component';
import { Task } from '../task';

@Component({
  selector: 'task-info',
  templateUrl: '../views/task-info.component.html',
  styleUrls: ['../styles/task-info.component.scss',
              '../styles/task.component.scss']
})

export class TaskInfoComponent extends TaskBase {
  @Input() task: Task;
}
