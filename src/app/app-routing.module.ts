import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: 'breeds',
    loadChildren: () =>
      import('./breeds/breeds.module').then((m) => m.BreedsModule),
  },
  {
    path: '404',
    component: NotFoundPageComponent,
  },
  { path: '', redirectTo: 'breeds', pathMatch: 'full' },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
