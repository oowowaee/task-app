import { Component, OnInit } from '@angular/core';
import { Task } from '../tasks/task';
import { TaskService } from '../tasks/task.service';
import { TASKSTATES } from '../tasks/task-states';

@Component({
  selector: 'task-display',
  templateUrl: './task-display.component.html'
})

export class TaskDisplayComponent implements OnInit {
  tasks: Task[] = [];

  taskStates = TASKSTATES;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().then(tasks => this.tasks = tasks);
  }
}
