import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { enviroments } from 'src/enviroments/enviroments';
import { Breed } from '../interfaces/breed.interface';
import { DetailBreed } from '../interfaces/breed.interface';

@Injectable({
  providedIn: 'root',
})
export class BreedsService {
  private baseUrl = enviroments.baseUrl;
  private apiKey = enviroments.apiKey;

  constructor(private http: HttpClient) {}

  /**
   * @description Retrieves a list of cat breeds.
   *
   * @param page The page number to retrieve (default: 1).
   * @param pageSize The number of breeds per page (default: 10).
   * @returns An Observable that emits an array of Breed objects.
   */
  getBreeds(page: number = 1, pageSize: number = 10): Observable<Breed[]> {
    return this.http.get<Breed[]>(
      `${this.baseUrl}/v1/breeds?api_key=${this.apiKey}&limit=${pageSize}&page=${page}`
    );
  }

  /**
   * @description Retrieves a specific cat breed.
   *
   * @param name The ID of the breed to retrieve.
   * @returns An Observable that emits a Breed object.
   */
  getBreed(name: string): Observable<Breed[]> {
    return this.http.get<Breed[]>(
      `${this.baseUrl}/v1/breeds/search?q=${name}&api_key=${this.apiKey}`
    );
  }

  /**
   * @description Retrieves the details of a breed by its ID.
   *
   * @param id The ID of the breed to retrieve.
   * @returns An Observable that emits an array of DetailBreed objects, or undefined if an error occurs.
   */
  getBreedById(id: string): Observable<DetailBreed[] | undefined> {
    return this.http
      .get<DetailBreed[]>(
        `${this.baseUrl}/v1/images/search?has_breeds=true&limit=10&attach_image=1&breed_id=${id}&api_key=${this.apiKey}`
      )
      .pipe(
        catchError((err) => {
          return of(undefined);
        })
      );
  }
}
