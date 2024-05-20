import { Component, OnInit } from '@angular/core';
import { BreedsService } from '../../services/breeds.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Breed } from '../../interfaces/breed.interface';

@Component({
  selector: 'app-breed-page',
  templateUrl: './breed-page.component.html',
})
export class BreedPageComponent implements OnInit {
  public breeds?: Breed[];
  public images: string[] = [];

  constructor(
    private breedService: BreedsService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(switchMap(({ id }) => this.breedService.getBreedById(id)))
      .subscribe((breed) => {
        if (!breed) this.router.navigate(['/breeds/list']);
        breed?.forEach((b) => {
          this.images.push(b.url);
          if (b.breeds) this.breeds = b.breeds;
        });
      });
    console.log(this.images);
  }

  /**
   * @description Navigates back to the list of breeds.
   */
  goBack(): void {
    this.router.navigateByUrl('breeds/list');
  }
}
