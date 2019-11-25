import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Note } from '../note';
import { HttpClient } from '@angular/common/http';

let notelist = [];
@Injectable()
export class NotesService {
  constructor(private httpClient: HttpClient) { }
  getNotes(): Observable<Array<Note>> {
    return this.httpClient.get<Array<Note>>('http://localhost:3000/notes');
  }
  addNote(note: Note): Observable<Note> {
    console.log("In addNote in service");
    return this.httpClient.post<Note>('http://localhost:3000/notes', note);
  }
}
