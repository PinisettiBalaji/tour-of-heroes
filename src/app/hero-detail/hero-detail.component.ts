import { Component } from '@angular/core';
import { Hero } from '../hero';

import { Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {

  @Input() hero!: Hero;

  constructor() { }
  ngOnInit(): void { }

}
