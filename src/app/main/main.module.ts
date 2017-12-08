import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {MainComponent} from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }
];

@NgModule({

  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule {
}
