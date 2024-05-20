import { Component, OnInit } from '@angular/core';
import { Breed } from '../../interfaces/breed.interface';
import { BreedsService } from '../../services/breeds.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css',
})
export class ListPageComponent implements OnInit {
  public breeds: Breed[] = [];
  public page: number = 1;

  constructor(private breedsService: BreedsService) {}

  ngOnInit(): void {
    // [];
    // // TODO: Implement the logic to retrieve the list of breeds.
    this.breedsService
      .getBreeds()
      .subscribe((breeds) => (this.breeds = breeds));
  }

  /**
   * @description Loads more breeds and appends them to the existing list.
   */
  loadMore(): void {
    this.page++;
    this.breedsService
      .getBreeds(this.page)
      .subscribe(
        (breeds: Breed[]) => (this.breeds = [...this.breeds, ...breeds])
      );
  }
}
