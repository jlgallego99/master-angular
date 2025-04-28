import { Routes } from '@angular/router';

import { TasksComponent, resolveUserTasks } from '../tasks/tasks.component';
import { NewTaskComponent, canLeaveEditPage } from '../tasks/new-task/new-task.component';
import { TasksService } from '../tasks/tasks.service';

export const routes: Routes = [
  {
    path: '',
    providers: [TasksService],
    children: [{
      path: '',
      redirectTo: 'tasks',
      pathMatch: 'full',
    },
    {
      path: 'tasks', // <your-domain>/users/<uid>/tasks
      component: TasksComponent,
      // loadComponent: () => import('../tasks/tasks.component').then(mod => mod.TasksComponent), // Load the component lazily
      runGuardsAndResolvers: 'always',
      resolve: {
        userTasks: resolveUserTasks,
      },
    },
    {
      path: 'tasks/new',
      component: NewTaskComponent,
      canDeactivate: [canLeaveEditPage]
    }]
  },
];
