import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images = [
    {
      id: 1,
      label: "Spaghetti al sugo"
    },
    {
      id: 2,
      label: "tagliata di manzo"
    },
    {
      id: 3,
      label: "tiramisu classico"
    }
  ];

  percorso = '../assets/images/carousel-';

  showNavigation() {
    if (this.images.length > 1) {
      return true;
    }
    return false;
  }

  constructor() { }

  ngOnInit(): void {
  }


}
