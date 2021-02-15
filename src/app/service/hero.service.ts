import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  list: Hero[] = [
    {
      id: 1,
      name: "Raistlin Majere",
      superPower: "supremely talented magic user",
      address: "Tower of High Sorcery at Palanthas, Krynn"
    },
    {
      id: 2,
      name: "Daenerys Targaryen",
      superPower: "master and queen of dragons",
      address: "Red Keep, King's Landing, Westeros"
    },
    {
      id: 3,
      name: "Frodo",
      superPower: "purity of soul",
      address: "The Shire, Middle Earth"
    },
    {
      id: 4,
      name: "Geralt of Rivia",
      superPower: "master witcher",
      address: "Vizima, Temeria, Northern Kingdoms"
    },
    {
      id: 5,
      name: "Revan",
      superPower: "jedi master",
      address: "Star Forge, Rakata homeworld"
    },
  ]

  getAll(): Hero[] {
    return this.list;
  }

  constructor() { }
}
