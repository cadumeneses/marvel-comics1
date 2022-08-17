import { Component, OnInit } from '@angular/core';

import { MapMouseEvent } from 'mapbox-gl';

@Component({
  selector: 'app-comic-maps',
  templateUrl: './comic-maps.component.html',
  styleUrls: ['./comic-maps.component.sass'],
})
export class ComicMapsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  layerPaint = {
    'circle-radius': 10,
    'circle-color': '#3887be',
  };

  coordinates = [0, 0];

  onDragStart(event: MapMouseEvent) {
    console.log('onDragStart', event);
  }

  onDragEnd(event: MapMouseEvent) {
    console.log('onDragEnd', event);
  }

  onDrag(event: MapMouseEvent) {
    console.log('onDrag', event);
    this.coordinates = event.lngLat.toArray();
  }

  changeColor(color: string) {
    this.layerPaint = { ...this.layerPaint, 'circle-color': color };
  }
}
