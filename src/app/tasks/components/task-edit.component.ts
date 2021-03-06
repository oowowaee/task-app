import 'rxjs/add/operator/switchMap';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup }            from '@angular/forms';

import { TaskBase } from './task-base.component';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'task-edit',
  templateUrl: '../views/task-edit.component.html',
  styleUrls: ['../styles/task.component.scss',
              '../styles/task-edit.component.scss'],
})

export class TaskEditComponent extends TaskBase implements OnInit {
  task: Task;
  isNew = false;

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
