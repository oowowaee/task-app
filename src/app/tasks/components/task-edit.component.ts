import 'rxjs/add/operator/switchMap';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskBase } from './task-base.component';
import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'task-edit',
  templateUrl: '../views/task-edit.component.html',
  styleUrls: ['../styles/task.component.scss'],
})

export class TaskEditComponent extends TaskBase implements OnInit {
  task: Task;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
   ) { super() }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.taskService.getTask(+params['id']))
      .subscribe(task => this.task = task);
  }

  deleteTask():void {
    this.taskService.deleteTask(this.task.id).then(() => this.router.navigate(['/tasks']));
  }
}
