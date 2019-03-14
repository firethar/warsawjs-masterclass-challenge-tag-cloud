import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TagCloudService {
  private tagsURL = './assets/tags.json';

  constructor(private http: HttpClient) {  }

  public getTags() {
    return this.http.get(this.tagsURL);
  }

}
