import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
// form module to use the ngModel
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksServices } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  storeTitle = '';
  storeSummary = '';
  storeDate = '';
  private tasksServices = inject(TasksServices);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksServices.addTask(
      {
        title: this.storeTitle,
        summary: this.storeSummary,
        date: this.storeDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
