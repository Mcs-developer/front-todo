import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksComponent } from './tasks/tasks.component';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from './shared/navbar/navbar.component';


@NgModule({
  imports: [
    CommonModule,
    TasksRoutingModule,
    MaterialModule
  ],
  declarations: [
    TasksListComponent,
    TasksComponent,
    NavbarComponent
  ]
})
export class TasksModule { }
