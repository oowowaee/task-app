import { Inject } from '@angular/core';

import { TASKSTATES } from '../task-states';
import { COLORS } from '../color';

import * as _ from "lodash";

export class TaskBase {
  bgColor: String;
  taskStates = TASKSTATES;

  constructor() { 
    this.bgColor = _.sample(COLORS);
  }
}
