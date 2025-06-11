import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TasksServices } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name?: string;
  isAddingATask = false;

  constructor(private taskServices: TasksServices) {}

  get selectedUserTasks() {
    return this.taskServices.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingATask = true;
  }

  onCloseBtnTask() {
    this.isAddingATask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.isAddingATask = false;
  }
}
