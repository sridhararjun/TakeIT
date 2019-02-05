import { Component, OnInit } from '@angular/core';

import { Model } from '../model';

@Component({
  selector: 'app-junior-artist-bill',
  templateUrl: './junior-artist-bill.component.html',
  styleUrls: ['./junior-artist-bill.component.css']
})
export class JuniorArtistBillComponent implements OnInit {

  public entry: Array<Model> = [];
  private newAttribute: any = {};

  addFieldValue() {
      this.entry.push(this.newAttribute);
      this.newAttribute = {};
  }

  deleteFieldValue(index) {
    this.entry.splice(index, 1);
  }
  constructor() { }

  ngOnInit() {
  }

}
