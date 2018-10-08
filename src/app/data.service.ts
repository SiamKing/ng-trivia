import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from './data.model';
import { Observable } from 'rxjs';

const API_URL = 'https://opentdb.com/api.php?amount=10&type=multiple'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  category: Category;
  difficulty: string;

  constructor(private http: HttpClient) { }

  getQuestions() {
    if (this.category != null) {
      return this.http.get(API_URL + '&category=' + this.category.id + '&difficulty=' + this.difficulty);
    } else {
      return new Observable<undefined>();
    }
  }

  setValues(category: Category, difficulty: string) {
    this.category = category;
    this.difficulty = difficulty;
  }

}
