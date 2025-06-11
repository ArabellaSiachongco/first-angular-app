import { Component, inject, Input } from '@angular/core';
import { type Task } from './task.model';
// import { CardComponent } from '../../shared/card/card.component';
// import { DatePipe } from '@angular/common';
import { TasksServices } from '../tasks.service';

@Component({
  selector: 'app-task',
  // standalone: true,
  // imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  // @Output() complete = new EventEmitter<string>();
  private taskServices = inject(TasksServices);

  onCompleteTask() {
    this.taskServices.removeTask(this.task.id);
  }
}
