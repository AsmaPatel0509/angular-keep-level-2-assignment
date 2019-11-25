import { Component } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  errMessage: "Title and Text both are required fields";
  note: Note = new Note();
  notes: Array<Note> = [];
  title: string;
  text: string;
  id: number;
 
  flag: boolean = false;
  constructor(private noteservice: NotesService) { }
  ngOnInit() {
    this.noteservice.getNotes().subscribe(
      data => {
        console.log(data);
        this.notes = data;
      },
      error => {
        this.errMessage = error.message;
      }
    );
  }
  addNote1() {
    if (this.note.text == null || this.note.title == null) {
      this.errMessage = "Title and Text both are required fields";
    }
    this.notes.push(this.note);
    this.noteservice.addNote(this.note).subscribe((data) => {
    },
      error => {
        this.errMessage = error.message;
        this.notes.pop();
      });
    this.note.text = '';
    this.note.title = '';
  }

}
