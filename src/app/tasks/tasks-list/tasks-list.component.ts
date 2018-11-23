import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  tasks: any;

  constructor() { }

  ngOnInit() {
    setTimeout( () => this.loadTask(), 1000);
  }

  loadTask() {
    this.tasks = [
      1, 2, 3, 5, 6
    ];
  }
}
