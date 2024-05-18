import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreedsRoutingModule } from './breeds-routing.module';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    ListPageComponent,
    CardComponent,
    SearchComponent,
    DetailPageComponent,
    FilterComponent,
  ],
  imports: [CommonModule, BreedsRoutingModule],
})
export class BreedsModule {}
