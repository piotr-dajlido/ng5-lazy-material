import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  },
  {
    path: 'main',
    loadChildren: './main/main.module#MainModule'
  }
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes),
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule, // Required for Angular Material
    // NoopAnimationsModule, // Fallback for Angular Material in unsupported browsers
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
