import { Component, OnInit } from '@angular/core';
import { Breed } from '../../interfaces/breed.interface';
import { BreedsService } from '../../services/breeds.service';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css',
})
export class ListPageComponent implements OnInit {
  public breeds: Breed[] = [];
  public page: number = 1;
  public filterInput = new FormControl('');
  public options: Breed[] = [];
  public selectedBreed?: Breed;


  constructor(private breedsService: BreedsService) { }

  ngOnInit(): void {
    this.breedsService
      .getBreeds()
      .subscribe((breeds) => (this.breeds = breeds));

    this.breedsService
      .getAllBreeds()
      .subscribe((breeds) => (this.options = breeds));
  }

  /**
   * @description Loads more breeds and appends them to the existing list.
   */
  loadMore(): void {
    this.page++;
    this.breedsService
      .getBreeds(this.page)
      .subscribe(
        (breeds) => (this.breeds = [...this.breeds, ...breeds])
      );
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      return;
    }

    const breed: Breed = event.option.value;
    this.filterInput.setValue(breed.name);

    this.breedsService.getBreed(breed.name).subscribe((breeds) => {
      this.breeds = breeds;
    });
  }
}
