import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  task: Task = { id: 0, name: '' };

  constructor(private taskService: TaskService) { }

  addOrUpdateTask(): void {
    if (this.task.id === 0) {
      this.taskService.addTask(this.task).subscribe(() => {
        this.task = { id: 0, name: '' };
      });
    } else {
      this.taskService.updateTask(this.task).subscribe(() => {
        this.task = { id: 0, name: '' };
      });
    }
  }

  editTask(task: Task): void {
    this.task = { ...task };
  }
}
