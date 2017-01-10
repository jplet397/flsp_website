
import {Component} from '@angular/core';
import {Image} from "../Interfaces/image.interface";

@Component({
  selector: 'my-carousel',
  templateUrl:"app/carousel/carousel.component.html",
  styleUrls:['app/carousel/carousel.component.css']
})

export class CarouselComponent {
  public images = IMAGES;
}

let IMAGES: Image[] = [
  {  "url": "resources/frontPicture.png" },
  {  "url": "resources/industry.png"},
  {  "url": "resources/pve.png"},
  {  "url": "resources/pvp.png"}
];
