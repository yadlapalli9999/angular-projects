import { Component, OnInit, Input } from '@angular/core';
import { Featured } from '../featured';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
 @Input() show:Featured;
  constructor() { }

  ngOnInit() {
  }

}
