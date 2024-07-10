import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  phpTasks: Task[] = [];
  pythonTasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
    });

    this.taskService.getTasksFromPhp().subscribe(data => {
      this.phpTasks = data;
    });

    this.taskService.getTasksFromPython().subscribe(data => {
      this.pythonTasks = data;
    });
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    });
  }

  editTask(task: Task): void {
    // Placeholder function to edit the task, will be implemented in TaskFormComponent
  }
}
