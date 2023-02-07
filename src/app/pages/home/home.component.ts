import {Component, OnInit} from '@angular/core';
import {PhotosService} from "../../services/photos.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public photos: any;

  constructor(private photosService: PhotosService) {
  }

  ngOnInit(): void {
    this.photos = this.photosService.getListFotos();
  }

}
