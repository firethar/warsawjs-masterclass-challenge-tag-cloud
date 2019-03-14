import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITagCloud } from './tag-cloud';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagCloudService {
  private tagsURL = './assets/tags.json';

  constructor(private http: HttpClient) {  }

  public getTags(): Observable<ITagCloud[]> {
    return this.http.get<ITagCloud[]>(this.tagsURL);
  }

}
