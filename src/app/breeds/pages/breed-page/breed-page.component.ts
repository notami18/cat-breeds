import { Component, OnInit } from '@angular/core';
import { BreedsService } from '../../services/breeds.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Breed } from '../../interfaces/breed.interface';

@Component({
  selector: 'app-breed-page',
  templateUrl: './breed-page.component.html',
  styleUrl: './breed-page.component.css',
})
export class BreedPageComponent implements OnInit {
  public breeds?: Breed[];
  public images: string[] = [];
  public currentImageIndex = 0;

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
  }

  /**
   * @description Navigates back to the list of breeds.
   */
  goBack(): void {
    this.router.navigateByUrl('breeds/list');
  }

  /**
   * @description Moves to the next image in the list of images.
   */
  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  /**
   * @description Moves to the previous image in the image gallery.
   */
  previousImage() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }
}
