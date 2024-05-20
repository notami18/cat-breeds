import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreedsRoutingModule } from './breeds-routing.module';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { CardComponent } from './components/card/card.component';
import { FilterComponent } from './components/filter/filter.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { BreedPageComponent } from './pages/breed-page/breed-page.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ListPageComponent,
    CardComponent,
    FilterComponent,
    SearchPageComponent,
    BreedPageComponent,
  ],
  imports: [CommonModule, BreedsRoutingModule, MaterialModule],
})
export class BreedsModule {}
