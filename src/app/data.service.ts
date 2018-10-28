import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from './data.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const API_URL = 'https://opentdb.com/api.php?amount=10&type=multiple'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  category: Category;
  difficulty: string;
  catMedIds = [19, 20, 21, 24, 26, 27];

  constructor(private http: HttpClient, private router: Router) { }

  getQuestions() {
    if (this.category != null) {
      return this.http.get(API_URL + '&category=' + this.category.id + '&difficulty=' + this.difficulty);
    } else {
      this.router.navigate(['/'])
    }
  }

  setValues(category: Category, difficulty: string) {
    this.category = category;
    if (this.catMedIds.includes(category.id)) {
      this.difficulty = 'medium'
    } else {
      this.difficulty = difficulty;
    }
  }

}
