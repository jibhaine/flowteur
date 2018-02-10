/**
 * Angular module for the rest api
 */
import { ServerModule } from '@angular/platform-server';
import { NgModule } from '@angular/core';


// import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    // AppComponent
  ],
  imports: [
    ServerModule
  ],
  providers: [],
  bootstrap: []
})
export class ApiServerModule { }
