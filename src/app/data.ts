import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostService {
  constructor(private http: HttpClient) {

  }

  getPosts() : Observable<any>{
    return this.http.get(`https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2`);
  }
}