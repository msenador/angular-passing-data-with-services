import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { TestComponent } from './test/test.component';
import { LandingComponent } from './landing/landing.component';
import { DecoratorsComponent } from './decorators/decorators.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    TestComponent,
    LandingComponent,
    DecoratorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
