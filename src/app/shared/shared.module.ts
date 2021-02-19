import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreloaderComponent} from './components/preloader/preloader.component';
import { ResidentPreviewComponent } from './components/resident-preview/resident-preview.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [PreloaderComponent, ResidentPreviewComponent],
  imports: [CommonModule, RouterModule],
  exports: [PreloaderComponent, ResidentPreviewComponent]
})
export class SharedModule {

}
