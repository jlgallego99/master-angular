import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideRouter } from "@angular/router";
import { TasksComponent } from "./app/tasks/tasks.component";
import { appRoutes } from "./app.routes";
import { appConfig } from "./app.config";

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
