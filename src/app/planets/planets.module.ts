import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PlanetsPageComponent} from './pages/planets-page/planets-page.component';
import { PlanetPreviewComponent } from '../shared/components/planet-preview/planet-preview.component';
import {SharedModule} from '../shared/shared.module';
import {PlanetSinglePageComponent} from './pages/planet-single-page/planet-single-page.component';
import { PlanetsHeaderComponent } from './pages/planets-page/planets-header/planets-header.component';


@NgModule({
  declarations: [PlanetsPageComponent, PlanetPreviewComponent, PlanetSinglePageComponent, PlanetsHeaderComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(
      [
        {path: '', component: PlanetsPageComponent},
        {path: ':id', component: PlanetSinglePageComponent}
      ]
    )
  ],
  exports: [
    RouterModule
  ]
})
export class PlanetsModule {

}
