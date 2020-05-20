import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {
  }

  add(todo) {
    return this.http.post('...', todo).pipe(map(value => from([[1, 2, 3]])));
  }

  getTodos() {
    return this.http.get('...').pipe(map(value => [1, 2, 3]));
  }

  getTodosPromise() {
    return this.http.get('...').pipe(map(value => [1, 2, 3])).toPromise();
  }

  delete(id) {
    return this.http.delete('...');
  }
}
