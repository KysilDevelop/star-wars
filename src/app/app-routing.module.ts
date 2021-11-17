import { NgModule } from '@angular/core';
import { PlanetsPageComponent } from './pages/planets-page/planets-page.component';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsListComponent } from './pages/planets-list/planets-list.component';

const routes: Routes = [
  {path: 'planet/:id', component: PlanetsPageComponent },
  {path: 'planets', component: PlanetsListComponent },
  {path: '', redirectTo: 'planets', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
