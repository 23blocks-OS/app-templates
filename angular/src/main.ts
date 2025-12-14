import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideBlocks23 } from '@23blocks/angular';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { environment } from './environments/environment';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideBlocks23({
      appId: environment.appId,
      urls: environment.urls,
      authMode: environment.authMode,
      storage: environment.storage,
    }),
  ],
}).catch((err) => console.error(err));
