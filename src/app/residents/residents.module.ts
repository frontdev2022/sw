import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import { ResidentSinglePageComponent } from './pages/resident-single-page/resident-single-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(
      [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: '/404'
        },
        {path: ':id', component: ResidentSinglePageComponent}
      ]
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: [ResidentSinglePageComponent],
})
export class ResidentsModule {

}
