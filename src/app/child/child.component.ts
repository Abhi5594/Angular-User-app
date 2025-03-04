import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ChildComponent {
  @Output() userAdded = new EventEmitter<any>();
  user = { firstname: '', lastname: '', userid: '', age: '', email: '', address: '' };

  submitForm() {
    this.userAdded.emit(this.user);
    this.user = { firstname: '', lastname: '', userid: '', age: '', email: '', address: '' };
  }
}