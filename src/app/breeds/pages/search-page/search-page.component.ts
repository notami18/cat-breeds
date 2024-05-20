import { Component } from '@angular/core';
import { Breed } from '../../interfaces/breed.interface';
import { FormControl } from '@angular/forms';
import { BreedsService } from '../../services/breeds.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
})
export class SearchPageComponent {
  public searchInput = new FormControl('');
  public breeds: Breed[] = [];
  public selectedBreed?: Breed;

  constructor(private breedService: BreedsService) {}

  /**
   * @description Searches for a breed based on the input value and updates the breeds list.
   */
  searchBreed(): void {
    const value: string = this.searchInput.value || '';
    this.breedService.getBreed(value).subscribe((breeds) => {
      this.breeds = breeds;
    });
  }

  /**
   * @description Handles the selection of an option from the autocomplete dropdown.
   * @param event The MatAutocompleteSelectedEvent containing the selected option.
   */
  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedBreed = undefined;
      return;
    }

    const breed: Breed = event.option.value;
    this.searchInput.setValue(breed.name);

    this.selectedBreed = breed;
  }
}
