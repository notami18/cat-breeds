import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
  {
    path: 'breeds',
    loadChildren: () =>
      import('./breeds/breeds.module').then((m) => m.BreedsModule),
  },
  {
    path: '404',
    component: Error404PageComponent,
  },
  { path: '', redirectTo: 'breeds', pathMatch: 'full' },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
