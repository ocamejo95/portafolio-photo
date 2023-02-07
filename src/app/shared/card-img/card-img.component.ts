import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-img',
  templateUrl: './card-img.component.html',
  styleUrls: ['./card-img.component.css']
})
export class CardImgComponent implements OnInit {
  @Input() listImg: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
