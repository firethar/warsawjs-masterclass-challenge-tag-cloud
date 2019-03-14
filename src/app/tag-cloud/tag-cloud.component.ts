import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-cloud',
  templateUrl: './tag-cloud.component.html',
  styleUrls: ['./tag-cloud.component.scss']
})
export class TagCloudComponent implements OnInit {
  public tags = [];

  constructor() { }

  displayTags():void {
    this.tags = [
      {
        "level": 20,
        "value": "Czerwony"
      },
      {
        "level": 14,
        "value": "Zielony"
      },
      {
        "level": 30,
        "value": "Niebieski"
      }
    ];
  };

  ngOnInit() {
    this.displayTags();
  }

}
