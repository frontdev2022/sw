import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {path: '', component: AppComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'planets'
      },
      {
        path: 'planets',
        loadChildren: () => import('./planets/planets.module').then(m => m.PlanetsModule),
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
  constructor(
  ) {

  }


}
