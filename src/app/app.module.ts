import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule  } from '@angular/common/http';
import { PlanetsPageComponent } from './pages/planets-page/planets-page.component';
import { PlanetsListComponent } from './pages/planets-list/planets-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsPageComponent,
    PlanetsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
