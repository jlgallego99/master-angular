import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { AddTaskComponent } from "./add-task/add-task.component";
import { NewTaskData } from "./task/task.model";
import { TasksService } from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    AddTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name?: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
