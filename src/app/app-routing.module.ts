import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';

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
      {
        path: 'residents',
        loadChildren: () => import('./residents/residents.module').then(m => m.ResidentsModule),
      },
      {
        path: '404',
        component: NotFoundPageComponent
      },
      {
        path: '**',
        redirectTo: '404'
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
