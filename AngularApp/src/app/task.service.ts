import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private dotnetApiUrl = 'http://localhost:5177/api/tasks'; // .NET API URL
  private phpApiUrl = 'http://localhost/PHPApp/script.php'; // PHP API URL
  private pythonApiUrl = 'http://localhost:5000/tasks'; // Python API URL

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.dotnetApiUrl);
  }

  getTasksFromPhp(): Observable<Task[]> {
    return this.http.get<Task[]>(this.phpApiUrl);
  }

  getTasksFromPython(): Observable<Task[]> {
    return this.http.get<Task[]>(this.pythonApiUrl);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.dotnetApiUrl, task);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.dotnetApiUrl}/${task.id}`, task);
  }

  deleteTask(taskId: number): Observable<void> {
    return this.http.delete<void>(`${this.dotnetApiUrl}/${taskId}`);
  }
}
