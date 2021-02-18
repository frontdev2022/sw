import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PlanetsPageComponent} from './pages/planets-page/planets-page.component';
import {PlanetsService} from './services/planets.service';

@NgModule({
  declarations: [PlanetsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {path: '', component: PlanetsPageComponent}
      ]
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    PlanetsService
  ]
})
export class PlanetsModule {

}
