import { Component, OnInit } from '@angular/core';
import { TagCloudService } from './tag-cloud.service';
import { ITagCloud } from './tag-cloud';

@Component({
  selector: 'app-tag-cloud',
  templateUrl: './tag-cloud.component.html',
  styleUrls: ['./tag-cloud.component.scss']
})
export class TagCloudComponent implements OnInit {
  tags: ITagCloud[] = [];
  errorMessage: string = '';

  constructor(private allTags: TagCloudService) { }

  displayTags() {
    this.allTags.getTags()
      .subscribe(
        data => this.tags = data,
        error => this.errorMessage = 'Wystąpił błąd. Spróbuj ponownie'
      );
  }

  ngOnInit() {
    this.displayTags();
  }

}
