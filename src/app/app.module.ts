import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from './shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'login',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  }
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule, // Required for Angular Material
    // NoopAnimationsModule, // Fallback for Angular Material in unsupported browsers
    SharedModule
  ],
  declarations: [
    AppComponent
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
