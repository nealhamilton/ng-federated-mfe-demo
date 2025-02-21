import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  /**
   * STEP X: add mfe's path and loadRemoteModule mfe's routes
   */
  {
    path: 'mfe01',
    loadChildren: () =>
      /**
       * NOTE:
       * 'mfe-01' provided as first argument corresponds to
       * microfrontend's key in federation.manifest.json
       */
      loadRemoteModule('silly-name-for-mfe-01', './routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'mfe02',
    loadChildren: () =>
      loadRemoteModule('mfe-02', './routes').then((m) => m.routes),
  },
  {
    path: 'mfe03',
    loadChildren: () =>
      loadRemoteModule('mfe-03', './routes').then((m) => m.routes),
  },
  {
    path: 'mfe04',
    loadChildren: () =>
      loadRemoteModule('mfe-04', './routes').then((m) => m.routes),
  },
  {
    path: 'mfe05',
    loadChildren: () =>
      loadRemoteModule('mfe-05', './routes').then((m) => m.routes),
  },
];
