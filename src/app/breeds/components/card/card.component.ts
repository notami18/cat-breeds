import { Component, Input, OnInit } from '@angular/core';
import { Breed } from '../../interfaces/breed.interface';

@Component({
  selector: 'breeds-breed-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  @Input()
  public breed!: Breed;

  ngOnInit(): void {
    if (!this.breed) {
      throw new Error('Breed is required');
    }
  }
}
