import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero: Hero = new Hero;

  phrase: string = '';

  sorterKey: string = '';

  heroList = this.heroService.getAll();

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }

  onChangePhrase(event: Event): void {
    this.phrase= (event.target as HTMLInputElement).value;
  }

  onColumnSelect(key: string) : void {
    this.sorterKey = key;
  }

}
