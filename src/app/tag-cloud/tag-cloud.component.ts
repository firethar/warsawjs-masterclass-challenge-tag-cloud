import { Component, OnInit } from '@angular/core';
import { TagCloudService } from './tag-cloud.service';

@Component({
  selector: 'app-tag-cloud',
  templateUrl: './tag-cloud.component.html',
  styleUrls: ['./tag-cloud.component.scss']
})
export class TagCloudComponent implements OnInit {
  public tags = [];
  public error: string = '';

  constructor(private allTags: TagCloudService) { }

  displayTags() {
    this.allTags.getTags()
      .subscribe((data:any[]) => {
        this.tags = data;
      },
      (error: any) => {
        if (error) this.error = 'Wystąpił błąd. Spróbuj ponownie';
      });
  }

  ngOnInit() {
    this.displayTags();
  }

}
