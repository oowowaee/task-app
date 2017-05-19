import { Component, Input } from '@angular/core';
import { Task } from '../tasks/task';
import { TaskState } from '../tasks/task-state';
import * as _ from "lodash";

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent {
  @Input() tasks: Task[];
  @Input() taskState: TaskState;

  totalTime(): Number {
    return _.sum(_.map(this.tasks, (task) => { return +task.estimate || 0 }));
  }
}
