import { Injectable } from '@angular/core';
import { Task } from './task';
import { TASKS } from './task-mock';
import * as _ from "lodash";

@Injectable()
export class TaskService {
  tasks = TASKS;

  getTasks(): Promise<Task[]> {
    return Promise.resolve(this.tasks);
  }

  getTask(id: number): Promise<Task> {
    return this.getTasks()
               .then(tasks => tasks.find(task => task.id === id));
  }

  addTask(task: Task): Promise<Task> {
    task.id = this.tasks.length + 1;
    this.tasks.push(task);

    return Promise.resolve(task);
  }

  deleteTask(id: number): Promise<Boolean> {
    _.remove(this.tasks, (task) => task.id === id);

    return Promise.resolve(true);
  }
}
