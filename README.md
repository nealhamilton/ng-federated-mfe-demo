References:

- https://martinfowler.com/articles/micro-frontends.html
- https://blog.angular.dev/micro-frontends-with-angular-and-native-federation-7623cfc5f413
- http://angulararchitects.io/en/blog/micro-frontends-with-modern-angular-part-1-standalone-and-esbuild/

Steps to setup angular native federation:

1. create container app

   - `ng add @angular-architects/native-federation --project container-ui --port 4200 --type dynamic-host`
   - add entries to ./container-ui/public/federation.manifest.json for each micro-frontend
   - in app.routes.ts load children via remote module routes for standalone components; example below.

`{
  path: 'mfe01',
  loadChildren: () =>
    loadRemoteModule('micro-frontend-01', './routes').then((m) => m.routes),
},`

2. create micro-frontend(s)

   - add federation remote to each mfe
     - `ng add @angular-architects/native-federation --project micro-frontend-01 --port 4201 --type remote`
     - `ng add @angular-architects/native-federation --project micro-frontend-02 --port 4202 --type remote`
   - expose app.routes.ts of each mfe in federation.config.ts

How to run locally:

1. apps:
   - `./container-ui ng serve `
   - `./micro-front-end01 ng serve`
   - `./micro-front-end02 ng serve`
2. open localhost:4200
   - click nav links to view micro front-ends
