// http://karlclement.com/blog/dev/angular2/2016/04/10/capitalize-pipe-angular2/
import {Pipe} from "@angular/core";
import {PipeTransform} from "@angular/core";
import { Task } from '../tasks/task';

@Pipe({name: 'filterByState'})
export class FilterByState implements PipeTransform {
  transform(tasks:Task[], statusId: Number): Task[] {
    if (!tasks) return [];
    return tasks.filter(t => (+t.state === statusId));
  }
}