import { TasksComponent } from "./app/tasks/tasks.component";
import { Routes } from "@angular/router";
import { NoTaskComponent } from "./app/tasks/no-task/no-task.component";
import { UserTasksComponent } from "./app/users/user-tasks/user-tasks.component";
import { routes as userRoutes } from "./app/users/users.routes";
import { NotFoundComponent } from "./app/not-found/not-found.component";

export const appRoutes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    children: userRoutes
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]
