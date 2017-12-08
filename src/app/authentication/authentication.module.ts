import {NgModule} from '@angular/core';
import {AuthenticationComponent} from './authentication.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent
  }
];

@NgModule({

  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    AuthenticationComponent
  ]
})
export class AuthenticationModule {
}
