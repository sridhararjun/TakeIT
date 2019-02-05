import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-junior-artist-bill',
  templateUrl: './junior-artist-bill.component.html',
  styleUrls: ['./junior-artist-bill.component.css']
})
export class JuniorArtistBillComponent implements OnInit {

  private fieldArray: Array<any> = [];
    private newAttribute: any = {};

    addFieldValue() {
        this.fieldArray.push(this.newAttribute)
        this.newAttribute = {};
    }

    deleteFieldValue(index) {
        this.fieldArray.splice(index, 1);
    }
  constructor() { }

  ngOnInit() {
  }

}
